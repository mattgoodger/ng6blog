import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { PostsComponent } from './posts/posts.component'
import { DetailsComponent } from './details/details.component'
import { HomeComponent } from './home/home.component'
import { SettingsComponent } from './settings/settings.component'



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
