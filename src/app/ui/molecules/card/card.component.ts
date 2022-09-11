import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id = '00002';
  @Input() name = 'Boulvasor';
  @Input() urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.random}.svg`;
  @Input() isFavorite = false;

  @Output() changeFavorite = new EventEmitter();
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeStateFavorite($event: boolean): void {
    this.changeFavorite.emit($event);
  }

  onclicked(){
    this.clicked.emit();
  }

  get random() {
    return Math.round(Math.random() * 100);
  }
}
