import {ViewChild, Component, ElementRef} from '@angular/core';
import {Content} from 'ionic-angular/index';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',



})
export class ContactPage {

  @ViewChild(Content) content: Content;
  messages: any[];
  preAnswers: any[];
  constructor(public navCtrl: NavController) {
    this.messages = [];
    this.preAnswers = [];
    for (let i = 0; i < 3; i++) {
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
    this.content.scrollToBottom();

  }
  sendMessage(myReply) {
    console.log(myReply);
    this.messages.push({
      text: myReply.value,
      identity: 'user'
    })
    myReply.value = null;
    this.content.scrollToBottom();
  }

}
