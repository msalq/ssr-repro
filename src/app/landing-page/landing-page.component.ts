import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'test-meta-var-child-route',
    });
  }
}
