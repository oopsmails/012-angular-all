import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';
import { PersistanceService } from 'src/app/example/example-shared/services/persistance.service';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');

        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );
}
