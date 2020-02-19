import React from 'react';
import translateThis from '../components/useTranslations';

const WorklogPage = () => {
  const {
    worklog
  } = translateThis();
  return (
    <div className="worklog-page">
      <h1>{worklog} page</h1>
      <p>Table with worklog</p>
    </div>
  );
};

export default WorklogPage;
