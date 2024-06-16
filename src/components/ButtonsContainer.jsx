import styles from "./Button.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((item) => (
          <button
            key={item}
            className={styles.button}
            onClick={() => onButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
