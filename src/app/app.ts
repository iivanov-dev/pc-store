import { Component } from '@angular/core';
import { BaseHeader } from './base-header/base-header';
@Component({
  imports: [BaseHeader],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
