import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

interface TimelineData {
  bioTitle: string;
  bioDates: string[];
  bioDescription: string[];
  worksTitle: string;
  workDates: string[];
  workDescription: string[];
}

const CreateTimeline = (dates: string[], descriptions: string[]) => {
  const elem = dates.map((date, idx) => {
    return (
      <TimelineItem
        key={+date[0] * Math.ceil(Math.random() * 100)}
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
  });

  return elem;
};

const TimeLine: React.FC<TimelineData> = ({
  bioTitle,
  bioDates,
  bioDescription,
  worksTitle,
  workDates,
  workDescription,
}) => {
  return (
    <>
      <h2>{bioTitle}</h2>
      <Timeline lineColor="#D21B1C">
        {CreateTimeline(bioDates, bioDescription)}
      </Timeline>
      <h2>{worksTitle}</h2>
      <Timeline lineColor="#D21B1C">
        {CreateTimeline(workDates, workDescription)}
      </Timeline>
    </>
  );
};

export default TimeLine;
