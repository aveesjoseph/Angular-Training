import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <div class="title">
      <app-home/>
    </div>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
