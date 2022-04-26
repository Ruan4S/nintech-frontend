import { HabilityEnum } from '../enums/hability.enum';
import { LabelModel } from './label.model';

export interface HabilityModel extends LabelModel<number, HabilityEnum | string> {}
