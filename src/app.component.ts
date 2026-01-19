import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RESUME_DATA } from './data/resume.data';
import { HeroComponent } from './components/hero.component';
import { ExperienceComponent } from './components/experience.component';
import { SkillsComponent } from './components/skills.component';
import { EducationInterestsComponent } from './components/education.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationInterestsComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  data = RESUME_DATA;
}