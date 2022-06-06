import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/guardecanInterfaces';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
public navigatorInfo: NavigatorInterface [];
public isDark: boolean = false;
public theme: string =  "🌙"

  constructor() { 
  this.navigatorInfo = [{
    content: "La Guardería",
    link: "#guarderia"
  },{
    content: "El Equipo",
    link: "#equipo"
  },{
    content: "Nuestros Centros",
    link: "#centros"
  },{
    content: "Tarifas",
    link: "#tarifas"
  },{
    content: "Contacto",
    link: "#contacto"
}]
}

  ngOnInit(): void {
  }


public changeTheme = () => {
  if(this.isDark === false){
    this.isDark = true;
    this.theme = "☀️"
  } else{
    this.isDark = false;
    this.theme = "🌙"
  }

  console.log(this.isDark)
}
}

