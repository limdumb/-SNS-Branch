import { nobile } from "@/font";
import styles from "./style/submitButton.module.css";
import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SubmitButton(props: ButtonProps) {
  return (
    <button className={`${styles.customButton} ${nobile.className}`} {...props}>
      {props.children}
    </button>
  );
}