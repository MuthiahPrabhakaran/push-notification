import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'push-notification-demo';
  message;
  constructor(private messageService : MessagingService){}

  ngOnInit(){
    this.messageService.requestPermission();
    this.messageService.receiveMessage;
    this.message = this.messageService.currentMessage;
  }
}
