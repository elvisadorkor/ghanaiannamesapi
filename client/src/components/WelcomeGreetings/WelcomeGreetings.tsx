import "./WelcomeGreetings.css";

import { welcomeInLanguages } from "../../assets/data";
import { setRandomIndex } from "../../services/helper";
import { WelcomeGreetingsProps } from "../../types";

const WelcomeGreetings = (props: WelcomeGreetingsProps) => {
  //Continuously change greeting on homepage
  setTimeout(() => {
    let randomArrayIndex = setRandomIndex(
      welcomeInLanguages.length,
      props.index
    );
    props.setIndex(randomArrayIndex);
    props.setGreeting(welcomeInLanguages[props.index]);
  }, 5000);

  return <div className="greeting">{props.greeting}</div>;
};

export default WelcomeGreetings;
