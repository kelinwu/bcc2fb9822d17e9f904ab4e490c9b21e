import { ModuleWithProviders } from '@angular/core';

export interface ICustomer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    citystring;
    state? : IState;
    stateId: number;
    zip: number;
    gender: string;
    ordercount?: number;
    orders?: IOrder[];
    orderTotal?:number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
}