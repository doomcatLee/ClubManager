import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { TEAMS } from './mock-teams';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TeamService {

  teams: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.teams = database.list('teams');
  }

  getTeams() {
    return this.teams;
  }

  getTeamById(teamId: number) {
    for (var i = 0; i <= TEAMS.length - 1; i++) {
      if (TEAMS[i].id === teamId) {
        return TEAMS[i];
      }
    }
  }
}
