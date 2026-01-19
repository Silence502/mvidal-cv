import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-education-interests',
  template: `
    <section class="py-20 bg-slate-50" id="education">
      <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <!-- Education Column -->
        <div>
          <h2 class="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <span class="w-8 h-1 bg-indigo-600 rounded mr-3"></span>
            Formation
          </h2>
          <div class="space-y-6">
            @for (edu of education(); track edu.degree) {
              <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-slate-900">{{ edu.degree }}</h3>
                  <span class="text-sm text-slate-400 font-mono">{{ edu.year }}</span>
                </div>
                <div class="text-indigo-600 font-medium mb-2">{{ edu.school }}</div>
                <p class="text-sm text-slate-600">{{ edu.details }}</p>
              </div>
            }
          </div>
        </div>

        <!-- Interests Column -->
        <div>
          <h2 class="text-2xl font-bold text-slate-900 mb-8 flex items-center">
             <span class="w-8 h-1 bg-emerald-500 rounded mr-3"></span>
             Centres d'intérêt
          </h2>
          <div class="space-y-6">
             @for (interest of interests(); track interest.title) {
               <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                 <h3 class="font-bold text-slate-900 mb-2">{{ interest.title }}</h3>
                 <p class="text-sm text-slate-600 leading-relaxed">{{ interest.description }}</p>
               </div>
             }
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationInterestsComponent {
  education = input.required<any[]>();
  interests = input.required<any[]>();
}