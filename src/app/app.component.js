"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(servizio) {
        this.servizio = servizio;
        this.query = new forms_1.FormControl();
        this.color = new forms_1.FormControl();
        this.orientation = new forms_1.FormControl();
        this.colors = [
            { v: "black_and_white", l: "Black and white" },
            { v: "black", l: "Black" },
            { v: "white", l: "White" },
            { v: "yellow", l: "Yellow" },
            { v: "orange", l: "Orange" },
            { v: "red", l: "Red" },
            { v: "purple", l: "Purple" },
            { v: "magenta", l: "Magenta" },
            { v: "green", l: "Green" },
            { v: "teal", l: "Teal" },
            { v: "blue", l: "Blue" }
        ];
        this.orientations = [
            { v: "portrait", l: "Portrait" },
            { v: "landscape", l: "Landscape" },
            { v: "squarish", l: "Squarish" }
        ];
    }
    AppComponent.prototype.invioDati = function () {
        var _this = this;
        // alert(`${this.query.value} ${this.color.value} ${this.orientation.value}`);
        this.servizio.grabPics(this.query.value, this.color.value, this.orientation.value).subscribe({
            next: function (dati) {
                _this.arrayPhoto = dati;
            },
            error: function () { alert("ERRORE!"); },
            complete: function () {
                _this.arrayPhoto = _this.arrayPhoto.results;
                // console.log(this.arrayPhoto);
            }
        });
        return false;
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
