import React from 'react';
import propTypes from 'prop-types';
import useTranslations from './useTranslations';

const Pagination = ({ currentPage, numPages, onButtonClick }) => {
  const { next, prev, of } = useTranslations();
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  return (
    numPages > 1 && (
      <div>
        {!isFirst && (
          <span
            className="pagination-button"
            onClick={() => onButtonClick(currentPage - 1)}
            onKeyPress={() => onButtonClick(currentPage - 1)}
            role="button"
            tabIndex={0}
          >
            ← {prev}
          </span>
        )}
        <span>
          &nbsp;
          {currentPage} {of} {numPages}
          &nbsp;
        </span>
        {!isLast && (
          <span
            className="pagination-button"
            onClick={() => onButtonClick(currentPage + 1)}
            onKeyPress={() => onButtonClick(currentPage + 1)}
            role="button"
            tabIndex={0}
          >
            {next} →
          </span>
        )}
      </div>
    )
  );
};

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  onButtonClick: propTypes.func.isRequired,
};

export default Pagination;
