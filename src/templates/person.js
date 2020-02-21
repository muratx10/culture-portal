import React from 'react';
import { graphql } from 'gatsby';
import translateThis from '../components/useTranslations';

const Person = props => {
  const person = props.data.markdownRemark;
  const { yearsOfLife } = translateThis();
  return (
    <>
      <h1>{person.frontmatter.name}</h1>
      <img className="person-photo" alt="photo" src={person.frontmatter.src} />
      <p>{`${yearsOfLife}: ${person.frontmatter.yearsoflife}`}</p>
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
