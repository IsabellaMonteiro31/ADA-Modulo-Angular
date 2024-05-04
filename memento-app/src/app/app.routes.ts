import { Routes } from '@angular/router';
import { ItensCatalogComponent } from './pages/itens-catalog/itens-catalog.component';
import { ItemCreateComponent } from './pages/item-create/item-create.component';

export const routes: Routes = [
  { path: '', component: ItensCatalogComponent },
  { path: 'itens/create', component: ItemCreateComponent },
];
