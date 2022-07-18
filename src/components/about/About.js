import React, { useContext } from 'react';
import './about.css';
import Award from '../../img/win.png';
import { ThemeContext } from '../../context';

const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="a">
            <div className="a-left">
                <div style={{ backgroundColor: darkMode && "#696969" }} className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="a-desc">
                    Greetings, I'm Hardik Jain. I am a final-year student at
                    <a
                        style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
                        href="http://www.nits.ac.in/"
                        target="_blank"
                        rel="noreferrer">
                        { } National Institute of Technology, Silchar, { }
                    </a>
                    pursuing a B.Tech in Computer Science & Engineering.
                    <br />
                    <span>I have excellent academic records throughout my academic career, a college GPA of 8.83, and strong communication abilities in both Hindi and English.</span>
                    <br />
                    <span>I have expertise in front-end web development using HTML, CSS, and JavaScript. I'm also familiar with libraries like ReactJS and Redux. Soon, I hope to achieve my goal of being a full stack web developer.</span>
                    <br /><br />
                    <span className="a-desc-resume"> Checkout my { }
                        <a
                            style={{ color: darkMode ? "white" : "black" }}
                            href="https://drive.google.com/file/d/1Y08vdMKd2LQ0h5YUcvxkghXqE4mDQjH5/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </span>
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Coding Profiles</h4>
                        <p className="a-award-desc">
                            <a
                                className='c-1'
                                style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
                                href="https://leetcode.com/hardikjain40153/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LeetCode
                            </a>
                            <a
                                className='c-2'
                                style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
                                href="https://auth.geeksforgeeks.org/user/hardikjain40153/practice/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GeeksForGeeks
                            </a>
                            <a
                                className='c-3'
                                style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
                                href="https://www.codingninjas.com/codestudio/profile/55c8c163-7430-42f6-a3e2-ca013450f423"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CodingNinjas
                            </a>
                            <a
                                className='c-4'
                                style={{ color: darkMode ? "white" : "black", textDecoration: "none" }}
                                href="https://codeforces.com/profile/hardikjain40153"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CodeForces
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;