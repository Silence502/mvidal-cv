import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="bg-white border-b border-slate-200">
      <div class="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div class="space-y-6 max-w-2xl">
            <div>
              <h2 class="text-slate-500 font-medium text-lg uppercase tracking-wide mb-2">Portfolio</h2>
              <h1 class="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                {{ name() }}
              </h1>
              <p class="text-xl md:text-2xl text-indigo-600 font-semibold mt-2">
                {{ role() }}
              </p>
            </div>
            
            <p class="text-lg text-slate-600 leading-relaxed max-w-xl">
              {{ summary() }}
            </p>
            
            <div class="flex flex-wrap gap-4 pt-4">
              <a href="mailto:{{ email() }}" class="inline-flex items-center px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                Me contacter
              </a>
              <a [href]="'https://' + linkedin()" target="_blank" class="inline-flex items-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                LinkedIn
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1bkjYlp3zIzVD-8CQeWWgb7fkXdiceseo" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Télécharger le CV
              </a>
            </div>
          </div>
          
          <div class="hidden md:block relative">
            <div class="w-64 h-64 bg-slate-100 rounded-2xl rotate-3 absolute -inset-4 -z-10"></div>
            <div class="w-64 h-64 bg-indigo-50 rounded-2xl -rotate-3 absolute -inset-4 -z-10"></div>
            <div class="w-64 h-64 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg p-8">
               <!-- Abstract visual representation of code/structure -->
               <div class="grid grid-cols-2 gap-2 w-full h-full opacity-20">
                  <div class="bg-indigo-600 rounded-lg col-span-2 h-8"></div>
                  <div class="bg-slate-800 rounded-lg h-24"></div>
                  <div class="bg-slate-400 rounded-lg h-24"></div>
                  <div class="bg-indigo-400 rounded-lg col-span-2 h-12"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  name = input.required<string>();
  role = input.required<string>();
  summary = input.required<string>();
  email = input.required<string>();
  linkedin = input.required<string>();
}