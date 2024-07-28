import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state(
        'hidden',
        style({
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      transition('hidden => visible', [animate('1s')]),
      transition('visible => hidden', [animate('1s')]),
    ]),
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}
  private themeSubscription!: Subscription;
  isDarkMode: boolean = false;
  isElementVisible: boolean = false;

  ngOnInit() {
    this.themeSubscription = this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
    this.isDarkMode = this.themeService.loadTheme();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  changeLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
  get buttonMode(): string {
    return this.isDarkMode ? 'btn btn-outline-light' : 'btn btn-outline-dark';
  }

  onIntersection(event: IntersectionObserverEntry[]) {
    event.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isElementVisible = true;
      }
    });
  }
}
