import { Injectable } from '@angular/core';
import { item } from '../models/item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ItemDataService {
  private apiUrl = 'http://localhost:3000/items';
  private itemsSubject = new BehaviorSubject<item[]>([]);
  items$: Observable<item[]> = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadItems();
  }

  private loadItems() {
    this.http.get<item[]>(this.apiUrl).subscribe(items => {
      this.itemsSubject.next(items);
    });
  }

  getItemById(id: number): Observable<item | undefined> {
    return this.http.get<item>(`${this.apiUrl}/${id}`);
  }

  addItem(newItem: item) {
    this.http.post<item>(this.apiUrl, newItem).pipe(
      tap(() => this.loadItems()) // оновлює список після додавання
    ).subscribe();
  }

  filterItems(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.loadItems();
    } else {
      this.http.get<item[]>(`${this.apiUrl}?q=${searchTerm}`).subscribe(items => {
        this.itemsSubject.next(items);
      });
    }
  }
}
