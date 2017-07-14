import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  allTheQuotes: object[] = [
    {
      text: `You Can Discover Everything You Need To Know About Everything
         By Looking At Your Hands`,
      author: 'Jayden Smith'
    },
    {
      text: `If A Book Store Never Runs Out Of A Certain Book
      Dose That Mean That Nobody Reads It, Or Everybody Reads It`,
      author: 'Jayden Smith'
    },
    {
      text: `I mean, time for me, I can make it go slow or fast,
      however I please, and that’s how I know it doesn’t exist`,
      author: 'Willow Smith'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  executeDeletion(theQuote) {
    const quoteIndex = this.allTheQuotes.indexOf(theQuote);
    this.allTheQuotes.splice(quoteIndex, 1);
  }

}
