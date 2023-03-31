import Header from "@/components/Header";
import React from "react";
import styles from "../styles/Gallery.module.css";
import galleryData from "@/data/galleryData";
import Footer from "@/components/Footer";
import Image from "next/image";

function Gallery() {
  // console.log("galleryData", galleryData);
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Our Gallery</h1>
        </div>
        <Image
          src="/gallery.jpg"
          height={600}
          width={1352}
          alt="My Image"
          loading="lazy"
        />
      </div>
      <div className={styles.gallery}>
        <h2>Images</h2>
        <div className={styles.feature_data}>
          {galleryData?.map((gallery, id) => (
            <div className={styles.feature_cards} key={id}>
              <Image
                src={gallery.img}
                width={800}
                height={800}
                loading="lazy"
                alt="architecture"
              />
              <p>{gallery.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.button_to_top}>
        <a href="#">Top</a>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Gallery;
