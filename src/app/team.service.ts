import { Injectable } from '@angular/core';
import { Team } from './team.model';
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

  addTeam(newTeam: Team) {
    this.teams.push(newTeam);
  }

  getTeamById(teamId: number) {
    return this.database.object('teams/' + teamId);
  }

  updateTeam(localUpdatedTeam) {
    var teamEntryInFirebase = this.getTeamById(localUpdatedTeam.$key);
    teamEntryInFirebase.update({
      name: localUpdatedTeam.name,
      img: localUpdatedTeam.img,
      bio: localUpdatedTeam.bio
    });
  }
}
