import { configureStore} from '@reduxjs/toolkit';
 import {filtersReducer, tasksReducer} from './slices';
import { authReducer } from '../auth/slices';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token']
}
const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
});
  
const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
     tasks: tasksReducer,
    filters: filtersReducer,
     auth: persistedAuthReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})
 export const persistor = persistStore(store)