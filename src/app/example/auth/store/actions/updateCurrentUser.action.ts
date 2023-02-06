import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/models/backendErrors.interface';
import { CurrentUserInputInterface } from 'src/app/shared/models/currentUserInput.interface';
import { ActionTypes } from '../actionTypes';

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInputInterface }>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
