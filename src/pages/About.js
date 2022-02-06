import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Responsive from '../components/common/Responsive';
import { AboutBox } from '../components/common/Box';
import { ReactComponent as Arrow } from '../assets/arrow_right.svg';
import { ReactComponent as MoreArrow } from '../assets/arrow_more.svg';

const AboutBlock = styled(Responsive)`
  padding: 1.9rem 0;
  box-sizing: border-box;
`;

const List = styled.ul`
  padding: 0.5rem 1.25rem 1.25rem 1.25rem;
  box-sizing: border-box;
  li {
    display: flex;
    padding: 1rem 0;
    p {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
      flex: 1;
    }
  }
  li + li {
    border-top: 0.03rem solid var(--gray300);
  }
`;

const ArrowMore = styled(MoreArrow)`
  fill: ${({ theme }) => theme.moreArrowColor};
`;

const About = () => {
  return (
    <section className="About">
      <AboutBlock>
        <AboutBox>
          <div className="title">
            <h2>About</h2>
          </div>
          <p className="content">
            This is a simple Hacker News clone, built with{' '}
            <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">
              SvelteKit
            </a>
            , an application framework for{' '}
            <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
              Svelte
            </a>
            . <br />
            <br />
            Svelte is a new kind of framework, one that compiles your component
            templates into fast, compact JavaScript — either client-side or
            server-side. You can read more about the design and philosophy in
            the
            <a
              href="https://svelte.dev/blog/svelte-3-rethinking-reactivity"
              target="_blank"
              rel="noreferrer"
            >
              introductory blog post
            </a>
            . <br />
            <br />
            We're using{' '}
            <a
              href="https://github.com/davideast/hnpwa-api"
              target="_blank"
              rel="noreferrer"
            >
              hnpwa-api
            </a>
            as a backend. The app is hosted on{' '}
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              Vercel
            </a>
            .
          </p>
        </AboutBox>
        <AboutBox>
          <div className="title">
            <NavLink to="/top/post" className="nav">
              <h2>Top</h2>
              <Arrow fill="#ed702d" alt="right-arrow" />
            </NavLink>
          </div>
          <p className="content">
            Top is a service that ranks all articles on Hacker News through
            Hacker News' own algorithms.
          </p>
        </AboutBox>
        <AboutBox>
          <div className="title">
            <NavLink to="/new" className="nav">
              <h2>New</h2>
              <Arrow fill="#ed702d" alt="right-arrow" />
            </NavLink>
          </div>
          <p className="content">
            New is a service that allows you to see all the new articles in
            chronological order.
          </p>
        </AboutBox>
        <AboutBox>
          <div className="title">
            <NavLink to="/show" className="nav">
              <h2>Show</h2>
              <Arrow fill="#ed702d" alt="right-arrow" />
            </NavLink>
          </div>
          <p className="content">
            Show HN is for something you've made that other people can play
            with.
          </p>
        </AboutBox>
        <AboutBox>
          <div className="title">
            <NavLink to="/ask" className="nav">
              <h2>Ask</h2>
              <Arrow fill="#ed702d" alt="right-arrow" />
            </NavLink>
          </div>
          <p className="content">Ask HN can ask and receive any questions.</p>
        </AboutBox>
        <AboutBox>
          <div className="title">
            <NavLink to="/job" className="nav">
              <h2>Job</h2>
              <Arrow fill="#ed702d" alt="right-arrow" />
            </NavLink>
          </div>
          <p className="content">
            In jobs, you can check real-time job openings posted by companies.
          </p>
        </AboutBox>
        <AboutBox>
          <div className="title">
            <h2>FAQ</h2>
          </div>
          <List>
            <li>
              <p>Can I write here?</p>
              <ArrowMore />
            </li>
            <li>
              <p>Are there rules about submissions and comments?</p>
              <ArrowMore />
            </li>
            <li>
              <p>How are stories ranked?</p>
              <ArrowMore />
            </li>
            <li>
              <p>How is a user's karma calculated?</p>
              <ArrowMore />
            </li>
            <li>
              <p>What kind of formatting can you use in comments?</p>
              <ArrowMore />
            </li>
          </List>
        </AboutBox>
      </AboutBlock>
    </section>
  );
};

export default About;
