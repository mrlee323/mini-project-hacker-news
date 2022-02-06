import { createAction, handleActions } from 'redux-actions';
import { darkTheme, lightTheme } from '../styles/theme';

const THEME = 'theme/THEME';

export const changeTheme = createAction(THEME);

const initialState = { mode: lightTheme };

const theme = handleActions(
  {
    [THEME]: (state, action) => ({
      mode: state.mode === lightTheme ? darkTheme : lightTheme,
    }),
  },
  initialState,
);

export default theme;
