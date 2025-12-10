import { configureStore } from '@reduxjs/toolkit';
import personDeatilsReducer from './reducer/personDeatilsReducer'
import personInfo from './reducer/personDeatilsReducer'



export default configureStore({
  reducer: {
    personDeatilsReducer: personDeatilsReducer,
  },
});
