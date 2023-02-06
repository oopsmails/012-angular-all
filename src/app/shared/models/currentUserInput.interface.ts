import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';

export interface CurrentUserInputInterface extends CurrentUserInterface {
  password: string;
}
