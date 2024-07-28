import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { TranslateModule } from '@ngx-translate/core';
import { IntersectionObserverDirective } from '../directives/intersection-observer.directive';

@NgModule({
  declarations: [HomeComponent, IntersectionObserverDirective],
  imports: [CommonModule, TranslateModule],
})
export class HomeModule {}
