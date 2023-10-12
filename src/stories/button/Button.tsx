import { ButtonProps } from "./types"
import './styles/button.css';
import React from "react";


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({children, className, variant , asChild , ...props}: ButtonProps , ref) => {
  return ( 
    <button       
      ref={ref}
    {...props} className={` storybook-button-base storybook-button-${variant} ${className} `} >{children}</button>
  )
}
)

