import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets: any;
  constructor(
    private twtService: TweetService,
  ) { }

  ngOnInit() {
    this.getTweets();
  }

getTweets(){
    this.twtService.getTweets()
      .subscribe(tweets => {
        console.log("######"+ tweets);
        this.tweets = tweets;
      })
  }
}
