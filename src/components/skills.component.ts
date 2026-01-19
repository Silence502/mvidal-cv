import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section class="py-20 bg-slate-50" id="skills">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-slate-900 mb-12">Compétences Techniques</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Backend -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
              <span class="font-bold text-xl">BE</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-4">Back-End</h3>
            <ul class="space-y-2">
              @for (skill of skills().backend; track skill) {
                <li class="flex items-center text-slate-600">
                  <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                  {{ skill }}
                </li>
              }
            </ul>
          </div>

          <!-- Frontend -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
              <span class="font-bold text-xl">FE</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-4">Front-End</h3>
            <ul class="space-y-2">
              @for (skill of skills().frontend; track skill) {
                <li class="flex items-center text-slate-600">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                  {{ skill }}
                </li>
              }
            </ul>
          </div>

          <!-- IA & Tools -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
             <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <span class="font-bold text-xl">AI</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-4">IA & Outils</h3>
            <ul class="space-y-2">
              @for (skill of skills().ai; track skill) {
                <li class="flex items-center text-slate-600">
                  <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  {{ skill }}
                </li>
              }
               @for (skill of skills().tools; track skill) {
                <li class="flex items-center text-slate-600">
                  <span class="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  {{ skill }}
                </li>
              }
            </ul>
          </div>
          
           <!-- Testing -->
           <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4 text-amber-600">
              <span class="font-bold text-xl">QA</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-4">Tests & Qualité</h3>
            <ul class="space-y-2">
              @for (skill of skills().testing; track skill) {
                <li class="flex items-center text-slate-600">
                  <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                  {{ skill }}
                </li>
              }
            </ul>
          </div>

           <!-- Game Dev -->
           <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
             <div class="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4 text-pink-600">
              <span class="font-bold text-xl">GD</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-4">Game Dev</h3>
            <ul class="space-y-2">
              @for (skill of skills().gamedev; track skill) {
                <li class="flex items-center text-slate-600">
                  <span class="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                  {{ skill }}
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skills = input.required<any>();
}