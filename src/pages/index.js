import React from 'react';
import { graphql } from 'gatsby';
import translateThis from '../components/useTranslations';
import PersonPreview from '../components/PersonPreview.tsx';
import Head from '../components/Head';
import { Row, Col, Container } from 'react-bootstrap';

const MILLISECONDS_IN_DAY = 86400000;

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const { home, mainPageContent } = translateThis();
  const personList = allMarkdownRemark.edges;
  const randomIndex =
    Math.floor(Date.now() / MILLISECONDS_IN_DAY) % personList.length;
  const randomPerson = personList[randomIndex].node;
  return (
    <div className="mainpage">
      <Head title="Home"/>
      <h1>{home}!</h1>
      <p>{mainPageContent}</p>
      <h2>Author of a day</h2>
      <hr/>
      <Container>
        <Row>
          <Col lg className="align-self-center lead mainPreviewText">
            {randomPerson.frontmatter.previewDescription}
          </Col>
          <Col lg>
            <PersonPreview
              slug={`/data/person/${randomPerson.fields.slug}`}
              yearsoflife={randomPerson.frontmatter.yearsoflife}
              shortname={randomPerson.frontmatter.shortname}
              description={randomPerson.frontmatter.description}
              src={randomPerson.frontmatter.src}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($locale: String!) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(data/person)/.*.md$/" }
      }
      sort: { fields: [frontmatter___name], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            shortname
            description
            src
            yearsoflife
            previewDescription
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
