import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import stockReducer from './StockReducer';
import userReducer from './UserReducer';
import orderReducer from './OrderReducer';

const RootReducer = combineReducers({
  auth: authReducer,
  stock: stockReducer,
  user: userReducer,
  order: orderReducer,
});

export default RootReducer;
