"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import styles from "../styles/Navbar.module.css";

function Header() {
  // const router = useRouter();
  return (
    <div>
      <nav className={styles.navbar}>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/building-2816550-2338428.png?f=avif&w=256"
          loading="lazy"
          alt=""
          srcSet=""
        />
        <div className={styles.nav_links} id="nav-links">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/services">SERVICES</Link>
            </li>
            <li>
              <Link href="/gallery">GALLERY</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
