import loader from "../../../assets/loader.svg";
import classes from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={loader} alt="spinner loader" />
    </div>
  );
};

export default Preloader;
