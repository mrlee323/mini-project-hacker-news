import { handleActions } from 'redux-actions';
import createRequestThunk from '../libs/createRequestThunk';
import { getStory, getTopIds } from '../services/API';

const GET_TOP = 'GET_TOP';
const GET_TOP_SUCCESS = 'GET_TOP_SUCCESS';

export const getTopData = createRequestThunk(GET_TOP, getStory, getTopIds);

const initialState = {
  tops: [],
};

const top = handleActions(
  {
    [GET_TOP_SUCCESS]: (state, action) => ({
      ...state,
      tops: action.payload,
    }),
  },
  initialState,
);

export default top;
