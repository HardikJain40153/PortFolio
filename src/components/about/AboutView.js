import React from 'react';
import './about.css';
import Award from '../../img/win.png';

const AboutView = ({ darkMode }) => {
    return (
        <div className="a">
            <div className="a-left">
                <div
                    style={{ backgroundColor: darkMode ? '#696969' : 'var(--surface-2)' }}
                    className="a-card bg"
                ></div>
                <div className="a-card">
                    <div className="card">
                        <img
                            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="a-img card-img"
                        />
                    </div>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">It is a long established fact that a reader will be distracted by the readable content.</p>
                <p className="a-desc">
                    Hello — I'm Hardik Jain. I'm a Software Engineer (MTS - 1) at Mavenir Systems (Bangalore) since July 2023, working on cloud-native 4G/NB‑IoT radio software. I design frontend interfaces for L1/L2 integration, containerize applications, and improve Helm charts and platform tooling to enhance reliability and reduce redundancy.
                    <br />
                    <span>B.Tech in Computer Science & Engineering, National Institute of Technology, Silchar — 8.77 CGPA (2019–2023).</span>
                    <br />
                    <span>Skills: C/C++, Python, JavaScript, React, Docker, Kubernetes, Helm, SQL, Bash. Experienced with low-level system design and platform automation.</span>
                    <br />
                    <br />
                    <span className="a-desc-resume">
                        View my{' '}
                        <a
                            style={{ color: darkMode ? 'white' : 'black' }}
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
                            <a className="c-1" style={{ color: darkMode ? 'white' : 'black', textDecoration: 'none' }} href="https://leetcode.com/hardikjain40153/" target="_blank" rel="noreferrer">LeetCode</a>
                            <a className="c-2" style={{ color: darkMode ? 'white' : 'black', textDecoration: 'none' }} href="https://auth.geeksforgeeks.org/user/hardikjain40153/practice/" target="_blank" rel="noreferrer">GeeksForGeeks</a>
                            <a className="c-3" style={{ color: darkMode ? 'white' : 'black', textDecoration: 'none' }} href="https://www.codingninjas.com/codestudio/profile/55c8c163-7430-42f6-a3e2-ca013450f423" target="_blank" rel="noreferrer">CodingNinjas</a>
                            <a className="c-4" style={{ color: darkMode ? 'white' : 'black', textDecoration: 'none' }} href="https://codeforces.com/profile/hardikjain40153" target="_blank" rel="noreferrer">CodeForces</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutView;
