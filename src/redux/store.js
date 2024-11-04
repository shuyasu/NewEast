// import {configureStore} from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
// //   middleware: [thunk], // Add redux-thunk as middleware
// middleware: getDefaultMiddleware => getDefaultMiddleware().contact(),
// });

// export default store;

import {compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {legacy_createStore as createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['utils'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(thunk)),
);

let persistor = persistStore(store);

export {store, persistor};
