"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Button } from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Results', href: '/results' },
  { name: 'Blog', href: '/blog' },
  { name: 'Work With Me', href: '/work-with-me' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string, name: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Header navigation clicked:', name, 'href:', href);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-border/50 py-4 sticky top-0 z-50 transition-all duration-200">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-foreground font-bold text-xl hover:text-primary transition-colors duration-200">
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                OnlyDeb
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`text-base font-medium transition-all duration-200 hover:text-primary relative ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-hover rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button href="/work-with-me/" variant="gradient" size="default">
              Let's Work Together
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 bg-secondary/50 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    handleNavClick(item.href, item.name);
                    setIsOpen(false);
                  }}
                  className={`text-base font-medium transition-all duration-200 hover:text-primary py-2 ${
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50">
                <Button href="/work-with-me/" variant="gradient" size="default" className="w-full">
                  Let's Work Together
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
} 