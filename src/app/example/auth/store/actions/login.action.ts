import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/models/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ActionTypes } from '../actionTypes';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
