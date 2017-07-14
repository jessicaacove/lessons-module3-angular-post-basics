import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  // quote info will be set by the parent when the component is displayed
  // (kind of like the parameters of a function)
  @Input() quoteInfo: any;
//                      |_____________________  the type of the data that
//                                            | is sent to the parent
  @Output() onQuoteDelete = new EventEmitter<any>();
  //              |
  //         name of "event" that parent needs to know about
  // creates an "event" that a parent can choose to be notified of

  constructor() { }

  ngOnInit() {
  }

  tellParentToDeleteThis() {
  // "tellParentToDeleteThis()" is called when the button is clicked
    // when the button is clicked, notify parents
    // emit is the thing that notifies parents
    this.onQuoteDelete.emit(this.quoteInfo);
    //                                |
    //                  the information we are sending to the parent. 
  }
}
