import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css'],
  providers: [TeamService]
})
export class TeamAddComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  addPlayerDiv() {
    console.log("Hello");
    return "<h1>Hello</h1>"
  }
  submitForm(name: string, imgUrl: string, bio: string, players: any[]) {
    var newTeam: Team = new Team(name, imgUrl, bio, players);
    this.teamService.addTeam(newTeam);
    console.log(newTeam);
  }

}
