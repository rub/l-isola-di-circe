import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  gallery,
  wrapper,
  gridColumn,
  picture,
  titleWrapper,
  title,
} from "./gallery.module.css";

const Gallery = () => {
  return (
    <div className={gallery}>
      <div className={titleWrapper}>
        <h2 className={title}>Esplora il nostro appartamento</h2>
      </div>
      <div className={wrapper}>
        <div className={gridColumn}>
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1598897451897-a1fb4356827a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
        </div>
        <div className={gridColumn}>
          {/* <h2 className={title}>Esplora il nostro appartamento</h2> */}
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
        </div>
        <div className={gridColumn}>
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1598897451897-a1fb4356827a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
        </div>
        <div className={gridColumn}>
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1598897451897-a1fb4356827a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
        </div>
        <div className={gridColumn}>
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
        </div>
        <div className={gridColumn}>
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1529408632839-a54952c491e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <StaticImage
            className={picture}
            src={
              "https://images.unsplash.com/photo-1598897451897-a1fb4356827a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
