import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pkm-top-bar',
  templateUrl: './pkm-top-bar.component.html',
  styleUrls: ['./pkm-top-bar.component.css']
})
export class PkmTopBarComponent implements OnInit {

  @Input() notifications = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
