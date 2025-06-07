"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { logError } from '@/lib/utils/errorLogger';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Results', href: '/results' },
  { name: 'Work With Me', href: '/work-with-me' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    try {
      setIsOpen(!isOpen);
    } catch (error) {
      logError(error as Error, { context: 'Header', metadata: { action: 'toggleMenu' } });
    }
  };

  return (
    <header className="bg-white border-b border-[#E5E5E5] py-4 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-[#0F2E4C] font-bold text-xl">
              onlydeb
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[#2D9CDB]'
                    : 'text-[#4F4F4F] hover:text-[#2D9CDB]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/work-with-me">Let's Work Together</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#4F4F4F] hover:text-[#2D9CDB]"
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
          <div className="md:hidden mt-4 py-4 border-t border-[#E5E5E5]">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#2D9CDB]'
                      : 'text-[#4F4F4F] hover:text-[#2D9CDB]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button href="/work-with-me" size="default" className="w-full">
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