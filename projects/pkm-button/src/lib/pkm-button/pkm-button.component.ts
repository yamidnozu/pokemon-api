import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'pkm-button',
  template: `
    <button 
          [id]=""
          class="
            font-bold
            
            text-white 
            disabled:text-black
            
            py-2 
            px-4 
            
            disabled:bg-gray-100
            disabled:cursor-not-allowed
            
            rounded
          "
          [ngClass]="{
            'bg-red-500': color === 'red',
            'bg-blue-500': color === 'blue',
            'w-full': widthFull === true
          }"
          [disabled]="disabled"

          (click)="onClick()"
    >
      {{text}}
    </button>
  `,
  styles: [
    `

    `
  ]
})
export class PkmButton implements OnInit {

  @Input() id = this.randomId;

  @Input() disabled = false;

  @Input() text = '';

  @Input() color: 'red' | 'blue' = 'red';

  @Input() widthFull = false;

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.id)
      document.querySelector('button')?.setAttribute('id', this.id);
  }

  // generar método que genera ID con formato 'button-xxx'
  get randomId() {
    return 'button-' + Math.random().toString(36).substring(2);
  }

  onClick(){
    this.click.emit();
  }
}
