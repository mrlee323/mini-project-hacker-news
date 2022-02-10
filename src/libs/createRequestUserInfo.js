import { startLoading, finishLoading } from '../modules/loading';

const createRequestUserInfo = (type, request, fetchUser, id) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return async (dispatch) => {
    console.log(1, type, 2, request, 3, fetchUser, 4, id);
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const user = await fetchUser(id);
      const response = await Promise.all(
        user.submitted.slice(0, 50).map(request),
      );
      const comment = response.filter((a) => a.type === 'comment');
      const story = response.filter((a) => a.type !== 'comment');
      dispatch({
        type: SUCCESS,
        payload: {
          user,
          type: {
            comment,
            story,
          },
        },
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

export default createRequestUserInfo;
