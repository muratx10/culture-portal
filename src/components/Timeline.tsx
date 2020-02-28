import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { sectionTitle } from '../styles/PersonFullView.module.scss';

interface TimelineData {
  title: string;
  dates: string[];
  description: string[];
}

const createTimeline = (dates: string[], descriptions: string[]) => {
  const createElement = (date: string, idx: number) => {
    return (
      <TimelineItem
        key={idx}
        dateText={date}
        style={{ color: '#D21B1C' }}
        dateInnerStyle={{ background: '#D21B1C', color: '#FFF' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <p>{descriptions[idx]}</p>
      </TimelineItem>
    );
  };
  return dates.map(createElement);
};

const TimeLine: React.FC<TimelineData> = ({ title, dates, description }) => {
  return (
    <>
      <h2 className={sectionTitle}>{title}</h2>
      <Timeline lineColor="#82848C">
        {createTimeline(dates, description)}
      </Timeline>
    </>
  );
};

export default TimeLine;
