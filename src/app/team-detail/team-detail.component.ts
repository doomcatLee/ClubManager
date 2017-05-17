import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Team } from '../team.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamService } from '../team.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {

  teamId: number;
  team: Team;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService,
    private router: Router
  ) { }


  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.teamId = parseInt(urlParameters['id']);
      this.teamService.getTeamById(this.teamId).subscribe((team) => {
        this.team = team;
      })
    })
  }


  goToEdit() {
    this.router.navigate(['teams', this.teamId, 'edit']);
  }
}
