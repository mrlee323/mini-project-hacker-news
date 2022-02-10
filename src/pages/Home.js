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
import { useSelector } from 'react-redux';

const HomeBlock = styled(Responsive)`
  background: ${({ theme }) => theme.topbackColor};
`;

const Home = () => {
  const today = useSelector((state) => state);
  return (
    <section className="home">
      <HomeBlock>
        <Banner style={{ width: '24.4rem' }} />
        <ScrollTopButton position={2900} />
        <TodayTop todayTop={today.top.tops} />
        <TodayNew todayNew={today.news.news} />
        <TodayUser todayUser={today.user.users} />
        <TodayShow todayShow={today.show.shows} />
        <TodayAsk todayAsk={today.ask.asks} />
        <TodayJob todayJob={today.job.jobs} />
      </HomeBlock>
    </section>
  );
};

export default Home;
