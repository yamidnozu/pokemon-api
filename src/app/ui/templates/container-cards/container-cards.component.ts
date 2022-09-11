import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'container-cards',
  templateUrl: './container-cards.component.html',
  styleUrls: ['./container-cards.component.css']
})
export class ContainerCardsComponent implements OnInit {

  throttle = 300;
  scrollDistance = 2;
  scrollUpDistance = 0;
  direction = "";


  @Output() scrollDown = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onScrollDown() {
    this.scrollDown.emit()
  }
}
