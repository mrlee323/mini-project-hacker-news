import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const NotFoundBlock = styled(Responsive)`
  height: 20rem;
  text-align: center;
  p {
    font-size: 5rem;
    padding-top: 5rem;
  }
`;
const NotFound = () => {
  return (
    <NotFoundBlock>
      <p>NotFound</p>
    </NotFoundBlock>
  );
};

export default NotFound;
