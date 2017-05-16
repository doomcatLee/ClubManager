import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Team } from '../team.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }

  teamId: number = null;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = parseInt(urlParameters['id']);
    });
  }

}
