import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <hr className={classes.hr_line} />
      <p>
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/daria-nahorna-4a39511b0/"
          target="_blank"
        >
          Daria Nahorna
        </a>{" "}
        -{" "}
        <a
          href="https://github.com/Darnahorna/rick-and-morty-app"
          target="_blank"
        >
          source code
        </a>
      </p>
      <span>darnahorna@gmail.com</span>
    </footer>
  );
};
