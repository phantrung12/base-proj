import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from '../utils/types/injector-typings';
import authReducer from '../app/pages/Auth/slice';

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    auth: authReducer,
    ...injectedReducers,
  });
}
