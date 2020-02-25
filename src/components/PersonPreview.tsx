import React from 'react';
import LocalizedLink from './LocalizedLink';
import '../styles/PersonPreview.scss';

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
    <section key={slug}>
      <div className="itemContainer">
        <LocalizedLink to={slug}>
          <h1 className="text-center">{shortname}</h1>
        </LocalizedLink>
        <img src={src} alt="img" className="itemImage" />
        <p>{yearsoflife}</p>
        <p>{description}</p>
      </div>
      <hr />
    </section>
  );
};

export default PersonPreview;
