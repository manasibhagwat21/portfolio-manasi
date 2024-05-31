import React from 'react';
import manasi from './assets/Manasi.JPG'


const About = () => {
  return (
    <div className='about-container' >
    <div className=''>

    <div className='row'>
        <div className='col-md-3'>
            <img className='rounded-circle'src={manasi}/>
        </div>
        <div className='col-md-1'></div>

        <div className='col-md-8 about-para py-5'>
        <p>Hello! I'm Manasi.</p>
        <p>I am a Computer Science grad student at <span>North Carolina State University</span>, with a specialization in Data Science.</p>
        <p>I am deeply passionate about the transformative power of data and its ability to drive informed decision-making.</p>
        <p>I have experience as a <span>Data Engineer</span> at Tresata, NC and am currently working as a <span>Graduate Research Assistant</span> at NCSU.</p>
        <p>I am looking to learn, grow and contribute to impactful projects!</p>
        </div>
    </div> 
    </div>  

    </div> 
  );
};

export default About;


