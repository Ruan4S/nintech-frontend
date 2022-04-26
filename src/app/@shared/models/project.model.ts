import { CategoryEnum } from '../enums/category.enum';
import { HabilityModel } from './hability.model';
import { LabelModel } from './label.model';

export interface ProjectModel extends LabelModel {
  published: string;
  deliveryTime: string;
  proposals: number;
  description: string;
  habilities?: HabilityModel[];
  category: CategoryEnum;
  availability: string;
  need: string;
  have: string;
}
