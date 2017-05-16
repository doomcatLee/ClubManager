import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { TEAMS } from './mock-teams';

@Injectable()
export class TeamService {

  constructor() { }

  getTeams() {
    return TEAMS;
  }

  getTeamById(teamId: number) {
    for (var i = 0; i <= TEAMS.length - 1; i++) {
      if (TEAMS[i].id === teamId) {
        return TEAMS[i];
      }
    }
  }
}
