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
import { ScreenSizeService } from '../services/screenSize.service';

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
    private themeService: ThemeService,
    private screenSizeService: ScreenSizeService
  ) {}
  private themeSubscription!: Subscription;
  private screenSizeSubscription!: Subscription;
  isDarkMode: boolean = false;
  isMobile: boolean = false;
  isElementVisible: boolean = false;
  skills = [
    { name: 'HTML', icon: 'assets/icons/html5.svg' },
    { name: 'CSS', icon: 'assets/icons/css3.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
    { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
    { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg' },
    { name: 'GitHub', icon: 'assets/icons/github.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'React', icon: 'assets/icons/react.svg' },
  ];

  ngOnInit() {
    this.themeSubscription = this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
    this.isDarkMode = this.themeService.loadTheme();
    this.screenSizeSubscription = this.screenSizeService.isMobile$.subscribe(
      (isMobile) => {
        this.isMobile = isMobile;
      }
    );
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }

  changeLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }

  onIntersection(event: IntersectionObserverEntry[]) {
    event.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isElementVisible = true;
      }
    });
  }
}
