import React, { useState } from 'react';
import { ReactComponent as ArrowTop } from '../../assets/arrow_top.svg';
import styled from 'styled-components';

const Button = styled.div`
  background: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  left: 80%;
  top: 80%;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ScrollTopButton = ({ position }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > position) {
      setVisible(true);
    } else if (scrolled <= position) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      className="button"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <ArrowTop />
    </Button>
  );
};

export default ScrollTopButton;
