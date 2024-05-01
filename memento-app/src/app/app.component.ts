import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ItensCatalogComponent } from './pages/itens-catalog/itens-catalog.component';
import { ItensCartComponent } from './components/itens-cart/itens-cart.component';
import { Iitem } from './interfaces/item.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    MainPageComponent,
    MatSidenavModule,
    ItensCatalogComponent,
    ItensCartComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'Memento';

  addedItensList: Iitem[] = [];

  ngOnInit() {
    this.addedItensList = JSON.parse(
      localStorage.getItem('addedItensList') || '[]'
    );
  }

  findOrAddItem(item: Iitem) {
    for (let i = 0; i < this.addedItensList.length; i++) {
      const currentItem = this.addedItensList[i];

      if (item.id === currentItem.id) {
        currentItem.totalAddedToCart =
          item.totalAddedToCart < item.stock
            ? currentItem.totalAddedToCart + 1
            : currentItem.totalAddedToCart;
        return;
      }
    }

    item.totalAddedToCart = 1;
    this.addedItensList.push(item);
  }

  addItemToCart(item: Iitem) {
    // console.log('o livro vai ser add ao carrinho');

    this.findOrAddItem(item);
    this.addedItensList = [...this.addedItensList]; //sobrescreve o array com uma cópia dele msm

    // console.log(this.addedItensList);
  }
}
