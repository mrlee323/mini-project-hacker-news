import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import JobItem from '../components/JobItem';
import { ApplyBanner, ApplyBanner2 } from '../components/ApplyBanner';
const JobContainerBlock = styled.div``;

const JobContainer = () => {
  const jobs = useSelector((state) => state.job.jobs);

  return (
    <JobContainerBlock>
      {jobs &&
        jobs.slice(0, 5).map((job) => <JobItem job={job} key={job.id} />)}
      <ApplyBanner jobs={jobs} />
      {jobs &&
        jobs.slice(6, 14).map((job) => <JobItem job={job} key={job.id} />)}
      <ApplyBanner2 jobs={jobs} />
      {jobs && jobs.slice(14).map((job) => <JobItem job={job} key={job.id} />)}
    </JobContainerBlock>
  );
};

export default JobContainer;
