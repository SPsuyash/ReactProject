import Button from "../Button/Button";
import styles from "./MainBox.module.css";

const MainBox = () => {
  return (
    <div className={`${styles.dicebox}` }>
      <div className="img">
        <img src="images/dice.png" alt="dice" />
        </div>
        <div className={`${styles.gameon}` }>
      <h1 className={`${styles.heading}` }>DICE GAME</h1>
        <Button text="PLAY NOW" />
        </div>
      
    </div>
  )
}

export default MainBox;