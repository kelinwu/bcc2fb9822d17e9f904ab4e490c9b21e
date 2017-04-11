import { Injectable} from '@angular/core';
import { Headers,Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config } from '../config/app.config';

@Injectable()
export class TweetService {
    constructor(private http:Http) {
    }
    
    baseUrl: string = config.apiBaseUrl + 'tweets/user_timeline/95apps';

    getTweets() {
        return this.http.get(this.baseUrl)
            .map((res: any) => {
                let myTweets = res.json();
                console.log("#########" + myTweets);
                return myTweets;
            })
            .catch(this.handleError);
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
