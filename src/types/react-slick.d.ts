declare module "react-slick" {
  import React from "react";

  interface SliderProps extends React.HTMLAttributes<HTMLElement> {
    // keep props flexible; specific props can be added later as needed
    [key: string]: any;
  }

  const Slider: React.ComponentType<SliderProps>;
  export default Slider;
}
