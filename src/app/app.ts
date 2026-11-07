import { Component } from '@angular/core';
import { BaseHeader } from './base-header/base-header';
import { Homepage } from './homepage/homepage';
import { BaseFooter } from './base-footer/base-footer';
@Component({
  imports: [BaseHeader,Homepage,BaseFooter],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
