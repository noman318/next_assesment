import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

function HeroSection() {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h4>Top Construction Company in India</h4>
        <h1>L&T Engineering & Construction Division</h1>
        <div className={styles.hero_content_data}>
          <p>
            L&T Construction, India's largest construction organization and
            ranked among the world's top 30 contractors.
          </p>
        </div>
      </div>
      <Image
        src="/mainBuilding.jpg"
        height={600}
        width={1352}
        alt="My Image"
        loading="lazy"
      />
    </div>
  );
}

export default HeroSection;
