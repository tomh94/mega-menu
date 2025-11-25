import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MegaMenu} from './mega-menu/mega-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MegaMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MegaMenu');
}
