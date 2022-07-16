import React from 'react';
import Me from '../../img/man.png';
import './intro.css';
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Hardik Jain</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developement</div>
                            <div className="i-title-item">Problem Solving</div>
                            <div className="i-title-item">Cricket</div>
                            <div className="i-title-item">Photography</div>
                            <div className="i-title-item">Travel</div>
                        </div>
                    </div>
                    <p className="i-description">
                        Things that fill small voids inside, are the things i like doing day in and day out.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
}

export default Intro;