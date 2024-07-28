import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-mode',
  templateUrl: './theme-mode.component.html',
  styleUrls: ['./theme-mode.component.css'],
})
export class ThemeModeComponent {
  constructor(private themeService: ThemeService) {}
  isDarkMode = false;
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  /*  get buttonText(): string {
    return this.isDarkMode ? 'Light' : 'Dark';
  } */

  get iconClass(): string {
    return this.isDarkMode ? 'bi bi-brightness-high-fill' : 'bi bi-moon-fill';
  }
}
