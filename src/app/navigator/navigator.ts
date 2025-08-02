import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigator',
  imports: [CommonModule,
    MatSidenavModule,
    MatButtonModule],
  templateUrl: './navigator.html',
  styleUrl: './navigator.css'
})
export class Navigator {
  isVisible = true;

}
