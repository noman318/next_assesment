import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";

function Contact() {
  return (
    <>
      {/* <Header /> */}
      <div>
            <div className={styles.container}>
      <div className={styles.content}>
        <h1>Contact Us</h1>
      </div>
      <Image src="/contact-bg.jpg" alt="My Image" layout="fill" objectFit="cover" />
    </div>
        <div className={styles.contact_main_section}>
          <div className={styles.card}>
            <div className={styles.cards}>
              <Image width={700} height={700} src="/contact.jpg" loading="lazy" alt="contact_us" />
            </div>
          </div>
          <div className={styles.cards}>
            <form className={styles.form}>
              <label className={styles.label} htmlFor="fname">
                First Name
              </label>
              <input
                className={styles.inputType}
                type="text"
                id="fname"
                name="fname"
                required
                placeholder="First Name"
              />
              <label className={styles.label} htmlFor="lname">
                Last Name
              </label>
              <input
                className={styles.inputType}
                type="text"
                id="lname"
                name="lname"
                required
                placeholder="Last Name"
              />
              <label className={styles.label} htmlFor="email">
                Email Id
              </label>
              <input
                className={styles.inputType}
                type="email"
                id="lname"
                name="email"
                required
                placeholder="Mail Id"
                // mailto:value="shaikhmohdnoman612@gmail.com"
              />
              <label className={styles.label} htmlFor="email">
                Message
              </label>
              <input
                className={styles.inputType}
                type="text"
                id="message"
                name="message"
                required
                placeholder="Your message here ..."
              />
              <button className={styles.button_to_top} type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.button_to_top}>
        <a href="#">Top</a>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
