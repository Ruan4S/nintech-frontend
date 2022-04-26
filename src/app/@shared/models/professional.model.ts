import { RatingEnum, StatusEnum } from '../enums/general.enum';
import { HabilityModel } from './hability.model';
import { LabelModel } from './label.model';

export interface ProfessionalModel extends LabelModel {
  role: string;
  rating?: RatingEnum;
  photo?: string;
  description: string;
  habilities?: HabilityModel[];
  status: StatusEnum;
  workedIn?: number;
  hiredIn?: number;
  registeredSince: string;
  lastAccess: string;
}
