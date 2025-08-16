import { Injectable } from '@angular/core';
import { artData } from './artData';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected artList: artData[] = [
    {
      title: 'Rice Shower',
      url: 'https://res.cloudinary.com/dd3s6lmus/image/upload/v1754698117/riceshower_sujvl6.webp',
      tags: 'umamusume, rice shower',
    },
    {
      title: 'Test',
      url: 'https://res.cloudinary.com/dd3s6lmus/image/upload/v1754962290/widetest_yzcfsi.webp',
      tags: 'empty, test',
    }
  ];

  getAllArt(): artData[] {
    return this.artList;
  }

  getArtByTags(searchTerm: string): artData [] {
    const term = searchTerm.toLowerCase();
    return this.artList.filter(art =>
        art.title.toLowerCase().includes(term) ||
        art.tags.toLowerCase().includes(term)
    );
  }
}