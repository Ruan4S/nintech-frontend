import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CONSTANTS } from '../constants/constants';
import { ProjectModel } from '../models/project.model';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  constructor(private readonly mockApi: MockService) {}

  getProjects(): Observable<ProjectModel[]> {
    return of<ProjectModel[]>(this.mockApi.projectsList()).pipe(delay(CONSTANTS.API.DELAY));
  }
}
