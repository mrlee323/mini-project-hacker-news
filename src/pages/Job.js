import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_job.svg';
import { ReactComponent as Text } from '../assets/banner_job-text.svg';
import JobContainer from '../containers/JobContainer';

const JobBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  position: relative;
  .gradient {
    position: absolute;
    top: 113px;
    left: 0;
    width: 24.4rem;
    height: 8rem;
    background: ${({ theme }) => theme.jobBannerBackground};
    .banner-text {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%);
      path {
        fill: ${({ theme }) => theme.textColor};
      }
    }
  }
`;
const JobBanner = styled(Banner)`
  width: 24.4rem;
`;
const Job = () => {
  return (
    <section className="job">
      <JobBlock>
        <div className="banner">
          <JobBanner />
          <div className="gradient">
            <div className="banner-text">
              <Text />
            </div>
          </div>
        </div>
        <JobContainer />
      </JobBlock>
    </section>
  );
};

export default Job;
