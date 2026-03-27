import { Component } from '@angular/core';
import { item } from '../shared/models/item.model';
import { ItemCardSmall } from '../item-card-small/item-card-small';
import {AsyncPipe, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemDataService } from '../shared/services/item.data.service';
import { Observable } from 'rxjs';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-items-list',
  imports: [ItemCardSmall, NgFor, FormsModule, AsyncPipe, RouterLink],
  templateUrl: './item-card-list.html',
  styleUrls: ['./item-card-list.css'],
})
export class ItemCardList {
  searchTerm: string = "";
  itemslist$!: Observable<item[]>;

  constructor(private dataService: ItemDataService) {
    this.itemslist$ = this.dataService.items$;
  }

  onSearchChange() {
    this.dataService.filterItems(this.searchTerm);
  }

  onItemSelected(selected: item) {
    console.log("Обраний товар:", selected);
  }
}

