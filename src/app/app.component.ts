import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateGlobalService } from './shared/services/state-global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public stateGlobal: StateGlobalService,
    private router: Router,
  ) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

}
