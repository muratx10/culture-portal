import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { sectionTitle} from '../styles/PersonFullView.module.scss';

interface TimelineData {
  bioTitle: string;
  bioDates: string[];
  bioDescription: string[];
  worksTitle: string;
  workDates: string[];
  workDescription: string[];
}

const CreateTimeline = (dates: string[], descriptions: string[]) => {
  const CreateElement = (date, idx) => {
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
  return dates.map(CreateElement);
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
      <h2 className={sectionTitle}>{bioTitle}</h2>
      <Timeline lineColor="#82848C">
        {CreateTimeline(bioDates, bioDescription)}
      </Timeline>
      <h2 className={sectionTitle}>{worksTitle}</h2>
      <Timeline lineColor="#82848C">
        {CreateTimeline(workDates, workDescription)}
      </Timeline>
    </>
  );
};

export default TimeLine;
