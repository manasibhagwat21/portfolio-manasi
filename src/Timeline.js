import React from 'react';

const timelineData = [
  {
    date: '2024',
    title: 'Started Masters in Computer Science',
    location: 'North Carolina State University',
    description: 'Pursuing a Master\'s degree in Computer Science with a focus on Data Science and Development.',
  },
  {
    date: '2022',
    title: 'Graduated with a Bachelor\'s Degree',
    location: 'University of XYZ',
    description: 'Completed Bachelor\'s degree in Computer Science.',
  },
  {
    date: '2021',
    title: 'Internship at ABC Corp',
    location: 'ABC Corp, Location',
    description: 'Worked as a software development intern, focusing on web development and data analysis.',
  },
  // Add more timeline data here
];


const Timeline = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Timeline</h2>
      <div className="row">
        <div className="col-12">
          <div className="timeline">
            {timelineData.map((event, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <h5>{event.location}</h5>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
