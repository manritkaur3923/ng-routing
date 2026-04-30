import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { User } from './components/user/user';
import { Pipes } from './components/pipes/pipes';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'pipes', component: Pipes },
  { path: 'user/:id/:name', component: User },
  { path: '', component: Home },
  { path: 'profile', component: Profile, data: { uname: 'Sanreet' } },
  { path: '**', component: PageNotFound },
];
