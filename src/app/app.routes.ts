import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
import {HomePage} from './home-page/home-page';
import {ItemCardDetailed} from './item-card-detailed/item-card-detailed';
import {ItemCardList} from './item-card-list/item-card-list';
import {LoginPage} from './login-page/login-page';

export const routes: Routes = [
  {path: 'login', component: LoginPage},

  { path: '', component: Layout, children: [
      { path: '', component: HomePage },
      { path: 'items', component: ItemCardList },
      { path: 'items/:id', component: ItemCardDetailed },

  ]},

];

