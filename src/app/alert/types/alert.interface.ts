import { AlertTypesEnum } from './alert-types.enum';

export interface AlertInterface {
  type: AlertTypesEnum;
  text: string;
}
