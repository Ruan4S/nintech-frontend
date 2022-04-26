import { LabelModel } from './label.model';

export interface UserModel extends LabelModel {
  username: string;
  email: string;
  password: string;
}
