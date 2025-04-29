import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { IoCall } from "react-icons/io5";
import { MdDisplaySettings, MdMessage } from "react-icons/md";
import { MdMail } from "react-icons/md";
import {useActionState, useState} from "react";
const ContactFrom = () => {

  const [name,setName]=useState("suyash");

  // let name="suyash";
  let email="suyashpatelsp.com";
  let text="hello guys";


  const onSubmit=(event)=>{
    event.preventDefault();
    console.log(event);  
     ///for output of the data
     

     // usestate are used to rerender the text becouse they were not randering directly



    //  setName(event.target[0].value);

    // name=event.Target[0].value;
    // email=event.Target[2].value;
    // text=event.Target[3].value;



    // alert("Congratulations! Your data has been Recorded")
    // console.log("name:",event.target[0]);
    // console.log("Email:",event.target[1]);
    // console.log("text:",event.target[2]);

  };




  return (
    <section className={styles.container}>
      <div className={styles.ContactForm}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}></Button>
        <Button
        text="VIA CALL" icon={<IoCall fontSize="24px"/>}></Button>
        </div>
        <Button isOutline={true}
        text="VIA EMAIL FORM" icon={<MdMail fontSize="24px"/>}></Button>

        <form  >
          <div className={styles.form_control}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Email">Email</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="7"/>
          </div>
          <div style={{display:'flex',
          justifyContent:'end'
          }}><Button  onClick={onSubmit} 
        text="SUBMIT BUTTON"></Button></div>
        <div >{
          name+" "+email+" "+text}</div>

        </form>
      </div>
      <div className={styles.ContactImage}>
        <img src="./images/nav.svg" alt="photo"></img>
      </div>
    </section>
  )
}

export default ContactFrom