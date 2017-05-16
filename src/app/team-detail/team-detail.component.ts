import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Team } from '../team.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {

  teamId: number;
  teamToDisplay: Team;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) { }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = parseInt(urlParameters['id']);
    });
    this.teamToDisplay = this.teamService.getTeamById(this.teamId);
  }

}
