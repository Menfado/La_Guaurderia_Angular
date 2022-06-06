import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/models/guardecanInterfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroInfo: HeroInterface;

  constructor() { 

    this.heroInfo = {
      subtitle: "Bienvenidxs a la Guaurdería",
      image: {
        src: "https://media.istockphoto.com/photos/dogs-of-various-sizes-closeup-web-banner-picture-id959747756?k=20&m=959747756&s=170667a&w=0&h=0tQ2d3UcmBfYdjokzP2aIKrZ-YaL3mCR4xwGt3HG8uA=",
        alt: "Dogs Banner"
      }
    }
  }

  ngOnInit(): void {
  }

}
