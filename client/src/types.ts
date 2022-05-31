// import { MouseEventHandler } from "react";

export interface WelcomeGreetingsProps {
  index: number;
  setIndex: (index: number) => void;
  greeting: string;
  setGreeting: (greeting: string) => void;
}

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
