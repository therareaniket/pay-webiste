"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-main ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className={`header-wrapper ${scrolled ? "shrink" : ""}`}>
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
              <li><Link href="/">About</Link></li>
              <li><Link href="/Solutions">Solutions</Link></li>
              <li><Link href="/">Security & Compliance</Link></li>
              <li><Link href="/">Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="contact-link site-radius-50">
            <Link href="/" className="header-contact-link site-radius-50 link-padding">
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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Solutions</Link></li>
          <li><Link href="/">Security & Compliance</Link></li>
          <li><Link href="/">Resources</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
