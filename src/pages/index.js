import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col, Container } from 'react-bootstrap';
import translateThis from '../components/useTranslations';
import PersonPreview from '../components/PersonPreview.tsx';
import Head from '../components/Head';
import { sectionTitle, authorOfDay } from '../styles/PersonFullView.module.scss';

const MILLISECONDS_IN_DAY = 86400000;

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const { home, mainPageContent } = translateThis();
  const personList = allMarkdownRemark.edges;
  const randomIndex =
    Math.floor(Date.now() / MILLISECONDS_IN_DAY) % personList.length;
  const randomPerson = personList[randomIndex].node;
  let authorOfDay = '';
  switch (randomPerson.frontmatter.lang) {
    case 'BY':
      authorOfDay = 'Аўтар дня';
      break;
    case 'EN':
      authorOfDay = 'Author of the day';
      break;
    case 'RU':
      authorOfDay = 'Автор дня';
      break;
    default:
      authorOfDay = 'Author of the day';
  }
  return (
    <div className="mainpage">
      <Head title="Home" />
      <h1>{home}!</h1>
      <p>{mainPageContent}</p>
      <h2 className={sectionTitle}>{authorOfDay}</h2>
      <hr/>
      <Container>
        <Row className={authorOfDay}>
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
    ) {
      edges {
        node {
          frontmatter {
            shortname
            description
            src
            yearsoflife
            previewDescription
            lang
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
