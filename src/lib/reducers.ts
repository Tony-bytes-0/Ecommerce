// reducers.ts
import { combineReducers } from 'redux';
//import {carItems, increment} from '@/lib/shopingCar/shopingCart';

const rootReducer = combineReducers({
    //carItems, increment
 // Agrega otros reducers aquí
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;