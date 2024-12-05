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
          <p>I have a certification from Amazon Web Services <span>AWS Solutions Atchitect - Associate</span>, showcasing proficiency and passion in building scalable cloud solutions.</p>
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
                <li><b>Fine-tuned</b> image segmentation models on microscopy images for yeast cell detection, achieving 90% accuracy.  </li>
                <li>Optimized model performance by 95% through automated cron jobs on a <b>High-Performance Computing (HPC)</b> cluster. </li>
                <li>Developed a scalable web application using <b>ReactJS</b> and <b>Django</b>, integrating the ML models to improve user accessibility. </li>
                <li>Designed an interactive image annotation tool with ReactJS for on-demand image annotation and engineered a <b>MLOps pipeline</b> to
                facilitate iterative model retraining, enabling continuous model enhancement. </li>
                <li>Engineered a robust <b>CI/CD pipeline with Jenkins</b> to facilitate the automated deployment of the application on Microsoft IIS. </li>
              </ul>
              <h3>Tresata</h3>
              <h5>Data Engineer Intern</h5>
              <h6>( June 2022 - August 2022 )</h6>
              <ul>
                <li>Implemented an <b>ETL</b> pipeline using <b>Apache Spark</b> for data ingestion from multiple sources, reducing processing time by 25%. </li>
                <li>Integrated data from on-premises <b>MySQL database</b> and delivery system to <b>AWS S3</b>, ensuring scalable storage and processing. </li>
                <li>Performed data integrity checks and developed <b>Scala </b>scripts to automate the standardization of dataset, increasing data accuracy and reducing manual efforts by 60%. </li>
                <li>Conducted in-depth analysis of over 2 years of operational data and integrated it with <b>Tableau</b> dashboards to visualize Key Performance Indicators (KPIs), facilitating data-driven decision-making.</li>
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
