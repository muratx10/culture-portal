import React from 'react';
import propTypes from 'prop-types';
import LocalizedLink from './localizedlink';
import useTranslations from './useTranslations';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  const { next, prev, of } = useTranslations();
  return numPages > 1 && (
    <div>
      <span>
        {!isFirst && (
          <LocalizedLink to={prevPage}>← {prev}</LocalizedLink>
        )}
      </span>
      &nbsp;
      {currentPage} {of} {numPages}
      &nbsp;
      <span>
        {!isLast && (
          <LocalizedLink to={nextPage}>{next} →</LocalizedLink>
        )}
      </span>
    </div>
  );
};

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
