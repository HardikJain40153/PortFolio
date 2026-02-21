import React, { useEffect, useState } from 'react';
import IntroView from './IntroView';

const Intro = () => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const today = new Date();
    const date = `${today.getDate()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`;

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9709b5ac8msh153524db0b2c44ep1764e6jsnf3d7a5daa517',
            'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
        },
    };

    const fetchQuote = async () => {
        return await fetch(
            'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info',
            options,
        )
            .then((response) => response.json())
            .then((data) => {
                updateQuote(data.text);
                updateAuthor(data.author);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchQuote();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateQuote = (text) => {
        setQuote(text);
    };

    const updateAuthor = (auth) => {
        setAuthor(auth);
    };

    if (quote === undefined) {
        updateQuote('The greatest glory in living lies not in never falling, but in rising every time we fall.');
        updateAuthor('Nelson Mandela');
    }

    const titleItems = ['Web Developement', 'Problem Solving', 'Cricket', 'Photography', 'Travel'];

    return <IntroView date={date} name={'Hardik Jain'} titleItems={titleItems} quote={quote} author={author} />;
};

export default Intro;