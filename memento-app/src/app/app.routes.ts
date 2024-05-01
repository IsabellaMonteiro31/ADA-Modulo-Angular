import { Routes } from '@angular/router';
import { ItensCatalogComponent } from './pages/itens-catalog/itens-catalog.component';
import { OldItemCreateComponent } from './pages/item-create/old-item-create.component';

export const routes: Routes = [
  { path: '', component: ItensCatalogComponent },
  { path: 'itens/create', component: OldItemCreateComponent },
];
