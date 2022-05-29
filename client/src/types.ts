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

// type Name = {
//   day: string;
//   names: string[];
// };

export type Tribe = {
  id: number;
  name: string;
  region: string;
  maleNames: Object;
  femaleNames: Object;
};

export interface NamesTableProps {
  tribes: Tribe[] | undefined;
}
