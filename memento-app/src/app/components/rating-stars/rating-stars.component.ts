import { NgClass, NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating-stars',
  standalone: true,
  imports: [MatIconModule, NgFor, NgClass],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css'
})

export class RatingStarsComponent {
  stars: boolean[] = Array(5).fill(false);  // Array para armazenar o estado de cada estrela (true para estrela cheia, false para estrela vazia)
  

rate(starIndex: any): void {
  const index = Number(starIndex);
  if (!isNaN(index)) {
    this.stars = this.stars.map((_, i) => i <= index);

  }
}
}
