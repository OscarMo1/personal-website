import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Oscar</h2>
        <img src='/images/IMG_3490.jpeg' alt="Nature" class="responsive"/>
        <div className="prompt">
          <p>I am currently a junior studying Computer Science and Economics. Some of my interests in computer sciences are
            data science, probability, artificial intelligence, and machine learning. Some hobbies outside of computer science are music,
            drawing, and basketball. Feel free to reach out! </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
     
      <div className='skills'>
         <h1> Skills</h1>
         <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, MaterialUI, Yarn, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, Assembly, C </span>
          </li>
        </ol>


      </div>
    </div>
  )
}

export default Home
