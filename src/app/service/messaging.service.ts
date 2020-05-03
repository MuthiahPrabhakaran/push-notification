import { Injectable } from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_message) => {
        _message.onMessage = _message.onMessage.bind(_message);
        _message.onTokenRefresh = _message.onTokenRefresh.bind(_message);
      }
    )
   }

   requestPermission() {
     this.angularFireMessaging.requestToken.subscribe(
       (token) => {
         console.log(token);
       }
     )
   }

   receiveMessage() {
     this.angularFireMessaging.messages.subscribe(
       (payload) => {
         console.log("Message Received - ", payload);
         this.currentMessage.next(payload);
       }
     )
   }
}
