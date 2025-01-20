import React, { useState , useEffect} from 'react'
import { createContext } from 'react'
import car1 from '../Images/car1.jpeg';
import car2 from '../Images/car2.jpeg';
import car3 from '../Images/car3.jpeg';
import car4 from '../Images/car4.jpeg';
import car5 from '../Images/car5.jpeg';
import car6 from '../Images/car6.jpeg';
import car7 from '../Images/car7.jpeg';
import car11 from "../Images/car11.jpg";
import car12 from "../Images/car12.jpg";
import car13 from "../Images/car13.jpg";
import car14 from "../Images/car14.jpg";
import car15 from "../Images/car15.png";
import car16 from "../Images/car16.jpg";
import car17 from "../Images/car17.jpg";
import car18 from "../Images/car18.jpg";
import car19 from "../Images/car19.jpg";
import car20 from "../Images/car20.jpg";
import car21 from "../Images/car21.jpg";
import car22 from "../Images/car22.jpg";



export const Context = createContext();

const ContextProvider = ({children}) => {



    const [theme,setTheme]=useState(true)
    const [loading, setLoading] = useState(true);

    const cars = [
      // { id: 1, name: 'Car Model 1', image: car1 },
      { id: 2, name: 'SHINE', image: car2 },
      // { id: 3, name: 'Car Model 3', image: car3 },
      // { id: 4, name: 'Car Model 4', image: car4 },
      // { id: 5, name: 'Car Model 5', image: car5 },
      // { id: 6, name: 'Car Model 6', image: car6 },
      // { id: 7, name: 'Car Model 7', image: car7 },
     
      { id: 9, name: 'SUV COLLECTION A', image: car12 },
      { id: 10, name: 'SUV COLLECTION B', image: car13 },
   
      { id: 12, name: 'MAGE', image: car15 },
     
      { id: 14, name: 'SUV', image: car17 },

     
      { id: 18, name: 'RICH 6', image: car21 },
      { id: 15, name: 'PROTAGONIST  ', image: car18 },
      // { id: 19, name: 'Car Model 19', image: car22 },
      { id: 8, name: 'TRUCK COLLECTION', image: car11 },
      { id: 11, name: 'VR DUMPER', image: car14 },
      { id: 13, name: 'KL TRACTOR', image: car16 },
      
      { id: 16, name: 'SPECIAL TRUCK', image: car19 },
      { id: 17, name: 'KX TRACTOR', image: car20 },
    ];
    

   
    
  return (
    <Context.Provider value={{theme,setTheme,loading,setLoading,cars}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
