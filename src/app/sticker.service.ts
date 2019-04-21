import { Injectable } from '@angular/core';
import { Sticker } from './sticker';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StickerService {

  constructor(private http: HttpClient) { }

  private dbUrl = 'api/stickers'

  getStickers(): Observable<Sticker[]> {
    return this.http.get<Sticker[]>(this.dbUrl);
  }

  getSticker(id: number): Observable<Sticker> {
      return this.http.get<Sticker>(this.dbUrl+'/'+id);
  }

  updateSticker (sticker: Sticker): Observable<any> {
    sticker.modifiedAt = new Date();
    return this.http.put(this.dbUrl, sticker, httpOptions);
  }

  addSticker (sticker: Sticker): Observable<Sticker> {
    sticker.createdAt = new Date();
    return this.http.post<Sticker>(this.dbUrl, sticker, httpOptions);
  }

  deleteSticker (id: number): Observable<Sticker> {
    return this.http.delete<Sticker>(this.dbUrl+'/'+id, httpOptions);
  }

  searchStickers(term: string): Observable<Sticker[]> {
    if (!term.trim()) 
      return of([]);
    else
      return this.http.get<Sticker[]>(`${this.dbUrl}/?name=${term}`);
  }
}

