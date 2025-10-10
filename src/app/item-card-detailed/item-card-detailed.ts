import {Component, Input, OnInit} from '@angular/core';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { item } from '../shared/models/item.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../shared/services/data.service';

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
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 🔹 отримуємо id з маршруту
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null) {
      this.item = this.dataService.getItemById(id);
    }

    // 🔹 якщо не знайшли айтем — редірект на список
    if (!this.item) {
      console.warn('Item not found, redirecting to /items');
      this.router.navigate(['/items']);
    }
  }
}
