"use client"

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";


const Navbar = () => {
    const { isSignedIn } = useUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <div className="p-1 bg-primary/10 rounded">
                    <ZapIcon className="size-4 text-primary" />
                </div>
                <span className="text-xl font-bold font-mono">Gym <span className="text-primary">Buddy</span>.ai</span>
            </Link>
            {/* Navigation Links */}
            <nav className="flex items-center gap-5">
                {isSignedIn ? (
                    <>
                        <Link href="/" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                            <HomeIcon className="size-4" />
                            <span>Home</span>
                        </Link> 
                        <Link href="/generate-program" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                            <DumbbellIcon className="size-4" />
                            <span>Generate</span>
                        </Link>
                        <Link href="/profile" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                            <UserIcon className="size-4" />
                            <span>Profile</span>
                        </Link>
                        <Button asChild variant="outline" className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10">
                            <Link href="/generate-program">Get Started</Link>
                        </Button>
                        <UserButton />
                    </>
                ) : <>
                    <SignInButton>
                        <Button variant="outline" className="border-primary/50 text-primary hover:text-white hover:bg-primary/10">
                            Sign In
                        </Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button variant="outline" className="border-primary/50 text-primary hover:text-white hover:bg-primary/10">
                            Sign Up
                        </Button>
                    </SignUpButton>
                </>}
            </nav>
        </div>

    </header>
  )
}

export default Navbar