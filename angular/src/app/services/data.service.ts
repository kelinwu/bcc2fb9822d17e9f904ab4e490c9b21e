import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICustomer, IState, IOrder } from '../shared/interface';

@Injectable()
export class DataService {
    constructor(private http: Http) {}
    baseUrl : string = 'http://localhost:3333/api/customers';

    getCustomers() : Observable<ICustomer[]> {
    return this.http.get(this.baseUrl)
        .map((res: Response) => {
            let customers = res.json();
            this.calculateCustomersOrderTotal(customers);
            return customers;
        })
        .catch(this.handleError);
    }

    getStates(): Observable<IState[]> {
        return this.http.get('/api/states')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getCustomer(id: string) : Observable<ICustomer> {
        return this.http.get(this.baseUrl + "/" + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    }

    private handleError(error: any) {
        console.log('server error: ' + error);

        if(error instanceof Response) {
            let errMsg = '';
            try {
                errMsg = error.json().error;
            } catch(err){
                errMsg = error.statusText;
            }
            return Observable.throw(errMsg);
        }

        return Observable.throw(error || 'NodeJs Server error');
    }

}