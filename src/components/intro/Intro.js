import React, { useEffect, useState } from 'react';
import Me from '../../img/man.png';
import './intro.css';

const Intro = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var today = new Date();
    var date = today.getDate() + " " + (monthNames[today.getMonth()]) + ', ' + today.getFullYear();

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9709b5ac8msh153524db0b2c44ep1764e6jsnf3d7a5daa517',
            'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
    };

    const fetchQuote = async () => {
        return await fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', options)
            .then(response => response.json())
            .then(data => {
                updateQuote(data.text);
                updateAuthor(data.author);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchQuote();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateQuote = (text) => {
        setQuote(text);
    }

    const updateAuthor = (auth) => {
        setAuthor(auth);
    }

    //if api req get over for the day, free plans thing
    if (quote === undefined) {
        updateQuote("The greatest glory in living lies not in never falling, but in rising every time we fall.");
        updateAuthor("Nelson Mandela");
    }

    return (
        <div className="i">
            <div className="i-date">
                {date}
            </div>
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
                    <p className="i-quote">
                        {`"${quote}"`}
                        <br />
                        - {author}
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