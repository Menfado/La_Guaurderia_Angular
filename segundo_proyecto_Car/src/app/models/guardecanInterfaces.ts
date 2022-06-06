export interface NavigatorInterface {
    content: string,
    link: string
}

export interface HeroInterface {
    subtitle: string;
    image: ImageInterface

}

export interface GalleryInterface {
    title: string,
    dogs: DogInterface [

    ];
}

export interface DogInterface {
    name: string,
    location: string,
    age: number,
    size: string,
    image: ImageInterface

}


export interface ImageInterface {
    src: string;
    alt: string
}


export interface footerInterface {
   copyright: string
}