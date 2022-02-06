import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_job.svg';
import JobContainer from '../containers/JobContainer';

const JobBlock = styled(Responsive)``;

const Job = () => {
  return (
    <section className="job">
      <JobBlock>
        <Banner style={{ width: '24.4rem' }} />
        <JobContainer />
      </JobBlock>
    </section>
  );
};

export default Job;
