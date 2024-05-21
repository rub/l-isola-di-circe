import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PlainButton from "../plainButton/plainButton";
import Icon from "../icon/icon";
import {
  gallery,
  wrapper,
  pictureWrapper,
  picture,
  headWrapper,
  head,
  title,
  carousel,
  carouselShown,
  dismissButton,
  carouselImageWrapper,
  fadeIn,
  fadeOut,
  carouselImage,
  navigationButton,
  prev,
  next,
  imageCounter,
} from "./gallery.module.css";

const Gallery = () => {
  const [isCarouselShown, setIsCarouselShown] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [transitionImage, setTransitionImage] = useState(0);
  const [fade, setFade] = useState("");

  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { glob: "carousel/*" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, width: 1024)
            }
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map(({ node }) => ({
    gatsbyImage: getImage(node.childImageSharp.gatsbyImageData),
    // Remove file extension and replace any dash with a space
    altText: node.base.split(".")[0].replace(/-/g, " "),
  }));

  const showCarousel = (index) => {
    setCurrentImage(index);
    setTransitionImage(index);
    setIsCarouselShown(true);
    setFade(fadeIn);
  };

  const dismissCarousel = () => {
    setIsCarouselShown(false);
  };

  const changeImage = (index) => {
    setFade(fadeOut);
    setTimeout(() => {
      setCurrentImage(index);
      setTransitionImage(index);
      setFade(fadeIn);
    }, 120); // This duration should match the CSS transition time
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        dismissCarousel();
      } else if (e.key === "ArrowRight") {
        changeImage((currentImage + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        changeImage((currentImage - 1 + images.length) % images.length);
      }
    };

    if (isCarouselShown) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCarouselShown, currentImage, images.length]);

  return (
    <div className={gallery}>
      <div className={headWrapper}>
        <div className={head}>
          <h2 className={title}>Esplora il nostro appartamento</h2>
          <PlainButton
            label="Vedi tutte le foto"
            icon="Gallery"
            onClick={() => showCarousel(0)}
          />
        </div>
      </div>
      <div className={wrapper}>
        {
          // Get the first 10 images
          images.slice(0, 10).map((imageData, index) => (
            <div
              key={index}
              className={pictureWrapper}
              onClick={() => showCarousel(index)}
            >
              <GatsbyImage
                className={picture}
                image={imageData.gatsbyImage}
                alt={imageData.altText}
              />
            </div>
          ))
        }
      </div>
      <div className={`${carousel} ${isCarouselShown ? carouselShown : ""}`}>
        <button className={dismissButton} onClick={dismissCarousel}>
          <Icon name="Close" width={48} height={48} />
        </button>
        <div className={carouselImageWrapper}>
          <GatsbyImage
            key={transitionImage}
            className={`${carouselImage} ${fade}`}
            image={images[transitionImage].gatsbyImage}
            alt={images[transitionImage].altText}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
        <button
          className={`${navigationButton} ${prev}`}
          onClick={() =>
            changeImage((currentImage - 1 + images.length) % images.length)
          }
        >
          <Icon name="NavigateBack" width={48} height={48} />
        </button>
        <button
          className={`${navigationButton} ${next}`}
          onClick={() => changeImage((currentImage + 1) % images.length)}
        >
          <Icon name="NavigateForward" width={48} height={48} />
        </button>
        <div className={imageCounter}>{`${currentImage + 1} / ${
          images.length
        }`}</div>
      </div>
    </div>
  );
};

export default Gallery;
