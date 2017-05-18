import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Team } from '../team.model';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [TeamService]
})

export class IndexComponent implements OnInit {

  teams: FirebaseListObservable<any[]>;

  currentRoute: string = this.router.url;

  filterByMaster: string = 'all';

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();


  }


  onChange(optionFromMenu) {
    this.filterByMaster = optionFromMenu;
  }


  goToDetailPage(clickedTeam) {
    this.router.navigate(['teams', clickedTeam.$key]);
  }
}
