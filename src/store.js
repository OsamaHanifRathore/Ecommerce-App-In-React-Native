import {createStore} from 'redux'

import cartReducer from  './reducers/cartReducers'
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

  const persistedReducer = persistReducer(persistConfig,cartReducer);
  


export default () =>{
    let store = createStore(persistedReducer);

    let persistor = persistStore(store);

    return{store,persistor}
}

