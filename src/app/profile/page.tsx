"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import NoFitnessPlan from "@/components/NoFitnessPlan";
import CornerElements from "@/components/CornerElements";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppleIcon, CalendarIcon, DumbbellIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProfilePage = () => {
  const { user } = useUser();
  const userId = user?.id as string;
  console.log("Frontend (useQuery): userId value:", userId);


  const allPlan = useQuery(api.plans.getUserPlans, { userId });

  console.log("Frontend (useQuery): allPlan state:", allPlan);
  const [selectedPlan, setSelectedPlan] = useState<null | string>(null);

  const activePlan = allPlan?.find((plan) => plan.isActive);

  const currentPlan = selectedPlan
    ? allPlan?.find((plan) => plan._id === selectedPlan)
    : activePlan;

  return (
    <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
      <ProfileHeader user={user} />

      {allPlan && allPlan.length > 0 ? (
  <div className="space-y-8">
    {/* Plan Selection */}
    <div className="relative backdrop-blur-sm border border-border p-4 sm:p-6">
      <CornerElements />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight">
          <span className="text-primary">Your</span>{" "}
          <span className="text-foreground">Fitness Plans</span>
        </h2>
        <div className="font-mono text-xs text-muted-foreground self-end sm:self-auto">
          TOTAL: {allPlan.length}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 -mx-1 px-1">
        {allPlan.map((plan) => (
          <Button
            key={plan._id}
            onClick={() => setSelectedPlan(plan._id)}
            className={`text-foreground border hover:text-white min-w-fit ${
              selectedPlan === plan._id
                ? "bg-primary/20 text-primary border-primary"
                : "bg-transparent border-border hover:border-primary/50"
            }`}
          >
            <span className="truncate max-w-[120px] sm:max-w-none">
              {plan.name}
            </span>
            {plan.isActive && (
              <span className="ml-2 bg-green-500/20 text-green-500 text-xs px-2 py-0.5 rounded whitespace-nowrap">
                ACTIVE
              </span>
            )}
          </Button>
        ))}
            </div>
          </div>

          {/* Current Plan Details */}
          <div className="relative backdrop-blur-sm border border-border rounded-lg p-6">
            <CornerElements />

            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <h3 className="text-lg font-bold">
                PLAN: <span className="text-primary">{currentPlan?.name}</span>
              </h3>
            </div>
            <Tabs defaultValue="workout" className="w-full">
              <TabsList className="mb-6 w-full grid grid-cols-2 bg-cyber-terminal-bg border">
                <TabsTrigger
                  value="workout"
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  <DumbbellIcon className="mr-2 size-4" />
                  Workout Plan
                </TabsTrigger>

                <TabsTrigger
                  value="diet"
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  <AppleIcon className="mr-2 h-4 w-4" />
                  Diet Plan
                </TabsTrigger>
              </TabsList>
              <TabsContent value="workout">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span className="font-mono text-sm text-muted-foreground">
                      SCHEDULE: {currentPlan?.workoutPlan.schedule.join(", ")}
                    </span>
                  </div>

                  <Accordion type="multiple" className="space-y-4">
                    {currentPlan?.workoutPlan.exercises.map((exerciseDay, index) => (
                      <AccordionItem
                          key={index}
                          value={exerciseDay.day}
                          className="border rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/10 font-mono">
                           <div className="flex justify-between w-full items-center">
                              <span className="text-primary">{exerciseDay.day}</span>
                              <div className="text-xs text-muted-foreground">
                                {exerciseDay.routines.length} EXERCISES
                              </div>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="pb-4 px-4">
                            <div className="space-y-3 mt-2">
                              {exerciseDay.routines.map((routine, routineIndex) => (
                                <div
                                  key={routineIndex}
                                  className="border border-border rounded p-3 bg-background/50"
                                >
                                  <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-foreground">
                                      {routine.name}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                      <div className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-mono">
                                        {routine.sets} SETS
                                      </div>
                                      <div className="px-2 py-1 rounded bg-secondary/20 text-secondary text-xs font-mono">
                                        {routine.reps} REPS
                                      </div>
                                    </div>


                                  </div>
                                  {routine.description && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {routine.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                    ))}
                  </Accordion>

                </div>
              </TabsContent>

              <TabsContent value="diet">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-sm text-muted-foreground">
                        DAILY CALORIE TARGET
                      </span>
                      <div className="font-mono text-xl text-primary">
                        {currentPlan?.dietPlan.dailyCalories} KCAL
                      </div>
                    </div>

                    <div className="h-px w-full bg-border my-4"></div>

                    <div className="space-y-4">
                      {currentPlan?.dietPlan.meals.map((meal, index) => (
                        <div
                          key={index}
                          className="border border-border rounded-lg overflow-hidden p-4"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <h4 className="font-mono text-primary">{meal.name}</h4>
                          </div>
                          <ul className="space-y-2">
                            {meal.foods.map((food, foodIndex) => (
                              <li
                                key={foodIndex}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-xs text-primary font-mono">
                                  {String(foodIndex + 1).padStart(2, "0")}
                                </span>
                                {food}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
            </Tabs>
          </div>
        </div>
      ) : (
        <div>
          <NoFitnessPlan />
        </div>
      )}
    </section>
  );
};

export default ProfilePage;
