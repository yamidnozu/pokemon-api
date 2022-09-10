import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-pk-button',
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  `,
  styles: [
  ]
})
export class PkButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
