import { handleActions } from 'redux-actions';
import createRequestThunk from '../libs/createRequestThunk';
import { getStory, getAskIds } from '../services/API';

const GET_ASK = 'GET_ASK';
const GET_ASK_SUCCESS = 'GET_ASK_SUCCESS';

export const getAskData = createRequestThunk(GET_ASK, getStory, getAskIds);

const initialState = {
  asks: [],
};

const ask = handleActions(
  {
    [GET_ASK_SUCCESS]: (state, action) => ({
      ...state,
      asks: action.payload,
    }),
  },
  initialState,
);

export default ask;
