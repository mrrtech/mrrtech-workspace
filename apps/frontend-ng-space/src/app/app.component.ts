import { Component } from '@angular/core';
import { menu } from './menu.config';
@Component({
  selector: 'mrrtech-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-ng-space';
  isCollapsed = false;
  menu = menu;
}
