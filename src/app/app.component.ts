import { PhotoService } from './photo.service';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private servizio: PhotoService) {}

  query = new FormControl();
  color = new FormControl();
  orientation = new FormControl();

  arrayPhoto: any;
  arrayError: string = "";

  colors: {v: string, l: string}[] = [
    {v: "black_and_white", l: "Black and white"},
    {v: "black", l: "Black"},
    {v: "white", l: "White"},
    {v: "yellow", l: "Yellow"},
    {v: "orange", l: "Orange"},
    {v: "red", l: "Red"},
    {v: "purple", l: "Purple"},
    {v: "magenta", l: "Magenta"},
    {v: "green", l: "Green"},
    {v: "teal", l: "Teal"},
    {v: "blue", l: "Blue"}
  ];

  orientations: {v: string, l: string}[] = [
    {v: "portrait", l: "Portrait"},
    {v: "landscape", l: "Landscape"},
    {v: "squarish", l: "Squarish"}
  ];

  invioDati() {
    // alert(`${this.query.value} ${this.color.value} ${this.orientation.value}`);
    this.servizio.grabPics(this.query.value, this.color.value, this.orientation.value).subscribe({
      next: dati => {
        this.arrayPhoto = dati;
      },
      error: () => { 
        this.arrayError = "Problema di rete, riprova più tardi = ("
      },
      complete: () => {
        this.arrayPhoto = this.arrayPhoto.results;
        this.arrayPhoto.length > 0 ? this.arrayError = "" : this.arrayError = "No pics = (";
        // console.log(this.arrayPhoto);
      }
    });
    return false;
  }
}
