import React from 'react';
import { graphql } from 'gatsby';
import translateThis from '../components/useTranslations';
import PersonItem from '../components/personitem';
import LocalizedLink from '../components/localizedlink';

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const {
    home,
    mainPageContent
  } = translateThis();
  const personList = allMarkdownRemark.edges;
  const randomIndex = Math.floor(Math.random() * personList.length);
  const randomPerson = personList[randomIndex].node;
  return (
    <div className="mainpage">
      <h1>{home}!</h1>
      <p>{mainPageContent}</p>
      <h2>Author of a day</h2>
      <hr />
      <section>
        <PersonItem
          slug={`/data/person/${randomPerson.fields.slug}`}
          birthdate={randomPerson.frontmatter.yearsoflife}
          name={randomPerson.frontmatter.name}
          description={randomPerson.frontmatter.description}
          image={randomPerson.frontmatter.src}
        />
      </section>
      <br />
      <LocalizedLink to={`/data/person/`}>all person</LocalizedLink>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($locale: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(data\/person)\/.*.md$/"}
      }
      sort: { fields: [frontmatter___name], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            name
            description
            src
            yearsoflife
          }
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
