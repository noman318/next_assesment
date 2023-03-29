import React from "react";
import styles from "../styles/About.module.css";
import aboutDummy from "../data/aboutData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function About() {
  // console.log("aboutDummy", aboutDummy);
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.about_section}>
        <div className={styles.about_content}>
          <h1>About Us</h1>
        </div>
      </div>
      <div className={styles.main_content}>
        <div className={styles.about_image}>
          <img src="/work.jpg" loading="'lazy" alt="about_image" />
        </div>
        <div className={styles.about_image_data}>
          <h2>
            <b>We Serve all of your Construction Services</b>
          </h2>
          <h4>
            “Construction is a full service construction company offering
            building solutions from start to finish. Our staff has been
            operating on NYC for ten years.
          </h4>
          <p>
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className={styles.features}>
        <h2>Our Features</h2>
        <div className={styles.feature_data}>
          {aboutDummy?.map((about, id) => (
            <div className={styles.feature_cards} key={id}>
              <img src={about.img} loading="'lazy" alt="architecture" />
              <h3>{about.title}</h3>
              <p>{about.para}</p>
            </div>
          ))}
        </div>
        <div className={styles.button_to_top}>
          <a href="#">Top</a>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
