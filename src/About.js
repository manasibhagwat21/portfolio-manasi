import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import manasi from './assets/Manasi.JPG';

const About = () => {
  return (
    <div className='about-container'>
      <div className='row'>
        <div className='col-md-3'>
          <img className='rounded-circle' src={manasi} alt="Manasi" />
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-8 about-para py-5'>
          <p>Hello! I'm Manasi.</p>
          <p>I am a Computer Science grad student at <span>North Carolina State University</span>, with a specialization in Data Science.</p>
          <p>I am deeply passionate about the transformative power of data and its ability to drive informed decision-making.</p>
          <p>I have experience as a <span>Data Engineer</span> at Tresata, NC and am currently working as a <span>Graduate Research Assistant</span> at NCSU.</p>
          <p>I am looking to learn, grow and contribute to impactful projects!</p>
          <p>
            <button className='btn m-2' style={{'border':'solid 1px #5099a6'}} data-bs-toggle="modal" data-bs-target="#educationModal">Education</button>
            <button className='btn m-2' style={{'border':'solid 1px #5099a6'}} data-bs-toggle="modal" data-bs-target="#workExperienceModal">Work Experience</button>
          </p>
        </div>
      </div> 

      {/* Education Modal */}
      <div className="modal fade" id="educationModal" tabIndex="-1" aria-labelledby="educationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="educationModalLabel">Education</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3>North Carolina State University</h3>
              <h5>Masters of Computer Science</h5>
              <p>GPA - 3.78 / 4.0 <br></br>Relevant Coursework - Natural Language Processing, Database Management System, Automated Learning & Data Analytics, Neural Networks & Deep Learning, Software Engineering, Design & Analysis of Algorithms. </p>

              <h3>Mumbai University</h3>
              <h5>Bachelors of Engineering in Information Technology</h5>
              <p>GPA - 9.22 / 10 <br></br>Relevant Coursework - Data Structures, Computer Networks, Artificial Intelligence, Cloud Computing.
</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Modal */}
      <div className="modal fade" id="workExperienceModal" tabIndex="-1" aria-labelledby="workExperienceModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="workExperienceModalLabel">Work Experience</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3>North Carolina State University</h3>
              <h5>Graduate Research Assistant</h5>
              <h6>( April 2024 - June 2024 )</h6>
              <ul>
                <li>FungAI Web App - Built a web app for yeast cell detection using Image Segmentation models with 90% accuracy, leveraging ReactJS, Django framework and High-Performance Computing (HPC) cluster integration for faster predictions.  </li>
                <li>Model Retraining - Improved accuracy by 20% by developing an interactive image annotation tool in ReactJS and CanvasAPI, enabling editing of predicted images and model retraining on new data.</li>
                <li>Server Deployment - Established an automated CI/CD pipeline utilizing Microsoft IIS for deployment on university servers. </li>
              </ul>
              <h3>Tresata</h3>
              <h5>Data Engineer Intern</h5>
              <h6>( June 2022 - August 2022 )</h6>
              <ul>
                <li>Data Processing Pipeline - Implemented an Extract, Transform, Load (ETL) pipeline using Apache Spark and Scala for efficient data transfer and seamless integration with AWS S3 for scalable storage, reducing processing time by 25%. </li>
                <li>Large-scale Data Analysis - Leveraged Scala and ElasticSearch to analyze over 2+ years of restaurant data to identify customer preferences, trends and optimal revenue streams, achieving 20% improvement in sales forecasting accuracy.</li>
                <li>Data-Driven Dashboards - Presented 5+ interactive dashboards to stakeholders with drill-down features and filter options, visualizing Key Performance Indicators (KPIs) and aiding decision-making processes. </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
