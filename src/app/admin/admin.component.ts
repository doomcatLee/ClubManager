import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../team.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeamService]
})
export class AdminComponent implements OnInit {


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
