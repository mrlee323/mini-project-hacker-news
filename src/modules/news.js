import { handleActions } from 'redux-actions';
import createRequestThunk from '../libs/createRequestThunk';
import { getStory, getNewIds } from '../services/API';

const GET_NEW = 'GET_NEW';
const GET_NEW_SUCCESS = 'GET_NEW_SUCCESS';

export const getNewData = createRequestThunk(GET_NEW, getStory, getNewIds);

const initialState = {
  news: [],
};

const news = handleActions(
  {
    [GET_NEW_SUCCESS]: (state, action) => ({
      ...state,
      news: action.payload,
    }),
  },
  initialState,
);

export default news;
