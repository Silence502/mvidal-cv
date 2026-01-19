import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true, // Explicitly standalone for clarity, though default in v19+
  imports: [ReactiveFormsModule],
  template: `
    <section class="py-20 bg-white border-t border-slate-100" id="contact">
      <div class="max-w-3xl mx-auto px-6">
        
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Me Contacter</h2>
          <p class="text-slate-600">
            Un projet ? Une question ? N'hésitez pas à m'envoyer un message.
          </p>
        </div>

        @if (isSent()) {
          <!-- Success Message -->
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-fade-in">
            <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
            <p class="text-slate-600 mb-6">Merci de m'avoir contacté. Je reviendrai vers vous dans les plus brefs délais.</p>
            <button 
              (click)="resetForm()"
              class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
              Envoyer un autre message
            </button>
          </div>
        } @else {
          <!-- Contact Form -->
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name Field -->
              <div class="space-y-2">
                <label for="name" class="block text-sm font-medium text-slate-700">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  [class.ring-red-500]="isFieldInvalid('name')"
                  [class.focus:ring-red-500]="isFieldInvalid('name')"
                  class="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all"
                  placeholder="Votre nom"
                >
                @if (isFieldInvalid('name')) {
                  <p class="text-red-500 text-xs mt-1">Le nom est requis.</p>
                }
              </div>

              <!-- Email Field -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-slate-700">Adresse e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  [class.ring-red-500]="isFieldInvalid('email')"
                  [class.focus:ring-red-500]="isFieldInvalid('email')"
                  class="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all"
                  placeholder="vous@exemple.com"
                >
                 @if (isFieldInvalid('email')) {
                  <p class="text-red-500 text-xs mt-1">Une adresse e-mail valide est requise.</p>
                }
              </div>
            </div>

            <!-- Message Field -->
            <div class="space-y-2">
              <label for="message" class="block text-sm font-medium text-slate-700">Message</label>
              <textarea 
                id="message" 
                formControlName="message"
                rows="5"
                [class.ring-red-500]="isFieldInvalid('message')"
                [class.focus:ring-red-500]="isFieldInvalid('message')"
                class="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all resize-none"
                placeholder="Dites-moi tout..."
              ></textarea>
               @if (isFieldInvalid('message')) {
                  <p class="text-red-500 text-xs mt-1">Le message ne peut pas être vide.</p>
                }
            </div>

            <!-- Submit Button -->
            <div class="text-center pt-2">
              <button 
                type="submit" 
                [disabled]="contactForm.invalid || contactForm.pristine"
                class="inline-flex justify-center items-center w-full md:w-auto px-8 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
              >
                Envoyer le message
              </button>
            </div>

          </form>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  
  isSent = signal(false);

  contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Simulation of API call
      console.log('Form Submitted', this.contactForm.getRawValue());
      
      // Show success state
      this.isSent.set(true);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.isSent.set(false);
    this.contactForm.reset();
  }
}