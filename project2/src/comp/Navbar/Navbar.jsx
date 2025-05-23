import styles from "./navbar.module.css";

const Navbar = () => {
  console.log(styles);

  return <nav className={`${styles.navigation} container `} >
    <div className="logo">
      <img src="/images/contact.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
   
  </nav>
}

export default Navbar