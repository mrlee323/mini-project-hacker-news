import { startLoading, finishLoading } from '../modules/loading';

const createRequestThunk = (type, request, fetchIds) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return () => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const ids = await fetchIds();
      ids.map(async (id) => {
        const response = await request(id);
        return dispatch({
          type: SUCCESS,
          payload: response.data,
        });
      });

      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
};

export default createRequestThunk;
