import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Logout } from './actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private actions: Actions, private router: Router) {}

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => this.router.navigate(['/login']));
  }

}