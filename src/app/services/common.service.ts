import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class CommonService {
    shirtsInCart = [];
    shirtsInCatalog = [];

    public catalogUpdated = new Subject<any>();
    public cartUpdated = new Subject<any>();

    constructor() { }

    addToCart(shirt) {
        this.shirtsInCart = [...this.shirtsInCart, shirt];
        this.cartUpdated.next(this.shirtsInCart);
    }

    addToCatalog(shirt) {
        this.shirtsInCatalog = [...this.shirtsInCatalog, shirt];
        this.catalogUpdated.next(this.shirtsInCatalog);
    }

    getCatalog() {
        return this.shirtsInCatalog;
    }

    getCart() {
        return this.shirtsInCart;
    }

    shirtRemovedFromCart(index) {
        this.shirtsInCart.splice(index, 1);
        this.cartUpdated.next(this.shirtsInCart);
    }
}