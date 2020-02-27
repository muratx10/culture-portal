import React from 'react';
import { graphql } from 'gatsby';
import Figure from 'react-bootstrap/Figure';

import { figure, sectionTitle } from '../styles/PersonFullView.module.scss';
import translateThis from '../components/useTranslations';
import TimeLine from '../components/Timeline.tsx';
import Gallery from '../components/Gallery.tsx';
import Head from '../components/Head';
import Map from '../components/Map';
import Video from '../components/Video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

const PersonFullView = props => {
  const person = props.data.markdownRemark;
  const { wasBorn, gallery, videoTitle, map } = translateThis();
  return (
    <>
      <Head title={person.frontmatter.name} />
      <h1 className="text-center">{person.frontmatter.name}</h1>
      <Figure className={figure}>
        <Figure.Image
          width={300}
          alt={person.frontmatter.name}
          src={person.frontmatter.src}
          className="d-block m-auto"
        />
        <Figure.Caption>
          <p>{`${wasBorn}: ${person.frontmatter.yearsoflife}`}</p>
          <p>{person.frontmatter.description}</p>
        </Figure.Caption>
      </Figure>
      <TimeLine
        bioTitle={person.frontmatter.bioTitle}
        bioDates={person.frontmatter.bioDates}
        bioDescription={person.frontmatter.bioDescription}
        worksTitle={person.frontmatter.worksTitle}
        workDates={person.frontmatter.workDates}
        workDescription={person.frontmatter.workDescription}
      />

      <h2>{videoTitle}</h2>
      <Video 
      video={person.frontmatter.video}/>
      <h2>{map}</h2>
      <Map
        lat={person.frontmatter.lat}
        lon={person.frontmatter.lon}
        birthplace={person.frontmatter.birthplace}
      />

      <h2 className={sectionTitle}>{gallery}</h2>

      <Gallery gallery={person.frontmatter.gallery} />
    </>
  );
};

export const query = graphql`
  query Person($locale: String!, $name: String!) {
    markdownRemark(
      frontmatter: { name: { eq: $name } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        name
        yearsoflife
        description
        src
        gallery
        worksTitle
        bioTitle
        bioDates
        bioDescription
        workDates
        workDescription
        lat
        lon
        birthplace
        video
        mapTitle

      }
    }
  }
`;

export default PersonFullView;
