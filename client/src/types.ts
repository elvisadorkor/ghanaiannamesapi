import { MouseEventHandler } from "react";

export interface SelectFormProps {
  handleSubmit: MouseEventHandler<Element>;
}

export interface WelcomeGreetingsProps {
  index: number;
  setIndex: (index: number) => void;
  greeting: string;
  setGreeting: (greeting: string) => void;
}
