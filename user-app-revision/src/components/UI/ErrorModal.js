import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <span>{props.message}</span>
        </div>
        <footer className={classes.actions}>
          <Button>
            <span className={classes.buttonText}>Got it!</span>
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
