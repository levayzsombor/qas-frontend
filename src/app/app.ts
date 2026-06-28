import { Component, signal } from '@angular/core';
import { HomePage } from './home-page/home-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('qas-frontend');
}
