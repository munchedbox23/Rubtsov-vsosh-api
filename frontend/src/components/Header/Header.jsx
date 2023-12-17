import React from "react";
import classes from './Header.module.css';
import Image from './Image'
const Header = () => {
  return (
    <header className={classes.Header}>
        <div className={classes.HeaderPhysics}>Физика</div>
        <Image src='./header_02.png'/>
    </header>
  )
}

export default Header;
