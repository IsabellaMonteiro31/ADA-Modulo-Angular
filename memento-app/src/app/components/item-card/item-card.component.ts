import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Iitem } from '../../interfaces/item.interface';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [ MatCardModule, RatingStarsComponent, MatIcon, NgIf],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})


export class ItemCardComponent implements OnInit {
@Input() item?: Iitem;
@Output() addItemToCart: EventEmitter<any> = new EventEmitter();
 
constructor() {
  // console.log(this.item);
}

ngOnInit() {
  // console.log(this.item);
}

addToShoppingCart(){
  this.addItemToCart.emit(this.item);
  // console.log("livro adicionado ao carrinho");
}
}

