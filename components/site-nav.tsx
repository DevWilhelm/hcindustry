'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import type { NavItem } from './site';

export function SiteNav({ navItems }: { navItems: NavItem[] }) {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!desktopOpen) return;

    function onPointerDown(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDesktopOpen(false);
      }
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [desktopOpen]);

  function toggleMobileNav() {
    setMobileOpen((value) => {
      if (value) setMobileMarketsOpen(false);
      return !value;
    });
  }

  function closeMobileNav() {
    setMobileOpen(false);
    setMobileMarketsOpen(false);
  }

  return (
    <div className="site-nav-root">
      <nav className="primary-nav" aria-label="Main navigation">
        {navItems.map((item) =>
          item.children ? (
            <div className="nav-dropdown" key={item.href} ref={dropdownRef}>
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={desktopOpen}
                aria-controls="markets-dropdown-panel"
                onClick={() => setDesktopOpen((value) => !value)}
              >
                {item.label}
                <ChevronDown size={16} aria-hidden="true" className="nav-chevron" />
              </button>
              <div
                id="markets-dropdown-panel"
                className="nav-dropdown-panel"
                data-open={desktopOpen ? 'true' : undefined}
              >
                <ul>
                  <li>
                    <Link href={item.href} className="nav-dropdown-all">
                      All Markets
                    </Link>
                  </li>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={() => setDesktopOpen(false)}>
                        {child.flag ? <span aria-hidden="true">{child.flag}</span> : null}{' '}
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-panel"
        onClick={toggleMobileNav}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        <span className="sr-only">Menu</span>
      </button>

      <nav
        id="mobile-nav-panel"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!mobileOpen}
      >
        <ul>
          {navItems.map((item) =>
            item.children ? (
              <li key={item.href} className="mobile-nav-accordion">
                <button
                  type="button"
                  className="mobile-accordion-trigger"
                  aria-expanded={mobileMarketsOpen}
                  aria-controls="mobile-markets-list"
                  onClick={() => setMobileMarketsOpen((value) => !value)}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={mobileMarketsOpen ? 'nav-chevron rotated' : 'nav-chevron'}
                  />
                </button>
                <ul id="mobile-markets-list" hidden={!mobileMarketsOpen}>
                  <li>
                    <Link href={item.href} onClick={closeMobileNav}>
                      All Markets
                    </Link>
                  </li>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={closeMobileNav}>
                        {child.flag ? <span aria-hidden="true">{child.flag}</span> : null}{' '}
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} onClick={closeMobileNav}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
  );
}
