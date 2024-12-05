import React from 'react';
import {  FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";

const Intro = () => {

    (async () => {
        await loadAll(tsParticles);
    
        await tsParticles.addPreset("lightdark", {
            fullScreen: {
                enable: false
            },
            particles: {
                links: {
                    enable: true
                },
                move: {
                    enable: true
                },
                number: {
                    value: 150
                },
                opacity: {
                    value: { min: 0.5, max: 1 }
                },
                shape: {
                    type: ["circle", "square", "triangle", "polygon"],
                    options: {
                        polygon: [
                            {
                                sides: 5
                            },
                            {
                                sides: 6
                            },
                            {
                                sides: 8
                            }
                        ]
                    }
                },
                size: {
                    value: { min: 1, max: 3 }
                }
            }
        });
    
        await tsParticles.load({
            id: "light",
            options: {
                preset: "lightdark",
                particles: {
                    color: {
                        value: "#ccc"
                    },
                    links: {
                        color: "#ccc"
                    }
                }
            }
        });
    
    })();
    
  return (
    <div className='intro-container' >
        <div id='light'>
        <div className='d-flex flex-column justify-content-center inlight'>
            
                <div className='row '>
                <div className=' d-flex  justify-content-center name'><h2 className='pt-4'>Manasi Bhagwat </h2></div>

                <div className="social-links d-flex justify-content-center pt-3">
                    <a className='px-2' href="https://www.linkedin.com/in/-manasi-bhagwat/"> <FaLinkedin className='icon'/> </a>
                    <a className='px-2' href="https://github.com/manasibhagwat21"> <FaSquareGithub  className='icon' /> </a>
                </div>
                </div>
            
            
                <div className='d-flex flex-column align-items-center justify-content-center pt-3'> 
                    <p className="description"><span> Hello ! </span>I'm a CS graduate student at NCSU and aspiring data scientist and developer.</p>
                    <p className="res">View <a href='https://drive.google.com/file/d/1JolBSPrKqhOkjt_FRAvcmNbXo_6AkaJ6/view?usp=share_link'>Resume</a></p>
                </div> 
            </div>
        </div>
    </div> 
  );
};

export default Intro;

