import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { NgStyle } from '@angular/common';
import { Iitem } from '../../interfaces/item.interface';

@Component({
  selector: 'app-old-item-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIcon,
    NgStyle,
    MatButtonModule,
    FormsModule,
  ],

  templateUrl: './old-item-create.component.html',
  styleUrl: './old-item-create.component.css',
})

export class OldItemCreateComponent implements OnInit {
  itensList: Iitem[] = [];

  newItem: Iitem = {
    id: 1,
    image1: 'Imagem do item',
    // image2: "Imagem do item no filme",
    name: 'Nome do item',
    movie: 'Nome do filme',
    description: 'Descrição do produto',
    price: 500.0,
    rank: 4,
    discount: true,
    stock: 1,
    totalAddedToCart: 0,
  };

  ngOnInit() {
    this.itensList = JSON.parse(localStorage.getItem('itensList') || '[]');
  }

  submitForm() {
    console.log(this.newItem);
    this.itensList.push(this.newItem);
    localStorage.setItem('itensList', JSON.stringify(this.itensList));
  }

  changeNameValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newItem.name = target.value;
    console.log(this.newItem);
  }
}
