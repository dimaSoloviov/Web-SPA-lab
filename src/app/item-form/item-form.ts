import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemDataService } from '../shared/services/item.data.service';
import { item } from '../shared/models/item.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemForm {
  itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ItemDataService: ItemDataService,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      shortDescription: ['', [Validators.required, Validators.maxLength(100)]],
      awgPrice: [null, [Validators.required, Validators.min(1)]],
      fullDescription: ['', Validators.required],
      specs: ['', Validators.required]
    });
  }

  get f() {
    return this.itemForm.controls;
  }

  onSubmit() {
    if (this.itemForm.invalid) return;

    const newItem: item = {
      id: Date.now(), // простий спосіб задати унікальний id
      ...this.itemForm.value
    };

    this.ItemDataService.addItem(newItem);
    this.router.navigate(['/items']); // після додавання — повертаємось до списку
  }
}
