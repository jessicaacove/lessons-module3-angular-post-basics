import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  theUser: any = {};
  emailMessage: string = '';
  passwordMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  handleTheSubmission() {
    this.emailMessage = '';
    this.passwordMessage = '';

    // no blank email
    if(!this.theUser.fakeEmail) {
      this.emailMessage = 'Please provide your email.';
    }
    // if email doesn't include @
    else if(this.theUser.fakeEmail.includes('@') === false) {
      this.emailMessage = 'Please provide an actual email address (blah@example.com).'
    }
    else {
      this.emailMessage = '';
    }

    // no blank password
    if(!this.theUser.fakePassword) {
      this.passwordMessage = 'Please provide your password.';
    }
    // can't be swordfish
    else if(this.theUser.fakePassword === 'swordfish') {
      this.passwordMessage = '\"swordfish\" is not a valid password.';
    }
    // must be three characters long
    else if(this.theUser.fakePassword.length !== 3) {
      this.passwordMessage = 'Password must have exactly three characters.';
    }
    // no caps (is it the same after lowercasing it?)
    else if(this.theUser.fakePassword !== this.theUser.fakePassword.toLowerCase()) {
      this.passwordMessage = 'No capital letters, please.';
    }
    // no numbers
    else if(/[0-9]/.test(this.theUser.fakePassword) === true) {
      this.passwordMessage = 'No numbers, please.';
    }
    // must have symbol
    else if(/[^0-9A-Za-z]/.test(this.theUser.fakePassword) === false) {
      this.passwordMessage = 'Your password needs symbols.';
    }
    // reset if passed
    else {
      this.passwordMessage = '';
    }

  }
}
