import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Iitem } from '../../interfaces/item.interface';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-itens-cart',
  standalone: true,
  imports: [MatDividerModule, MatListModule],
  templateUrl: './itens-cart.component.html',
  styleUrl: './itens-cart.component.css',
})
export class ItensCartComponent implements OnInit, OnChanges {
  @Input('itensList') addedItensList: Iitem[] = [];

  ngOnInit() {
    // console.log(this.addedItensList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.addedItensList);
    localStorage.setItem("addedItensList", JSON.stringify(this.addedItensList));
  }

  removeItemCart(item: Iitem) {
    const itemIndex = this.addedItensList.findIndex((currentItem) => {
      return currentItem.id === item.id;
    });
    this.addedItensList.splice(itemIndex, 1);
  }

  incrementTotalItensCopies(item: Iitem) {
    item.totalAddedToCart++;
    if (item.totalAddedToCart > item.stock) {
      item.totalAddedToCart = item.stock;
    }
    localStorage.setItem("addedItensList", JSON.stringify(this.addedItensList));
  }

  decrementTotalItensCopies(item: Iitem) {
    item.totalAddedToCart--;

    if (item.totalAddedToCart <= 0) {
      this.removeItemCart(item);
    }
    localStorage.setItem("addedItensList", JSON.stringify(this.addedItensList));
  }
}
