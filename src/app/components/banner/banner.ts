import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-banner',
  imports: [MatCardModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {}
