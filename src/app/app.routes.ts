import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
import {HomePage} from './home-page/home-page';
import {ItemCardDetailed} from './item-card-detailed/item-card-detailed';
import {ItemCardList} from './item-card-list/item-card-list';
import {LoginComponent} from './auth/login/login';
import {ItemForm} from './item-form/item-form';
import {authGuard} from './auth/auth-guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},

  { path: '', component: Layout, children: [
      { path: '', component: HomePage },
      { path: 'items', component: ItemCardList },
      { path: 'items/add-item', component: ItemForm, canActivate: [authGuard] },
      { path: 'items/:id', component: ItemCardDetailed },
  ]},

];

