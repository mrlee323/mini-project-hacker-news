import { handleActions } from 'redux-actions';
import createRequestThunk from '../libs/createRequestThunk';
import { getStory, getShowIds } from '../services/API';

const GET_SHOW = 'GET_SHOW';
const GET_SHOW_SUCCESS = 'GET_SHOW_SUCCESS';

export const getShowData = createRequestThunk(GET_SHOW, getStory, getShowIds);

const initialState = {
  shows: [],
};

const show = handleActions(
  {
    [GET_SHOW_SUCCESS]: (state, action) => ({
      ...state,
      shows: action.payload,
    }),
  },
  initialState,
);

export default show;
