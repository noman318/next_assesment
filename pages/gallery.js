import Header from "@/components/Header";
import React from "react";
import styles from "../styles/Gallery.module.css";
import galleryData from "@/data/galleryData";
import Footer from "@/components/Footer";

function Gallery() {
  // console.log("galleryData", galleryData);
  return (
    <div>
      {/* <Header /> */}
      <div class={styles.gallery_section}>
        <div class={styles.gallery_content}>
          <h1>Gallery</h1>
        </div>
      </div>
      <div class={styles.gallery}>
        <h2>Images</h2>
        <div class={styles.feature_data}>
          {galleryData?.map((gallery, id) => (
            <div class={styles.feature_cards} key={id}>
              <img src={gallery.img} loading="'lazy" alt="architecture" />
              <p>{gallery.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div class={styles.button_to_top}>
        <a href="#">Top</a>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Gallery;
