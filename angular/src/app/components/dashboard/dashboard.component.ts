import { ICustomer } from '../../shared/interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TweetService } from '../../services/tweet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string;
  customers: ICustomer[] = [];
  tweets: any[] = [];
  filteredCustomers: ICustomer[] = [];

  constructor(
    private router: Router,
    private twtService: TweetService,
    private dataService : DataService) { }

  ngOnInit() {
    this.getCustomers();
    this.getTweets();
  }

  getCustomers() {
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => {
        this.customers = this.filteredCustomers = customers;
      },
      (err: any) => console.log(err),
      () => console.log('getCustomer() retrieved customers'));  //this will always call
  }

  getTweets(){
    this.twtService.getTweets()
      .subscribe(tweets => {
        console.log("######"+ tweets);
        this.tweets = tweets;
      })
  }

}
