import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { ActionTypes } from '../actionTypes';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);
