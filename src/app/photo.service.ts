import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  chiave: string = "crVuV3UcAn92ZkmMC2ZS7sczeNBWfPZ02e14ANWsLUQ";

  grabPics(query: string, color: string, orientation: string) {
    return this.connessione.get(
      `https://api.unsplash.com/search/photos?client_id=${this.chiave}&query=${query}&color=${color}&orientation=${orientation}`);
  }

  constructor(private connessione: HttpClient) { }
}
