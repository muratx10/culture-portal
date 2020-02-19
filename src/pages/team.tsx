import React from 'react';
import translateThis from '../components/useTranslations';

const TeamPage = () => {
  const {
    team
  } = translateThis();
  return (
    <div className="team-page">
      <h1>{team} page</h1>
      <p>Table with team</p>
    </div>
  );
};

export default TeamPage;
