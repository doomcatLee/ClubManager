import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../team.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css'],
  providers: [TeamService]
})
export class TeamAddComponent implements OnInit {

  constructor(
    private teamService: TeamService) { }

  ngOnInit() {
  }


  submitForm(name: string, imgUrl: string, tCount: number, bio: string) {
    var newTeam: Team = new Team(name, imgUrl, tCount, bio);
    this.teamService.addTeam(newTeam);
    console.log(newTeam);
  }

}
