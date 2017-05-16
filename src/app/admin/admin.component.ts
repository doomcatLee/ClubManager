import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeamService]
})
export class AdminComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  submitForm(name: string, imgUrl: string, bio: string, players: any[]) {
    var newTeam: Team = new Team(name, imgUrl, bio, players);
    this.teamService.addTeam(newTeam);
    console.log(newTeam);
  }

}
