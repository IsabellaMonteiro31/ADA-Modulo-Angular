// import { Component, OnInit } from '@angular/core';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { MatIcon } from '@angular/material/icon';
// import { NgStyle } from '@angular/common';
// import { Iitem } from '../../interfaces/item.interface';

// @Component({
//   selector: 'app-item-create',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     MatSelectModule,
//     MatInputModule,
//     MatIcon,
//     NgStyle,
//     MatButtonModule,
//     ReactiveFormsModule,
//   ],
//   templateUrl: './item-create.component.html',
//   styleUrl: './item-create.component.css',
// })
// export class ItemCreateComponent implements OnInit {
//   itensList: Iitem[] = [];

//   itemForm: FormGroup;

//   constructor() {
//     this.itemForm = new FormGroup({
//       image1: new FormControl("Cole aqui o endereço web da imagem associada ao item"),
//       // image2: new FormControl(),
//       name: new FormControl("Nome do item"),
//       movie: new FormControl("Filme em que o item aparece"),
//       description: new FormControl("Descrição detalhada"),
//       price: new FormControl(250),
//       // rank: new FormControl(),
//       // discount: new FormControl(),
//       stock: new FormControl(1),
//       totalAddedToCart: new FormControl(),
//     });
//   }

//   ngOnInit() {
//     this.itensList = JSON.parse(localStorage.getItem('itensList') || '[]');
//   }

//   submitForm() {
//     console.log(this.newItem);
//     this.itensList.push(this.newItem);
//     localStorage.setItem('itensList', JSON.stringify(this.itensList));
//   }

//   changeNameValue(event: Event) {
//     const target = event.target as HTMLInputElement;
//     this.newItem.name = target.value;
//     console.log(this.newItem);
//   }
// }
