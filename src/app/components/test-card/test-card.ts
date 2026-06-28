import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-test-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './test-card.html',
  styleUrl: './test-card.scss',
})
export class TestCard {}
