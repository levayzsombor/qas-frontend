import { Component } from '@angular/core';
import { TestCard } from '../components/test-card/test-card';

@Component({
  selector: 'app-home-page',
  imports: [TestCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}