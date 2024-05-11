import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  constructor() { }

  isOpen: boolean = false;
}
