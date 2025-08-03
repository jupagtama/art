import { Routes } from '@angular/router';
import { Navigator } from './navigator/navigator';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
    path: '',
    component: Navigator,
    children: [
      { path: 'home', component: Home },
      { path: 'gallery', component: Gallery},
      { path: 'about', component: About},
      { path: 'contact', component: Contact},
    ],
  },
];
