import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CONSTANTS } from '../constants/constants';
import { ProfessionalModel } from '../models/professional.model';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root',
})
export class FreelancerApiService {
  constructor(private readonly mockApi: MockService) {}

  getFreelancers(): Observable<ProfessionalModel[]> {
    return of<ProfessionalModel[]>(this.mockApi.professionalsList()).pipe(delay(CONSTANTS.API.DELAY));
  }
}
