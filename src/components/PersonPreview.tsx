import React from "react";
import { Figure } from "react-bootstrap";

import { itemContainer } from "../styles/PersonPreview.module.css";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  shortname: string;
  description: string;
  yearsoflife: string;
  src: string;
}

const PersonPreview: React.FC<Props> = ({ shortname, description, yearsoflife, src }) => {
  return (
    <section className={itemContainer}>
      <a href="#">
        <h1 className="text-center">{shortname}</h1>
      </a>
      <Figure>
        <Figure.Image width={300} alt={shortname} src={src} className="d-block m-auto" />
        <Figure.Caption>
          <p className="text-center mb-0">{yearsoflife}</p>
          <p className="text-center">{description}</p>
        </Figure.Caption>
      </Figure>
    </section>
  );
};

export default PersonPreview;
