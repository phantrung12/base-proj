import {
  createSlice,
  createAsyncThunk,
  isFulfilled,
  isRejected,
  isPending,
} from '@reduxjs/toolkit';
import { AuthState } from './type';
import { IAuth, ILogin } from '../../../../types';
import { AuthService, LocalStorageService } from '../../../services';
import { AppThunk } from '../../../../store/configureStore';
import { notification } from '../../../../utils/helper/notifications';
import { get } from 'lodash';

export const initialState: AuthState = {
  loading: false,
};

export const login = createAsyncThunk('login', async (data: ILogin) => {
  const res = await AuthService.login(data);
  return res;
});

export const logout: () => AppThunk = () => dispatch => {
  LocalStorageService.removeAllItem();
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(isFulfilled(login), (state, action) => {
        state.authInfo = action.payload;
        const response: IAuth = action.payload;
        if (response) {
          LocalStorageService.set(
            LocalStorageService.OAUTH_TOKEN,
            response.accessToken.jwtToken,
          );
          LocalStorageService.set(
            LocalStorageService.USER_INFO,
            response.idToken.payload,
          );
          LocalStorageService.set(
            LocalStorageService.REFRESH_TOKEN,
            response.refreshToken.token,
          );
        }
        state.loading = false;
      })
      .addMatcher(isPending(login), (state, action) => {
        state.loading = true;
      })
      .addMatcher(isRejected(login), (state, action) => {
        state.loading = false;
        notification.error({
          description: get(action.payload, 'message') || '',
        });
      });
  },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
