"use client";

import { useState } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {
  DumbbellIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  ZapIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileNav = (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t border-border z-40 shadow-md">
      <div className="flex flex-col gap-4 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm hover:text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          <HomeIcon className="size-4" />
          <span>Home</span>
        </Link>
        <Link
          href="/generate-program"
          className="flex items-center gap-2 text-sm hover:text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          <DumbbellIcon className="size-4" />
          <span>Generate</span>
        </Link>
        <Link
          href="/profile"
          className="flex items-center gap-2 text-sm hover:text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          <UserIcon className="size-4" />
          <span>Profile</span>
        </Link>
        <Link href="/generate-program" onClick={() => setIsMenuOpen(false)}>
          <Button
            variant="outline"
            className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
          >
            Get Started
          </Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="size-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            Gym <span className="text-primary">Buddy</span>.ai
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon className="size-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon className="size-4" />
                <span>Generate</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon className="size-4" />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isSignedIn ? (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XIcon className="size-6 text-primary" />
              ) : (
                <MenuIcon className="size-6 text-primary" />
              )}
            </button>
          ) : (
            <div className="flex gap-2">
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10 text-xs px-3"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10 text-xs px-3"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isSignedIn && isMenuOpen && mobileNav}
    </header>
  );
};

export default Navbar;
