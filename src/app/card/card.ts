import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  isZoomed = false;

  toggleZoom(event: MouseEvent) {
  const img = event.target as HTMLImageElement;
  const card = img.parentElement;
  img.classList.toggle('zoomed');
  card?.classList.toggle('zoomed');
}
  
}
