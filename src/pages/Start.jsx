import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Logo from '../components/Logo';
import img1 from '../assets/images/cardStart.png';
import img2 from '../assets/images/transac.png';
import InformativeScreens from '../components/InformativeScreens';

const initialState = [
  {
    id: 1,
    title: 'Accede fácil',
    content: 'Ingresa en cuestión de segundos a nuestra plataforma online y descubre todos los beneficios',
    img: img1
  },
  {
    id: 2,
    title: 'Transfiere',
    content: 'Realiza operaciones en cuestión de minutos desde la comodidad de donde estes y con total seguridad',
    img: img2
  }
];

const Start = () => {
  return (
    <Carousel>
      {
        initialState.map(elem=><div><InformativeScreens key={elem.id} info={elem}/></div>)
      }
      <div>
        <Logo/>
      </div>
    </Carousel>
  );
};

export default Start;
