import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import AboutView from './AboutView';

const About = () => {
  const theme = useContext(ThemeContext);
  return <AboutView darkMode={theme.state.darkMode} />;
};

export default About;