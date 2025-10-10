import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from '../header/header';
import {ItemCardList} from '../item-card-list/item-card-list';
import {ItemCardDetailed} from '../item-card-detailed/item-card-detailed';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    Header,
    ItemCardList,
    ItemCardDetailed
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
