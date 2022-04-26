import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProfessionalModel } from '@app/@shared/models/professional.model';
import { FreelancerApiService } from '@app/@shared/services/freelancer-api.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss'],
})
export class FreelancersComponent implements OnInit {
  public professionals: ProfessionalModel[];
  public busy$: Subscription[] = [];

  constructor(private readonly freelancerApi: FreelancerApiService) {}

  ngOnInit() {
    this.getFreelancers();
  }

  getFreelancers() {
    this.busy$.push(this.freelancerApi.getFreelancers().subscribe((result) => (this.professionals = result)));
  }
}
