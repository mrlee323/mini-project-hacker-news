import { handleActions } from 'redux-actions';
import createRequestOtherUser from '../libs/createRequestOtherUser';
import createRequestUser from '../libs/createRequestUser';
import {
  getAskIds,
  getNewIds,
  getShowIds,
  getStory,
  getTopIds,
  getUser,
} from '../services/API';

const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUserData = createRequestUser(
  GET_USER,
  getStory,
  getUser,
  getTopIds,
);

const initialState = {
  users: [],
};

const user = handleActions(
  {
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

const GET_NEW_USER = 'GET_NEW_USER';
const GET_NEW_USER_SUCCESS = 'GET_NEW_USER_SUCCESS';

const GET_SHOW_USER = 'GET_SHOW_USER';
const GET_SHOW_USER_SUCCESS = 'GET_SHOW_USER_SUCCESS';

const GET_ASK_USER = 'GET_ASK_USER';
const GET_ASK_USER_SUCCESS = 'GET_ASK_USER_SUCCESS';

export const getNewUser = createRequestOtherUser(
  GET_NEW_USER,
  getStory,
  getUser,
  getNewIds,
);

export const getShowUser = createRequestOtherUser(
  GET_SHOW_USER,
  getStory,
  getUser,
  getShowIds,
);

export const getAskUser = createRequestOtherUser(
  GET_ASK_USER,
  getStory,
  getUser,
  getAskIds,
);

const initial = {
  otherUsers: { newUsers: [], showUsers: [], askUsers: [] },
};

export const otherUser = handleActions(
  {
    [GET_NEW_USER_SUCCESS]: (state, action) => ({
      ...state,
      otherUsers: { ...state.otherUsers, newUsers: action.payload },
    }),
    [GET_SHOW_USER_SUCCESS]: (state, action) => ({
      ...state,
      otherUsers: { ...state.otherUsers, showUsers: action.payload },
    }),
    [GET_ASK_USER_SUCCESS]: (state, action) => ({
      ...state,
      otherUsers: { ...state.otherUsers, askUsers: action.payload },
    }),
  },
  initial,
);

export default user;
