import { Injectable } from '@angular/core';
import { ICustomer, IOrder } from '../shared/interface';
@Injectable()
export class SorterService {
    customer(sortproderty, customers: ICustomer[]){
        return customers.sort(sortproderty);
    }

}