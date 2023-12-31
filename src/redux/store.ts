import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import harbourSpaceApi from "./apis/harbour-space-api";

export const store = configureStore({
  reducer: {
    [harbourSpaceApi.reducerPath]: harbourSpaceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(harbourSpaceApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
