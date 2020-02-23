import React from 'react';
import { graphql } from 'gatsby';
import translateThis from '../components/useTranslations';
import Head from '../components/head';

const Person = props => {
  const person = props.data.markdownRemark;
  const { wasBorn } = translateThis();
  return (
    <>
      <Head title={person.frontmatter.name} />
      <h1>{person.frontmatter.name}</h1>
      <img src={person.frontmatter.src} alt="img"></img>
      <p>{`${wasBorn}: ${person.frontmatter.yearsoflife}`}</p>
      <p>{person.frontmatter.description}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: person.html }}></div>
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
      }
      html
    }
  }
`;

export default Person;
