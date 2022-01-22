import React from "react";
// import { InformativeScreens } from "../components/InformativeScreens.jsx";

import Logo from '../components/Logo';
import Button from '../components/Button';

const Start = () => {
  return (
    <>
      {/* <InformativeScreens /> */}
      <Logo />
      <Button text='Empezar' route='login'/>
    </>
  );
};

export default Start;
