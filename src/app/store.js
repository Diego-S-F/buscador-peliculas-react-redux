import { configureStore } from '@reduxjs/toolkit';
import { movies } from '../redux/api/movies';

export const store = configureStore({
  reducer: {
    [movies.reducerPath]: movies.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movies.middleware)
});

// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });


