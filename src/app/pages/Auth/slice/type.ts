import { IAuth, IAuthInfo } from '../../../../types/Auth.type';
export interface AuthState {
  authInfo?: IAuth;
  loading?: boolean
}
