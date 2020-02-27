import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import useTranslations from './useTranslations';
import { container, currentLocation } from '../styles/pagination.module.scss';

interface Props {
  currentPage: number;
  numPages: number;
  onButtonClick: (gotoPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  numPages,
  onButtonClick,
}) => {
  const { next, prev, of } = useTranslations();
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  if (numPages) {
    return (
      <div className={container}>
        <ButtonGroup className="mt-3">
          <Button
            variant="outline-danger"
            onClick={() => onButtonClick(currentPage - 1)}
            disabled={isFirst}
            tabIndex={0}
          >
            ← {prev}
          </Button>
          <div className={currentLocation}>
            &nbsp;
            {currentPage} {of} {numPages}
            &nbsp;
          </div>
          <Button
            variant="outline-danger"
            onClick={() => onButtonClick(currentPage + 1)}
            disabled={isLast}
            tabIndex={0}
          >
            {next} →
          </Button>
        </ButtonGroup>
      </div>
    );
  }
  return <></>;
};

export default Pagination;
