import { Component, OnInit, OnDestroy } from '@angular/core';
import { item } from '../shared/models/item.model';
import { ItemCardSmall } from '../item-card-small/item-card-small';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  imports: [ItemCardSmall, NgFor, FormsModule],
  templateUrl: './item-card-list.html',
  styleUrls: ['./item-card-list.css'],
})
export class ItemCardList implements OnInit, OnDestroy {
  searchTerm: string = "";
  itemslist: item[] = [];
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 🔹 підписка на BehaviorSubject
    this.subscription = this.dataService.items$.subscribe(items => {
      this.itemslist = items;
    });
  }

  ngOnDestroy(): void {
    // 🔹 відписка
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearchChange() {
    this.dataService.filterItems(this.searchTerm);
  }

  onItemSelected(selected: item) {
    console.log("Обраний товар:", selected);
  }
}
