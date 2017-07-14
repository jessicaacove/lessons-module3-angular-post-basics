import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
// You need routes to set up fake pages in angular
// if you created the app with "--routing ", it will already be here

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuoteItemComponent } from './quote-stuff/quote-item/quote-item.component';
import { QuoteListComponent } from './quote-stuff/quote-list/quote-list.component';
import { ContactListComponent } from './contact-stuff/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-stuff/contact-details/contact-details.component';

// each item of this array represents one "page" in our app
const myRoutes: Routes = [
  // url of fake pages
  //  |       conponent to be displayed when you visit that page
  //  |           |
  { path: '', component: QuoteListComponent },
  //      |
  // empty string is the "/" URL (home page)
  { path: 'forms', component: FormComponent },
  //         |
  //   "/forms" URL
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:myId', component: ContactDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteItemComponent,
    QuoteListComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes) // Finished the connection between the app and routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
