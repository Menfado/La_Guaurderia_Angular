import { Component, OnInit } from '@angular/core';
import { footerInterface } from 'src/app/models/guardecanInterfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public footerInfo: footerInterface;

  constructor() { 
    this.footerInfo = {
      copyright: "Guaurdería 2022"
    }
  }

  ngOnInit(): void {
  }

}
