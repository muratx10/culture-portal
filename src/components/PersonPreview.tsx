import React from 'react';
import { Figure } from 'react-bootstrap';

import { itemContainer } from '../styles/PersonPreview.module.scss';
import LocalizedLink from './LocalizedLink';

interface Props {
  slug: string;
  shortname: string;
  description: string;
  yearsoflife: string;
  src: string;
}

const PersonPreview: React.FC<Props> = ({
  slug,
  shortname,
  description,
  yearsoflife,
  src,
}) => {
  return (
    <section key={slug} className={itemContainer}>
      <LocalizedLink to={slug}>
        <h1 className="text-center">{shortname}</h1>
        <Figure>
          <Figure.Image
            width={300}
            alt={shortname}
            src={src}
            className="d-block m-auto"
          />
          <Figure.Caption>
            <p className="text-center mb-0">{yearsoflife}</p>
            <p className="text-center">{description}</p>
          </Figure.Caption>
        </Figure>
      </LocalizedLink>

    </section>
  );
};

export default PersonPreview;
