"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-main">
      <div className="container">
        <div className={`header-wrapper ${scrolled ? "shrink" : ""}`}>
          <Link href="/" className='headerLogo'><Image src="/images/logo/headerLogo.svg" alt='header-logo' width={176} height={34} priority={true} /></Link>

          <div className="header-nav-links">
            <ul>
              <li><Link href="/" className='text-18 text-rg'>About</Link></li>
              <li><Link href="/" className='text-18 text-rg'>Solutions</Link></li>
              <li><Link href="/" className='text-18 text-rg'>Security & Compliance</Link></li>
              <li><Link href="/" className='text-18 text-rg'>Resources</Link></li>
            </ul>
          </div>

          <div className="contact-link">
            <Link href="/" className='header-contact-link link-padding text-md text-18 site-radius-50'>Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Header = () => {
//   return (
//     <header className="header-main">
//       <div className="container">
//         <div className="header-wrapper">
//           <Image src="/images/logo/headerLogo.svg" alt='header-logo' width={176} height={34} priority={true}></Image>

//           <div className="header-nav-links">
//             <ul>
//               <li>
//                 <Link href="/" className='text-18 text-rg'>About</Link>
//               </li>
//               <li>
//                 <Link href="/" className='text-18 text-rg'>Solutions</Link>
//               </li>
//               <li>
//                 <Link href="/" className='text-18 text-rg'>Security & Compliance</Link>
//               </li>
//               <li>
//                 <Link href="/" className='text-18 text-rg'>Resources</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="contact-link">
//             <Link href="/" className='header-contact-link link-padding text-md text-18 site-radius-50'>Contact</Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header