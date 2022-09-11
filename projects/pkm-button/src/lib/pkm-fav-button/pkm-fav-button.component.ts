import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pkm-fav-button',
  templateUrl: './pkm-fav-button.component.html',
  styleUrls: ['./pkm-fav-button.component.css']
})
export class PkmFavButtonComponent implements OnInit {


  @Input() checked = false;

  @Output() toogle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toogleEvent(){
    this.checked = !this.checked;
    this.toogle.emit(this.checked)
  }

}
