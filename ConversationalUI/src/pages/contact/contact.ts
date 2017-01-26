import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  messages: any[];
  preAnswers: any[];
  constructor(public navCtrl: NavController) {
    this.messages = [];
    this.preAnswers = [];
    for(let i = 0; i < 3; i++){
      this.preAnswers.push({
        text: 'Answer ' + i,
        id: i
      });
    }
    console.log(this.preAnswers);
  }

  reply(answer) {

    this.messages.push({
      text: answer.text,
      identity: 'user'
    })



}

}
