import { handleActions } from 'redux-actions';
import createRequestThunk from '../libs/createRequestThunk';
import { getStory, getJobIds } from '../services/API';

const GET_JOB = 'GET_JOB';
const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';

export const getJobData = createRequestThunk(GET_JOB, getStory, getJobIds);

const initialState = {
  jobs: [],
};

const job = handleActions(
  {
    [GET_JOB_SUCCESS]: (state, action) => ({
      ...state,
      jobs: action.payload,
    }),
  },
  initialState,
);

export default job;
