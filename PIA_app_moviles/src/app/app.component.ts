import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'person' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Archivados', url: '/folder/Archivados', icon: 'archive' },
  ];

  constructor() {}
}
