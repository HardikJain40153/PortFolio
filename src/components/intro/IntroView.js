import React from 'react';
import './intro.css';

const IntroView = ({ date, name, titleItems, quote, author }) => {
    return (
        <div className="i">
            <div className="i-date">{date}</div>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">{name}</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            {titleItems.map((t, idx) => (
                                <div key={idx} className="i-title-item">
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="i-quote">
                        {quote ? `"${quote}"` : ''}
                        <br />
                        {author ? '-' + author : ''}
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <div className="card">
                    <img src={require('../../img/man.png')} alt="me" className="i-img card-img" />
                </div>
            </div>
        </div>
    );
};

export default IntroView;
