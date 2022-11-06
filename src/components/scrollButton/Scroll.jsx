import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './scroll.css';
import arrow from '../../img/arrowup.png';

function Scroll() {
  const [showButton, setShowButton] = useState('');

  useEffect(() => {
    const HandleScrollButtonVisibility = () => {
      window.pageYOffset > 200 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', HandleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', HandleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {showButton ? (
        <button className="scroll" onClick={() => scroll.scrollToTop()}>
          <img src={arrow} alt="scrollToTop"></img>
        </button>
      ) : (
        ''
      )}
    </>
  );
}

export default Scroll;
