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
             <span>✉️</span> {{ email() }}
          </a>
          <a [href]="'https://' + linkedin()" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
             <span>🔗</span> {{ linkedin() }}
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