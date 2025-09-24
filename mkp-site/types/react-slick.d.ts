declare module 'react-slick' {
  import * as React from 'react';
  export interface Settings {
    dots?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    adaptiveHeight?: boolean;
    responsive?: Array<{ breakpoint: number; settings: Partial<Settings> }>;
  }
  export default class Slider extends React.Component<Settings & React.HTMLAttributes<HTMLDivElement>> {}
}


