import { startLoading, finishLoading } from '../modules/loading';

const createRequestUser = (type, request, fetchUser, fetchIds) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return () => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const ids = await fetchIds();
      const response = await Promise.all(ids.map(request));

      const users = await Promise.all(
        response.map((item) => fetchUser(item.by)),
      );
      const filterUsers = users.filter(
        (x, index, arr) => index === arr.findIndex((t) => t.id === x.id),
      );
      filterUsers.sort((a, b) => b.karma - a.karma);
      dispatch({
        type: SUCCESS,
        payload: filterUsers,
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

export default createRequestUser;
