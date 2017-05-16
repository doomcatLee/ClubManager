import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private router: Router) { }

  teams: Team[] = [
    new Team(1, "SKT T1", "url"),
    new Team(2, "KT Rolster", "url"),
    new Team(3, "TSM", "url"),
    new Team(4, "C9", "url")
  ];

  goToDetailPage(clickedTeam: Team) {
    this.router.navigate(['teams', clickedTeam.id])
  }
}
