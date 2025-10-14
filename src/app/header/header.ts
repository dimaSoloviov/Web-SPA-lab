import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterOutlet, NgOptimizedImage, RouterModule, CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})


export class Header {

  appTitle: string = 'DT';

}
