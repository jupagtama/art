import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})

export class Gallery {
  images = [
    { url: 'https://res.cloudinary.com/dd3s6lmus/image/upload/v1754698117/riceshower_sujvl6.webp' }
  ];
  constructor(private dialog: MatDialog) {}

  openImageDialog(imageUrl: string) {
    this.dialog.open(Card, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container'
    });
  }
}
