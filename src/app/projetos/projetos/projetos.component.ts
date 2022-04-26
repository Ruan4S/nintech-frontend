import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '@app/@shared/models/project.model';
import { ProjectApiService } from '@app/@shared/services/project-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent implements OnInit {
  public projects: ProjectModel[];
  public busy$: Subscription[] = [];

  constructor(private readonly projectApi: ProjectApiService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.busy$.push(this.projectApi.getProjects().subscribe((result) => (this.projects = result)));
  }
}
