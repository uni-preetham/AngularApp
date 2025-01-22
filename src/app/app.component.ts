import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <div class="headdiv">
        <img class="brand-logo" src="https://v17.angular.io/assets/images/logos/angular/logo-nav@2x.png" alt="logo" aria-hidden="true">
        </div>
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
}
