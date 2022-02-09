import { handleActions } from 'redux-actions';
import createRequestUser from '../libs/createRequestUser';
import { getStory, getTopIds, getUser } from '../services/API';

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

export default user;
