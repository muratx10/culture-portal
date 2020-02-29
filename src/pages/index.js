import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col, Container } from 'react-bootstrap';
import translateThis from '../components/useTranslations';
import PersonPreview from '../components/PersonPreview.tsx';
import Head from '../components/Head.tsx';
import {
  sectionTitle,
  authorOfDay,
} from '../styles/PersonFullView.module.scss';
import Welcome from '../components/WelcomeSection.tsx';

const MILLISECONDS_IN_DAY = 86400000;

const getAuthorOfTheDaySlug = personList => {
  const lastDayIndex = +localStorage.getItem('lastDayIndex');
  const curDayIndex =
    Math.floor(Date.now() / MILLISECONDS_IN_DAY) % personList.length;
  if (curDayIndex === lastDayIndex) {
    return localStorage.getItem('lastAuthorOfDaySlug');
  }
  const curAuthorOfDaySlug = personList[curDayIndex].node.fields.slug;
  localStorage.setItem('lastDayIndex', curDayIndex);
  localStorage.setItem('lastAuthorOfDaySlug', curAuthorOfDaySlug);
  return curAuthorOfDaySlug;
};

const getAuthorOfTheDay = personList => {
  if (typeof localStorage === 'undefined') {
    return personList[0].node;
  }
  const authorOfTheDaySlug = getAuthorOfTheDaySlug(personList);
  const author = personList.find(
    ({
      node: {
        fields: { slug },
      },
    }) => slug === authorOfTheDaySlug
  );
  return (author ? author : personList[0]).node;
};

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const { authorOfDayTitle } = translateThis();
  const personList = allMarkdownRemark.edges;
  const randomPerson = getAuthorOfTheDay(personList);
  return (
    <div className="mainpage">
      <Head title="Home" />
      <Welcome />
      <h2 className={sectionTitle}>{authorOfDayTitle}</h2>
      <hr />
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
