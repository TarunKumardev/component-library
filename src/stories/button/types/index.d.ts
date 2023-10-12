import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "outline" | "ghost" | "link" 

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean,
  href ?: string,
  variant ?: ButtonVariant
}