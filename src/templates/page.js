import React from 'react';
import { graphql } from 'gatsby';

const Page = props => {
  const person = props.data.markdownRemark;
  return (
    <>
      <p>{person.frontmatter.name}</p>
      <div dangerouslySetInnerHTML={{ __html: person.html }}></div>
    </>
  );
};

export const query = graphql`
  query Page($locale: String!, $name: String!) {
    markdownRemark(
      frontmatter: { name: { eq: $name } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        name
      }
      html
    }
  }
`;

export default Page;
