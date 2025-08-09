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
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }) {}
  isZoomed = false;

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
