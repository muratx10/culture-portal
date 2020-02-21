import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import LocalizedLink from './localizedlink';

const PersonItem = ({ slug, name, description, yearsoflife, src }) => {
  // const { listImages } = useStaticQuery(
  //   graphql`
  //     query {
  //       listImages: allFile {
  //         edges {
  //           node {
  //             childImageSharp {
  //               fluid(maxWidth: 600, maxHeight: 350) {
  //                 src
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  // );

  // const personImgCover = listImages.edges.find(img => {
  //   return img.node.childImageSharp.fluid.src.includes('cover');
  // });

  // const imgName = image ? image.split('/')[3] : false;

  // const personImg = imgName
  //   ? listImages.edges.find(img => {
  //     return img.node.childImageSharp.fluid.src.includes(imgName);
  //   })
  //   : false;

  return (
    <section key={slug}>
      {/* {personImg && (
          <img
            fluid={personImg.node.childImageSharp.fluid}
            alt={name}
          />
        )}
        {!personImg && (
          <img
            fluid={personImgCover.node.childImageSharp.fluid}
            alt={name}
          />
        )} */}
      <div>
        <LocalizedLink to={slug}>
          
          <h1>{name}</h1>
          <img className="person-photo" alt="photo" src={src} />
        </LocalizedLink>
        <p>{yearsoflife}</p>
        <p>{description}</p>
      </div>
    </section>
  );
};

PersonItem.propTypes = {
  slug: PropTypes.string.isRequired,
  yearsoflife: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PersonItem;
