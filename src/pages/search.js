import React from 'react';
import { graphql } from 'gatsby';
import { InputGroup, FormControl } from 'react-bootstrap';
import Head from '../components/Head';
import PersonPreview from '../components/PersonPreview';
import Pagination from '../components/Pagination';
import lang from '../../config/translations/translation.json';

const PERSON_PER_PAGE = 4;
const lastStatus = { currentPage: 1 };

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...lastStatus };
  }

  onPaginationClick = currentPage => {
    this.setState({ currentPage });
    lastStatus.currentPage = currentPage;
  };

  onInputChange = event => {
    const name = event.target.getAttribute('name');
    const { value } = event.target;
    this.setState({ [name]: value.trim() });
    lastStatus[name] = value.trim();
  };

  render() {
    const { filterText = '', currentPage = 1 } = this.state;
    const lowerCaseFilterText = filterText.toLowerCase();
    const filteredPersonList = this.props.data.allMarkdownRemark.edges.filter(
      ({
        node: {
          frontmatter: { name, birthplace },
        },
      }) =>
        !lowerCaseFilterText ||
        name.toLowerCase().includes(lowerCaseFilterText) ||
        birthplace.toLowerCase().includes(lowerCaseFilterText)
    );
    const numPages = Math.ceil(filteredPersonList.length / PERSON_PER_PAGE);
    const curPage = Math.max(1, Math.min(currentPage, numPages));
    const curPagePersonList = filteredPersonList.slice(
      (curPage - 1) * PERSON_PER_PAGE,
      curPage * PERSON_PER_PAGE
    );
    const { findPoet, findPoetPlaceHolderText, findPoetEmptyList } = lang[
      this.props.pageContext.locale
    ];
    return (
      <>
        <Head title={findPoet} />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              {findPoet}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            id="filterText"
            name="filterText"
            type="text"
            value={filterText}
            placeholder={findPoetPlaceHolderText}
            onChange={this.onInputChange}
          />
        </InputGroup>
        <div>
          {!curPagePersonList.length ? (
            <div>{findPoetEmptyList}</div>
          ) : (
            curPagePersonList.map(
              ({
                node: {
                  frontmatter: { description, name, src, yearsoflife },
                  fields: { slug },
                },
              }) => (
                <PersonPreview
                  slug={`/data/person/${slug}`}
                  key={slug}
                  name={name}
                  src={src}
                  description={description}
                  yearsoflife={yearsoflife}
                />
              )
            )
          )}
        </div>

        <Pagination
          currentPage={curPage}
          numPages={numPages}
          onButtonClick={this.onPaginationClick}
        />
      </>
    );
  }
}

export const query = graphql`
  query PersonList($locale: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___name, order: ASC }
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(data/person)/.*.md$/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            description
            src
            yearsoflife
            birthplace
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
