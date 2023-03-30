import React from "react";
import styles from "../styles/Services.module.css";
import serviceData from "@/data/serviceData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

function Services() {
  // console.log("serviceData", serviceData);
  return (
    <div>
      {/* <Header /> */}
      <div>
        <div className={styles.container}>
      <div className={styles.content}>
        <h1>Our Services</h1>
      </div>
      <Image src="/work12.jpg" alt="My Image" layout="fill" objectFit="cover" />
    </div>
        <div className={styles.feature_data}>
          {serviceData?.map((service, id) => (
            <div className={styles.feature_cards} key={id}>
              <Image src={service.img} width={800} height={800} alt="architecture" />
              <h3>{service.title}</h3>
              <p>{service.para}</p>
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

export default Services;
