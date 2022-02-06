import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Menu } from '../../assets/mode_menu.svg';
import { ReactComponent as List } from '../../assets/mode_list.svg';

const ModeBlock = styled.div`
  display: flex;
`;

const BoxMode = ({ setViewMode, viewMode, ...rest }) => {
  return (
    <ModeBlock {...rest}>
      <List
        onClick={() => setViewMode('list')}
        style={{
          fill: viewMode === 'list' ? '#727272' : '#B7B7B7',
        }}
      />
      <Menu
        style={{
          marginLeft: '.5rem',
          fill: viewMode === 'card' ? '#727272' : '#B7B7B7',
        }}
        onClick={() => setViewMode('card')}
      />
    </ModeBlock>
  );
};

export default BoxMode;

//style={{ fill: 'list' ? '#B7B7B7' : '#727272' }}
