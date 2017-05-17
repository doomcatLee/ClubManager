import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamAddComponent } from './team-add/team-add.component';
import { ContactComponent } from './contact/contact.component';
import { TeamEditComponent } from './team-edit/team-edit.component';


const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'teams/:id',
    component: TeamDetailComponent
  },
  {
    path: 'addTeam',
    component: TeamAddComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'teams/:id/edit',
    component: TeamEditComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
