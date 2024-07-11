import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ssr-repro';
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'twitter:card', content: 'test-meta-var-app' });
  }
}
