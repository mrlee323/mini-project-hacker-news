import React from 'react';
import styled from 'styled-components';
import JobItem from '../components/JobItem';

const JobContainerBlock = styled.div``;
const JobContainer = () => {
  return (
    <JobContainerBlock>
      <JobItem />
    </JobContainerBlock>
  );
};

export default JobContainer;
