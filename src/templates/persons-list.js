import React from 'react';
import { graphql } from 'gatsby';
import PersonItem from '../components/personitem';
import Pagination from '../components/pagination';

const PersonList = props => {
  const personList = props.data.allMarkdownRemark.edges;
  // Logic for Pagination Component
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/data/person' : `/data/person/${currentPage - 1}`;
  const nextPage = `/data/person/page/${currentPage + 1}`;
  return (
    <>
      <div>
        {personList.map(
          ({
            node: {
              frontmatter: { description, name, image, birthdate },
              fields: { slug },
            },
          }) => (
            <PersonItem
              slug={`/data/person/${slug}`}
              name={name}
              description={description}
              birthdate={birthdate}
              image={image}
            />
          )
        )}
      </div>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export const query = graphql`
  query PersonList($locale: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___name, order: ASC }
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(data/person)/.*.md$/" }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            name
            description
            image
            birthdate
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

export default PersonList;