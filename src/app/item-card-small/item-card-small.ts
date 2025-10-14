import { Component, Input, Output, EventEmitter } from '@angular/core';
import { item } from '../shared/models/item.model';
import { NgOptimizedImage, NgIf, NgClass } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ShortenPipe} from '../shared/pipes/shorten.pipe';

@Component({
  selector: 'app-item-card',
  imports: [NgOptimizedImage, NgIf, NgClass, RouterLink, ShortenPipe],
  templateUrl: './item-card-small.html',
  styleUrls: ['./item-card-small.css']
})
export class ItemCardSmall {
  @Input() card_of_item!: item;
  showDetails: boolean = false;

  @Output() selectItem = new EventEmitter<item>();

  constructor(private router: Router) {}

}
