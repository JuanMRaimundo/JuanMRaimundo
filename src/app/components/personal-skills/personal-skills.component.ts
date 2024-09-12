import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: ['./personal-skills.component.css'],
})
export class PersonalSkillsComponent implements OnInit {
  isDarkMode: boolean = false;
  skills = [
    {
      name: 'AUTOLEARNING',
      icon: 'assets/icons/otherSkills/selfLearning.png',
    },
    {
      name: 'PROACTIVE',
      icon: 'assets/icons/otherSkills/proactive.png',
    },
    { name: 'ASSERTIVE', icon: 'assets/icons/otherSkills/asertivo.png' },
    { name: 'COMUNICATION', icon: 'assets/icons/otherSkills/comunication.png' },
    {
      name: 'PLANIFICATION',
      icon: 'assets/icons/otherSkills/planificacion.png',
    },
    { name: 'TEAMWORK', icon: 'assets/icons/otherSkills/teamwork.png' },
    { name: 'DECISION_MAKING', icon: 'assets/icons/otherSkills/decision.png' },
    {
      name: 'CRITICAL_THINKING',
      icon: 'assets/icons/otherSkills/critical.png',
    },
  ];
  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.loadTheme();
    this.themeService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }

  toggleTheme() {
    this.themeService.toggleTheme(!this.isDarkMode);
  }
}
