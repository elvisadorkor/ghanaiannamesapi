import { useState } from "react";
import "./WelcomeGreetings.css";

const welcomeInLanguages = [
  "Akwaaba!",
  "Barka da zuwa!",
  "Miifala bo!",
  "Woezo!",
];

const WelcomeGreetings = () => {
  const [index, setIndex] = useState<number>(0);
  const [greeting, setGreeting] = useState<string>("Welcome!");

  //Set random numbers for the wlecome greetings array
  function setRandomIndex(max: number) {
    let randomIndex = Math.floor(Math.random() * max);
    if (randomIndex === index) {
      setRandomIndex(max);
    }
    return randomIndex;
  }

  //Continuously change greeting on homepage
  setTimeout(() => {
    let randomArrayIndex = setRandomIndex(welcomeInLanguages.length);
    setIndex(randomArrayIndex);
    setGreeting(welcomeInLanguages[index]);
  }, 5000);

  return <div className="greeting">{greeting}</div>;
};

export default WelcomeGreetings;
