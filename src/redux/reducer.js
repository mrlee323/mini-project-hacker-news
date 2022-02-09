import { combineReducers } from 'redux';
import theme from '../modules/theme';
import loading from '../modules/loading';
import top from '../modules/top';
import user from '../modules/user';
import show from '../modules/show';
import news from '../modules/news';
import ask from '../modules/ask';
import job from '../modules/job';
import userInfo from '../modules/userInfo';

const rootReducer = combineReducers({
  theme,
  loading,
  top,
  news,
  show,
  ask,
  job,
  user,
  userInfo,
});

export default rootReducer;
