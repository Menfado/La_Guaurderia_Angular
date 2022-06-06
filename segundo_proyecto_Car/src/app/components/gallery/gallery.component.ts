import { Component, OnInit } from '@angular/core';
import { GalleryInterface } from 'src/app/models/guardecanInterfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public galleryInfo: GalleryInterface;

  constructor() { 
this.galleryInfo = {
  title: "Dog Gallery",
  dogs:[{
    name: "Pancho",
    location: "Madrid",
    age: 2,
    size: "small",
    image: {
      src: "https://image.jimcdn.com/app/cms/image/transf/dimension=398x10000:format=jpg/path/sec2bca5d15362a52/image/i538e6653a96d6e89/version/1612389177/image.jpg",
      alt: "pancho img"
    }

  },{
    name: "Vermú",
    location: "Madrid",
    age: 4,
    size: "medium",
    image: {
      src: "https://image.jimcdn.com/app/cms/image/transf/dimension=330x10000:format=jpg/path/sec2bca5d15362a52/image/ib38b74bae4eee7f0/version/1588013721/image.jpg",
      alt: "vermú img"
  }

},{
  name: "Tambor",
  location: "Bcn",
  age: 5,
  size: "xs",
  image: {
    src: "https://image.jimcdn.com/app/cms/image/transf/dimension=484x10000:format=jpg/path/sec2bca5d15362a52/image/i9b8c063c387fa61a/version/1588010622/image.jpg",
    alt: "tambor img"
}




  },{
    name: "Bimba",
    location: "Cádiz",
    age: 1,
    size: "big",
    image: {
      src: "https://image.jimcdn.com/app/cms/image/transf/dimension=484x10000:format=jpg/path/sec2bca5d15362a52/image/i9da5bdbad3e5e3e3/version/1588005980/image.jpg",
      alt: "Bimba img"
  }
  }]
  }
}

  ngOnInit(): void {
  }

}
