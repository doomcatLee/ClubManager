import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css'],
  providers: [TeamService]
})
export class TeamEditComponent implements OnInit {

  @Input() selectedTeam;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  beginUpdatingTeam(teamToUpdate) {
    this.teamService.updateTeam(teamToUpdate);
  }

  beginDeletingTeam(teamToDelete) {
    if (confirm("Are you sure you want to delete this item from the inventory?")) {
      this.teamService.deleteTeam(teamToDelete);
    }
  }

}
