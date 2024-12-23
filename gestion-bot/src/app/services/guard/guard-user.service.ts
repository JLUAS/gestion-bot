import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardUserService {

  constructor() { }
  canActivate(): boolean{
    const userId = 123
    return true
  }
}
