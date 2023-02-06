import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/models/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
  isLoading: boolean;
}
