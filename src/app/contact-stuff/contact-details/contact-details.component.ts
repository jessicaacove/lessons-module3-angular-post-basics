import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  myContactId: number;

  // Tell angular we want to use ActivatedRoute in our component
  constructor(
    private routeThang: ActivatedRoute
  ) { }

  ngOnInit() {
    // When the component is loaded, retrieve the URL params.

    // req.params.myId
    this.routeThang.params.subscribe((actualParams) => {
      this.myContactId = actualParams['myId']
    });
  }

}
