import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class CommonService {
    shirtsInCart = [];
    shirtsInCatalog = [];

    public shirtAddedToCatalog = new Subject<any>();
    public shirtAddedToCart = new Subject<any>();

    constructor() { }

    addToCart(shirt) {
        this.shirtsInCart = [...this.shirtsInCatalog, shirt];
        this.shirtAddedToCart.next(shirt);
    }

    addToCatalog(shirt) {
        this.shirtsInCatalog = [...this.shirtsInCatalog, shirt];
        this.shirtAddedToCatalog.next(this.shirtsInCatalog);
    }

    getCatalog() {
        return this.shirtsInCatalog;
    }

    getCart() {
        return this.shirtsInCart;
    }
}