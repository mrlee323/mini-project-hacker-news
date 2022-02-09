import { handleActions } from 'redux-actions';
import createRequestUserInfo from '../libs/createRequestUserInfo';
import { getStory, getUser } from '../services/API';

export const GET_USER_INFO = 'GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';

export const getUserInfoData = createRequestUserInfo(
  GET_USER_INFO,
  getStory,
  getUser,
);

const initialState = {
  userInfos: { user: [], type: { story: [], comment: [] } },
};

const userInfo = handleActions(
  {
    [GET_USER_INFO_SUCCESS]: (state, action) => ({
      ...state,
      userInfos: action.payload,
    }),
  },
  initialState,
);

export default userInfo;
