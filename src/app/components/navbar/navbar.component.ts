import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
    //document.body.classList.toggle('dark-mode', this.isDarkMode);
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.textContent = this.isDarkMode ? 'Light' : 'Dark';
    }
  }
  changeLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
}
