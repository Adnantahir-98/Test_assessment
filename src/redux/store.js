import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import  movieSlice from '../redux/movie'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'


const persistConfig = {
  key: 'root',
  storage,
}


const reducer = combineReducers({
  movie: movieSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
