import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import { container, currentLocation } from "../styles/pagination.module.css";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  currentPage: number;
  numPages: number;
  onButtonClick: (gotoPage: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, numPages }) => {
  const next = "Next";
  const prev = "Prev";
  const _of = "of";
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  if (numPages) {
    return (
      <div className={container}>
        <ButtonGroup className="mt-3">
          <Button variant="outline-danger" disabled={isFirst} tabIndex={0}>
            ← {prev}
          </Button>
          <div className={currentLocation}>
            &nbsp;
            {currentPage} {_of} {numPages}
            &nbsp;
          </div>
          <Button variant="outline-danger" disabled={isLast} tabIndex={0}>
            {next} →
          </Button>
        </ButtonGroup>
      </div>
    );
  }
  return <></>;
};

export default Pagination;
