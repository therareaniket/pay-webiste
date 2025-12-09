"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check immediately on load
    checkScroll();

    // Listen for scroll events
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

      const pathname = usePathname();
      
      const isActive = (href: string) => {
          return pathname?.toLowerCase() === href.toLowerCase();
      };

  return (
    <header className={`header-main ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className={`header-wrapper ${scrolled && !menuOpen ? "shrink" : ""}`}>
          {/* Logo */}
          <Link href="/" className="headerLogo">
            <Image
              src="/images/logo/headerLogo.svg"
              alt="header-logo"
              width={176}
              height={34}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="header-nav-links">
            <ul>
              <li><Link href="/About" className={`${isActive("/About") ? "active-link-header" : ""}`}>About</Link></li>
              <li><Link href="/Solutions" className={`${isActive("/Solutions") ? "active-link-header" : ""}`}>Solutions</Link></li>
              <li><Link href="/SecurityCompliance" className={`${isActive("/SecurityCompliance") ? "active-link-header" : ""}`}>Security & Compliance</Link></li>
              <li><Link href="/BlogListing" className={`${isActive("/BlogListing") ? "active-link-header" : ""}`}>Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="contact-link site-radius-50">
            <Link href="/Contact" className={`header-contact-link text-18 text-md site-radius-50 link-padding ${isActive("/Contact") ? "contact-active-header" : ""}`}>
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link href="/" onClick={() => setMenuOpen(false)} className={`${isActive("/") ? "active-link-header" : ""}`}>Home</Link></li>
          <li><Link href="/About" onClick={() => setMenuOpen(false)} className={`${isActive("/About") ? "active-link-header" : ""}`}>About</Link></li>
          <li><Link href="/Solutions" onClick={() => setMenuOpen(false)} className={`${isActive("/Solutions") ? "active-link-header" : ""}`}>Solutions</Link></li>
          <li><Link href="/SecurityCompliance" onClick={() => setMenuOpen(false)} className={`${isActive("/SecurityCompliance") ? "active-link-header" : ""}`}>Security & Compliance</Link></li>
          <li><Link href="/BlogListing" onClick={() => setMenuOpen(false)} className={`${isActive("/BlogListing") ? "active-link-header" : ""}`}>Resources</Link></li>
          <li><Link href="/Contact" onClick={() => setMenuOpen(false)} className={`${isActive("/Contact") ? "active-link-header" : ""}`}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
