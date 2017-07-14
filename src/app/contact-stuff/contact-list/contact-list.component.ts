import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  allTheContacts: any[] = [
    { id: 42,
      name: 'Andromeda Gonzalez',
      notes: 'Weird name from Refresh Miami'
    },
    { id: 100,
      name: 'Arcann FromStarWars',
      notes: 'Cosplayer from SOBE Supercon'
    },
    { id: 3,
      name: 'Dakota Fanning',
      notes: 'Actress from Uptown Girls'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
