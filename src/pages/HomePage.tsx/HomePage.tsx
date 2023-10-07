import Carousel from "../../components/Carousel/Carousel";

import classes from "./HomePaage.module.css";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes.title}>
        👽 WELCOME TO THE RICK AND MORTY APP 👽{" "}
      </h1>
      <p className={classes.description}>
        Rick and Morty is an American adult animated science fiction sitcom
        created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime
        programming block Adult Swim.
      </p>
      <Carousel />
    </div>
  );
};

export default HomePage;
