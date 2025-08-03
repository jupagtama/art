import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigator',
  imports: [CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet],
  templateUrl: './navigator.html',
  styleUrl: './navigator.css'
})

export class Navigator {
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]).then(() => {
      this.drawer.close();
    });
  }
  
}
