import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RESUME_DATA } from './data/resume.data';
import { HeroComponent } from './components/hero.component';
import { ExperienceComponent } from './components/experience.component';
import { SkillsComponent } from './components/skills.component';
import { EducationInterestsComponent } from './components/education.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationInterestsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <main class="min-h-screen bg-slate-50">
      
      <app-hero 
        [name]="data.profile.name"
        [role]="data.profile.role"
        [summary]="data.profile.summary"
        [email]="data.profile.email"
        [linkedin]="data.profile.linkedin"
      ></app-hero>

      <app-experience [experience]="data.experience"></app-experience>
      
      <app-skills [skills]="data.skills"></app-skills>
      
      <app-education-interests 
        [education]="data.education"
        [interests]="data.interests"
      ></app-education-interests>

<!--      <app-contact></app-contact>-->

      <app-footer
        [name]="data.profile.name"
        [location]="data.profile.location"
        [email]="data.profile.email"
        [linkedin]="data.profile.linkedin"
      ></app-footer>

    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  data = RESUME_DATA;
}