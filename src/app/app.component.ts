import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PraticeComponent } from './pratice/pratice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PraticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice_chatGPT';
}
