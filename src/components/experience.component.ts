import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="py-20 bg-white" id="experience">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-slate-900 mb-12">Expérience Professionnelle</h2>
        
        <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          
          @for (job of experience(); track job.period) {
            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <!-- Icon -->
              <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div class="w-3 h-3 bg-indigo-600 rounded-full"></div>
              </div>
              
              <!-- Content Card -->
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                   <h3 class="font-bold text-slate-900 text-lg">{{ job.role }}</h3>
                   <span class="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{{ job.period }}</span>
                </div>
                <div class="text-slate-500 font-medium mb-4">{{ job.company }} — {{ job.location }}</div>
                
                <p class="text-slate-600 mb-4">{{ job.description }}</p>
                
                <ul class="space-y-1 mb-4">
                  @for (detail of job.details; track detail) {
                    <li class="flex items-start text-sm text-slate-600">
                      <span class="mr-2 mt-1.5 block w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                      {{ detail }}
                    </li>
                  }
                </ul>

                @if (job.stack && job.stack.length > 0) {
                  <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-50">
                    @for (tech of job.stack; track tech) {
                      <span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">{{ tech }}</span>
                    }
                  </div>
                }
              </div>
              
            </div>
          }

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experience = input.required<any[]>();
}