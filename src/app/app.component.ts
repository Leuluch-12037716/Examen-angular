import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';

@Component({
  selector: 'app-root',
  standalone: false, 
  templateUrl: './app.component.html' ,

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto';
}
