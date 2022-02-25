"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoService = void 0;
var core_1 = require("@angular/core");
var PhotoService = /** @class */ (function () {
    function PhotoService(connessione) {
        this.connessione = connessione;
        this.chiave = "crVuV3UcAn92ZkmMC2ZS7sczeNBWfPZ02e14ANWsLUQ";
    }
    PhotoService.prototype.grabPics = function (query, color, orientation) {
        return this.connessione.get("https://api.unsplash.com/search/photos?client_id=".concat(this.chiave, "&query=").concat(query, "&color=").concat(color, "&orientation=").concat(orientation));
    };
    PhotoService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
