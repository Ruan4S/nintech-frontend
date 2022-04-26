import { Component, OnInit } from '@angular/core';
import { FreelancerApiService } from '@app/@shared/services/freelancer-api.service';
import { ProjectApiService } from '@app/@shared/services/project-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public registeredFreelancers: number = 0;
  public allProjects: number = 0;
  public onlineUsers: number = 0;

  constructor(private readonly freelancerApi: FreelancerApiService, private readonly projectApi: ProjectApiService) {}

  ngOnInit(): void {
    this.freelancerApi.getFreelancers().subscribe((result) => (this.registeredFreelancers = result.length));
    this.projectApi.getProjects().subscribe((result) => (this.allProjects = result.length));
  }
}
