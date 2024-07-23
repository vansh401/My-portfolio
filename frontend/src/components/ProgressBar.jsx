
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY ;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
  sx={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${scrollProgress}%`,
    height: '2px',
    background: 'rgb(225,35,0)',
    background: 'radial-gradient(circle, rgba(225,35,0,1) 0%, rgba(193,35,108,1) 28%, rgba(152,34,249,1) 67%, rgba(0,48,234,1) 100%)',
    borderRadius: '0px 5px 5px 0px',
    zIndex: 2000,
  }}
/>

  );
};

export default ProgressBar;