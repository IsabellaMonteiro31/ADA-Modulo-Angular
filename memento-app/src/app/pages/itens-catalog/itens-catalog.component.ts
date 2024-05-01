import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { RatingStarsComponent } from '../../components/rating-stars/rating-stars.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Iitem } from '../../interfaces/item.interface';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-itens-catalog',
  standalone: true,
  imports: [
    NgFor,
    RatingStarsComponent,
    MatIcon,
    MatIconModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    NgIf,
    ItemCardComponent,
    MainPageComponent,
  ],
  templateUrl: './itens-catalog.component.html',
  styleUrl: './itens-catalog.component.css',
})
export class ItensCatalogComponent implements OnInit {
  @Output() addItemToCart: EventEmitter<Iitem> = new EventEmitter();

  itensList: Iitem[] = []
  //   {
  //     id: 1,
  //     image1: 'assets/imgs/itens/vestido TITANIC.jpg',
  //     // image2: 'assets/imgs/itens/vestido TITANIC3.jpg',
  //     name: 'Vestido rose',
  //     movie: 'Titanic',
  //     description: 'vestido usado pela personagem nas cenas x, x e x',
  //     price: 500.0,
  //     rank: 4,
  //     discount: true,
  //     stock: 1,
  //     totalAddedToCart: 0,
  //   },

  //   {
  //     id: 2,
  //     image1: 'assets/imgs/itens/oculos-MATRIX.webp',
  //     // image2: 'assets/imgs/itens/oculos-MATRIX3.webp',
  //     name: 'Óculos Neo',
  //     movie: 'Matrix',
  //     description: 'óculos usado pelo personagem nas cenas x, x e x',
  //     price: 1200.0,
  //     rank: 2,
  //     discount: false,
  //     stock: 1,
  //     totalAddedToCart: 0,
  //   },

  //   {
  //     id: 3,
  //     image1: 'assets/imgs/itens/bolsa - AS BRANQUELAS.webp',
  //     // image2: 'assets/imgs/itens/as branquelas3.gif',
  //     name: 'bolsa',
  //     movie: 'As branquelas',
  //     description: 'bolsa usada pela personagem nas cenas x, x e x',
  //     price: 700.0,
  //     rank: 1,
  //     discount: true,
  //     stock: 1,
  //     totalAddedToCart: 0,
  //   },
  // ];

  addToShoppingCart() {
    console.log('livro adicionado ao carrinho');
  }

  ngOnInit(){
   this.itensList = JSON.parse(localStorage.getItem("itensList") || "[]");
  }

  warnAboutAddItemToCart(item: Iitem) {
    // console.log('clicou no bt de compra');
    // console.log(item);
    this.addItemToCart.emit(item);
  }
}
