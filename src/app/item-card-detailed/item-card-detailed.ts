import {Component, Input, OnInit} from '@angular/core';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { item } from '../shared/models/item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemDataService} from '../shared/services/item.data.service';

@Component({
  selector: 'app-item-card-detailed',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './item-card-detailed.html',
  styleUrls: ['./item-card-detailed.css']
})
export class ItemCardDetailed implements OnInit {
  item?: item;

  constructor(
    private route: ActivatedRoute,
    private dataService: ItemDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null) {
      this.dataService.getItemById(id).subscribe(item => {
        this.item = item;

        if (!this.item) {
          console.warn('Item not found, redirecting to /items');
          this.router.navigate(['/items']);
        }
      });
    } else {
      this.router.navigate(['/items']);
    }
  }
}

