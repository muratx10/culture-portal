import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head';
import pageStyles from '../styles/page.module.scss'

const Page = props => {
  const person = props.data.markdownRemark;
  return (
    <>
      <Head title={person.frontmatter.name} />
      <p>{person.frontmatter.name}</p>
      <div className={pageStyles.page} dangerouslySetInnerHTML={{ __html: person.html }}></div>
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
