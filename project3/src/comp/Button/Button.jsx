import styles from './Button.module.css';
// import { MdMessage } from "react-icons/md";

const Button = ({isOutline,icon,text,...rest}) => {
  // const {isOutline,icon,text}=props;
  return (
  <div>
    <button {...rest} className={isOutline?styles.outline:styles.buttons}>
    {icon}{text}</button>


    {/* <button className={props.isOutline?styles.outline:styles.buttons}>
    {props.icon}{props.text}</button> */}
    {/* <button className={styles.buttons}>
    <IoCall fontSize="24px"></IoCall>VIA CALL</button> */}
  </div>

  )
}

export default Button;