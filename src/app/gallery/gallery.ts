import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';
import { GalleryService } from './gallery.service';
import { inject } from '@angular/core';
import { artData } from './artData';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule,
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})

export class Gallery {
  private galleryService = inject(GalleryService);

  allArt: artData[] = [];
  filteredArt: artData[] = [];
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.allArt = this.galleryService.getAllArt();
    this.filteredArt = [...this.allArt];
  }

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
  filterResults(text: string) {
    if (!text) {
      this.filteredArt = this.allArt;
      return;
    }

    this.filteredArt = this.allArt.filter(
      artData => artData?.tags.toLowerCase().includes(text.toLowerCase())
    );
  }
}
