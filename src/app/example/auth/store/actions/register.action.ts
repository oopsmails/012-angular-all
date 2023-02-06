import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/models/backendErrors.interface';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
