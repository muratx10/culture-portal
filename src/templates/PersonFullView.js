import React from 'react';
import { graphql } from 'gatsby';
import Figure from 'react-bootstrap/Figure';

import { figure } from '../styles/PersonFullView.module.scss';
import translateThis from '../components/useTranslations';
import Gallery from '../components/Gallery';
import Head from '../components/Head';

const PersonFullView = props => {
  const person = props.data.markdownRemark;
  const { wasBorn, gallery } = translateThis();
  return (
    <>
      <Head title={person.frontmatter.name} />
      <h1 className="text-center">{person.frontmatter.name}</h1>
      <Figure className={figure}>
        <Figure.Image
          width={300}
          alt={person.frontmatter.name}
          src={person.frontmatter.src}
          className="d-block m-auto"
        />
        <Figure.Caption>
          <p>{`${wasBorn}: ${person.frontmatter.yearsoflife}`}</p>
          <p>{person.frontmatter.description}</p>
        </Figure.Caption>
      </Figure>
      <div dangerouslySetInnerHTML={{ __html: person.html }}></div>
      <h2>{gallery}</h2>
      <Gallery gallery={person.frontmatter.gallery} />
    </>
  );
};

export const query = graphql`
  query Person($locale: String!, $name: String!) {
    markdownRemark(
      frontmatter: { name: { eq: $name } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        name
        yearsoflife
        description
        src
        gallery
      }
      html
    }
  }
`;

export default PersonFullView;
