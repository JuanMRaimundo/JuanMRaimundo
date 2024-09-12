import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { TranslateModule } from '@ngx-translate/core';
import { IntersectionObserverDirective } from '../directives/intersection-observer.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { PersonalSkillsComponent } from '../components/personal-skills/personal-skills.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntersectionObserverDirective,
    CarouselComponent,
    PersonalSkillsComponent,
  ],
  imports: [CommonModule, TranslateModule, NgbModule],
})
export class HomeModule {}
