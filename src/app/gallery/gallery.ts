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
    { url: 'https://res.cloudinary.com/dd3s6lmus/image/upload/v1754698117/riceshower_sujvl6.webp'},
    { url: 'https://res.cloudinary.com/dd3s6lmus/image/upload/v1754962290/widetest_yzcfsi.webp'}
  ]
  constructor(private dialog: MatDialog) {}

  openImageDialog(imageUrl: string) {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      const aspect = img.width / img.height;
      const maxHeight = window.innerHeight * 0.9;
      const maxWidth = window.innerWidth * 0.9;

      let width = maxWidth;
      let height = width / aspect;

      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspect;
      }

      this.dialog.open(Card, {
        data: { imageUrl },
        panelClass: 'art-card',
        width: `${width}px`,
        maxWidth: '100vw',
        maxHeight: '100vh'
      });
    };
  }
}
