import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrls: ['./go-back-button.component.css']
})
export class GoBackButtonComponent implements OnInit {

  @Input() title = '';
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.click.emit();
  }


}
