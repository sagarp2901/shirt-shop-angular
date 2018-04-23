import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class CommonService {
    shirtsInCart = [];
    shirtsInCatalog = [];
    finalItems: any;
    address: any;
    user: any;

    public catalogUpdated = new Subject<any>();
    public cartUpdated = new Subject<any>();

    constructor() { }

    addToCart(shirt) {
        // Find if the item already exists using index
        const index = this.shirtsInCart.findIndex(shirtInCart => {
            return shirtInCart.description === shirt.description;
        });
        if (index !== -1) {
            // If item already exists then update quantity
            this.shirtsInCart[index].quantity += 1;
        } else {
            // Else add the item to list
            this.shirtsInCart = [...this.shirtsInCart, shirt];
        }
        // Update subscription
        this.cartUpdated.next(this.shirtsInCart);
    }

    addToCatalog(shirt) {
        // Check to see if the shirt exists in the catalog and only add to catalog if does not exist
        let found = this.shirtsInCatalog.some((shirtInCatalog) => {
            return shirtInCatalog.color === shirt.color && shirtInCatalog.size === shirt.size && shirtInCatalog.gender === shirt.gender;
        });
        if (!found) {
            this.shirtsInCatalog = [...this.shirtsInCatalog, shirt];
            this.catalogUpdated.next(this.shirtsInCatalog);
        }

    }

    getCatalog() {
        return this.shirtsInCatalog;
    }

    getCart() {
        return this.shirtsInCart;
    }

    removeFromCart(index) {
        this.shirtsInCart.splice(index, 1);
        this.cartUpdated.next(this.shirtsInCart);
    }

    removeFromCatalog(index) {
        this.shirtsInCatalog.splice(index, 1);
        this.catalogUpdated.next(this.shirtsInCatalog);
    }

    setAddress(address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }

    setFinalOrderItems(items) {
        this.finalItems = items;
    }
    getFinalOrderItems() {
        return this.finalItems;
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}