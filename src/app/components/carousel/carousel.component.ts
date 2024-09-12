import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  icons = [
    { src: 'assets/icons/html_icon.png', alt: 'HTML' },
    { src: 'assets/icons/css_icon.png', alt: 'CSS' },
    { src: 'assets/icons/javascript_icon.png', alt: 'JavaScript' },
    { src: 'assets/icons/typeScript_icon.png', alt: 'TypeScript' },
    { src: 'assets/icons/angular_icon.png', alt: 'Angular' },
    { src: 'assets/icons/react_icon.png', alt: 'React' },
    { src: 'assets/icons/bootstrap_icon.png', alt: 'Bootstrap' },
    { src: 'assets/icons/mongoDB_icon.png', alt: 'MongoDB' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
