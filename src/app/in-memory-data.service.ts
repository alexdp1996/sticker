import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sticker } from './sticker';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stickers = [
      { id: 1, name: 'Sticker 1', createdAt: new Date() },
      { id: 2, name: 'Sticker 2', createdAt: new Date() },
      { id: 3, name: 'Sticker 3', createdAt: new Date() },
      { id: 4, name: 'Sticker 4', createdAt: new Date() },
      { id: 5, name: 'Sticker 5', createdAt: new Date() }
    ];
    return {stickers};
  }
  
  genId(stickers: Sticker[]): number {
    return stickers.length > 0 ? Math.max(...stickers.map(s => s.id)) + 1 : 1;
  }
}