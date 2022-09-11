import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-notification',
  templateUrl: './icon-notification.component.html',
  styleUrls: ['./icon-notification.component.css']
})
export class IconNotificationComponent implements OnInit {

  @Input() notifications = 0;

  @Output() clickNotification = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.clickNotification.emit();
  }

}
