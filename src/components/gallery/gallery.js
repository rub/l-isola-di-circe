import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  gallery,
  wrapper,
  gridColumn,
  picture,
  titleWrapper,
  title,
} from "./gallery.module.css";

// TODO: Use ::before to display the shadow behind pictures.
const Gallery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { glob: "gallery/*" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 300
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map((edge) => {
    const image = getImage(edge.node.childImageSharp);
    return { gatsbyImage: image };
  });

  const columns = [
    [images[0], images[1]], // 1st column: 1st and 2nd images
    [images[2]], // 2nd column: 3rd image
    [images[3], images[4]], // 3rd column: 4th and 5th images
    [images[5], images[6]], // 4th column: 6th and 7th images
    [images[7]], // 5th column: 8th image
    [images[8], images[9]], // 6th column: 9th and 10th images
  ].filter((column) => column[0]);

  return (
    <div className={gallery}>
      <div className={titleWrapper}>
        <h2 className={title}>Esplora il nostro appartamento</h2>
      </div>
      <div className={wrapper}>
        {columns.map((columnImages, columnIndex) => (
          <div key={columnIndex} className={gridColumn}>
            {columnImages.map((imageData, imageIndex) => (
              <GatsbyImage
                key={imageIndex}
                className={picture}
                image={imageData.gatsbyImage}
                alt={`Gallery image ${columnIndex * 2 + imageIndex + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
