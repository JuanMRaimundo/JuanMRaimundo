import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css'],
})
export class NetworksComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}
  private themeSubscription!: Subscription;
  isDarkMode: boolean = false;
  isDesktop: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  ngOnInit() {
    this.themeSubscription = this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
    this.checkScreenSize();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  changeLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
  private checkScreenSize() {
    this.isDesktop = window.innerWidth > 768;
  }
}
