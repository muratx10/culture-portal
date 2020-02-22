import React from 'react';
import { graphql } from 'gatsby';
import { Figure, Alert, Container, Row, Col } from 'react-bootstrap';

interface Data {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        developers: Developer[];
      };
    };
  };
}

interface Developer {
  name: string;
  github: string;
  avatar: string;
}

const developerCard = (developer: Developer, index: number) => {
  return (
    <Col key={index} md={2}>
      <Figure className="text-center">
        <Figure.Image
          width={300}
          src={developer.avatar}
          alt="No avatar...)"
          rounded
        />
        <Figure.Caption>
          <Alert variant="primary">
            <h4>{developer.name}</h4>
            <h6>{developer.github}</h6>
          </Alert>
        </Figure.Caption>
      </Figure>
    </Col>
  );
};

export default ({ data }: Data) => {
  const { developers, title } = data.markdownRemark.frontmatter;

  return (
    <div>
      <h2 className="text-center d-block mb-5">{title}</h2>

      <Container>
        <Row className="justify-content-center">
          {developers.map(developerCard)}
        </Row>
      </Container>
    </div>
  );
};

export const query = graphql`
  query Team($locale: String!) {
    markdownRemark(fields: { locale: { eq: $locale }, slug: { eq: "team" } }) {
      frontmatter {
        title
        developers {
          name
          github
          avatar
        }
      }
    }
  }
`;