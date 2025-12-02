"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
              <li><Link href="/About">About</Link></li>
              <li><Link href="/Solutions">Solutions</Link></li>
              <li><Link href="/SecurityCompliance">Security & Compliance</Link></li>
              <li><Link href="/BlogListing">Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="contact-link site-radius-50">
            <Link href="/Contact" className="header-contact-link site-radius-50 link-padding">
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
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/Solutions" onClick={() => setMenuOpen(false)}>Solutions</Link></li>
          <li><Link href="/SecurityCompliance" onClick={() => setMenuOpen(false)}>Security & Compliance</Link></li>
          <li><Link href="/BlogListing" onClick={() => setMenuOpen(false)}>Resources</Link></li>
          <li><Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
