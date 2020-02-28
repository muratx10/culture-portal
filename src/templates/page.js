import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head.tsx';
import pageStyles from '../styles/page.module.scss';

const Page = props => {
  const person = props.data.markdownRemark;
  return (
    <>
      <Head title={person.frontmatter.name} />
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
