import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-slate-900 text-slate-300 py-12">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div class="text-center md:text-left">
          <h3 class="text-white font-bold text-xl mb-1">{{ name() }}</h3>
          <p class="text-slate-500 text-sm">Développeur Full Stack • {{ location() }}</p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-6 text-sm font-medium">
          <a href="mailto:{{ email() }}" class="hover:text-white transition-colors flex items-center gap-2">
            <span><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z" fill="currentColor"></path></svg></span> {{ email() }}
          </a>
          <a [href]="'https://' + linkedin()" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
             <span><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48z" fill="currentColor"></path><path d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0z" fill="currentColor"></path></svg></span> {{ linkedin() }}
          </a>
        </div>
      
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  name = input.required<string>();
  location = input.required<string>();
  email = input.required<string>();
  linkedin = input.required<string>();
}