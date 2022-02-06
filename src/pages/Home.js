import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_home.svg';
import ScrollTopButton from '../components/common/ScrollTopButton';
import TodayTop from '../components/today/TodayTop';
import TodayNew from '../components/today/TodayNew';
import TodayUser from '../components/today/TodayUser';
import TodayShow from '../components/today/TodayShow';
import TodayAsk from '../components/today/TodayAsk';
import TodayJob from '../components/today/TodayJob';

const HomeBlock = styled(Responsive)`
  background: ${({ theme }) => theme.topbackColor};
`;

const Home = () => {
  return (
    <section className="home">
      <HomeBlock>
        <Banner style={{ width: '24.4rem' }} />
        <ScrollTopButton position={2900} />
        <TodayTop />
        <TodayNew />
        <TodayUser />
        <TodayShow />
        <TodayAsk />
        <TodayJob />
      </HomeBlock>
    </section>
  );
};

export default Home;
