import React, { useState , useEffect} from 'react'
import { createContext } from 'react'
import car1 from '../Images2/car1.jpeg';
import car2 from '../Images2/car2.jpeg';
import car3 from '../Images2/car3.jpeg';
import car4 from '../Images2/car4.jpeg';
import car5 from '../Images2/car5.jpeg';
import car6 from '../Images2/car6.jpeg';
import car7 from '../Images2/car7.jpeg';
import car11 from "../Images2/car11.jpg";
import car12 from "../Images2/car12.jpg";
import car13 from "../Images2/car15.png";
import car14 from "../Images2/car14.jpg";
import car15 from "../Images2/car15.png";
import car16 from "../Images2/car16.jpg";
import car17 from "../Images2/car17.jpg";
import car18 from "../Images2/car18.jpg";
import car19 from "../Images2/car19.jpg";
import car20 from "../Images2/car20.jpg";
import car21 from "../Images2/car21.jpg";
import car22 from "../Images2/car22.jpg";

import car23 from "../Images2/car23.jpeg";
import car24 from "../Images2/car24.jpeg";
import car25 from "../Images2/car25.jpeg";
import car26 from "../Images2/car26.jpeg";
import car27 from "../Images2/car27.jpeg";
import car28 from "../Images2/car28.jpeg";
import car29 from "../Images2/car29.jpeg";
import car30 from "../Images2/car30.jpeg";
import car31 from "../Images2/car31.jpeg";
import car32 from "../Images2/car32.jpeg";
import car33 from "../Images2/car33.jpeg";
// import car34 from "../Images/car34.jpeg";
import car35 from "../Images2/car35.jpeg";
import car12b from '../Images2/car12bc.png'

import car2d from '../Images2/car2d.jpeg'
import car3d from '../Images2/car3d.jpeg'
import car4d from '../Images2/car4d.jpeg'
import car5d from "../Images2/car5d.jpeg"
import car6d from "../Images2/car6d.jpeg"
import car7d from "../Images2/car7d.jpeg"
import car11d from "../Images2/car11d.jpg"
import car12d from "../Images2/car12d.png"
import car14d from "../Images2/car14d.jpg"
import car15d from "../Images2/car15d.png"
import car16d from "../Images2/car16d.jpg";
import car17d from "../Images2/car17d.jpg";
import car18d from "../Images2/car18d.jpg";
import car19d from "../Images2/car19d.jpg";
import car20d from "../Images2/car20d.jpg";
import car21d from "../Images2/car21d.jpg";
import car22d from "../Images2/car22d.jpg";
import car23d from "../Images2/car23d.jpeg";
import car24d from "../Images2/car24d.jpeg";
import car25d from "../Images2/car25d.jpeg";
import car26d from "../Images2/car26d.jpeg";
import car27d from "../Images2/car27d.jpeg";
import car28d from "../Images2/car28d.jpeg";
import car29d from "../Images2/car29d.jpeg";
import car30d from "../Images2/car30d.jpeg";
import car31d from "../Images2/car31d.jpeg";
import car32d from "../Images2/car32d.jpeg";
import car33d from "../Images2/car33d.jpeg";

import car35d from "../Images2/car35d.jpeg";


import carnow1 from "../Images2/carnow (1).jpeg";
import carnow2 from "../Images2/carnow (2).jpeg";
import carnow3 from "../Images2/carnow (3).jpeg";
import carnow4 from "../Images2/carnowedited1.png";
import carnow5 from "../Images2/carnow (5).jpeg";
import carnow6 from "../Images2/carnow (6).jpeg";
import carnow7 from "../Images2/carnow (7).jpeg";
import carnow8 from "../Images2/carnow (8).jpeg";
import carnow9 from "../Images2/carnow (9).jpeg";
import carnow10 from "../Images2/carnow (10).jpeg";
import carnow11 from "../Images2/carnow (11).jpeg";
import carnow12 from "../Images2/carnow (12).jpeg";
import carnow13 from "../Images2/carnow (13).jpeg";
import carnow14 from "../Images2/carnow (14).jpeg";
import carnow15 from "../Images2/carnow (15).jpeg";
import carnow16 from "../Images2/carnow (16).jpeg";
import carnow17 from "../Images2/carnow (17).jpeg";
import carnow18 from "../Images2/carnowedited2.png";
import carnow19 from "../Images2/carnow (19).jpeg";
import carnow20 from "../Images2/carnowedited3.png";
import carnow21 from "../Images2/carnow (21).jpeg";
import carnow22 from "../Images2/carnow (22).jpeg";
import carnow23 from "../Images2/carnow (23).jpeg";
import carnow24 from "../Images2/carnow (24).jpeg";
import carnow25 from "../Images2/carnow (25).jpeg";
import carnow26 from "../Images2/carnow (26).jpeg";
import carnow27 from "../Images2/carnowedited4.png";
import carnow28 from "../Images2/carnow (28).jpeg";
import carnow29 from "../Images2/carnow (29).jpeg";
import carnow30 from "../Images2/carnow (30).jpeg";
import carnow31 from "../Images2/carnow (31).jpeg";
import carnow32 from "../Images2/carnowedit5.png";
import carnow33 from "../Images2/carnow (33).jpeg";
import carnow34 from "../Images2/carnow (34).jpeg";
import carnow35 from "../Images2/carnow (35).jpeg";
import carnow36 from "../Images2/carnow (36).jpeg";
import carnow37 from "../Images2/carnow (37).jpeg";
import carnow38 from "../Images2/carnow (38).jpeg";
import carnow39 from "../Images2/carnow (39).jpeg";
import carnow40 from "../Images2/carnow (40).jpeg";
import carnow41 from "../Images2/carnow (41).jpeg";
import carnow42 from "../Images2/carnow (42).jpeg";
import carnow43 from "../Images2/carnowedit6.png";

import car2now8 from "../Images2/carnow2 (8).jpg";
import car2now9 from "../Images2/carnow2 (9).jpg";
import car2now10 from "../Images2/carnow2 (10).jpg";
import car2now11 from "../Images2/carnow2 (11).jpg";
import car2now12 from "../Images2/carnow2 (12).jpg";
import car2now13 from "../Images2/carnow2 (13).jpg";
import car2now14 from "../Images2/carnow2 (14).jpg";
import car2now15 from "../Images2/carnow2 (15).jpg";
import car2now16 from "../Images2/carnow2 (16).jpg";
import car2now17 from "../Images2/carnow2 (17).jpg";
import car2now18 from "../Images2/carnow2 (18).jpg";
import car2now19 from "../Images2/carnow2 (19).jpg";
import car2now20 from "../Images2/carnow2 (20).jpg";
import car2now21 from "../Images2/carnow2 (21).jpg";
import car2now22 from "../Images2/carnow2 (22).jpg";
import car2now23 from "../Images2/carnow2 (23).jpg";
import car2now24 from "../Images2/carnow2 (24).jpg";
import car2now25 from "../Images2/carnow2 (25).jpg";
import car2now26 from "../Images2/carnow2 (26).jpg";
import car2now27 from "../Images2/carnow2 (27).jpg";
import car2now28 from "../Images2/carnow2 (28).jpg";
import car2now29 from "../Images2/carnow2 (29).jpg";
import car2now30 from "../Images2/carnow2 (30).jpg";
import car2now31 from "../Images2/carnow2 (31).jpg";
import car2now32 from "../Images2/carnow2 (32).jpg";
import car2now33 from "../Images2/carnow2 (33).jpg";
import car2now34 from "../Images2/carnow2 (34).jpg";
import car2now35 from "../Images2/carnow2 (35).jpg";
import car2now36 from "../Images2/carnow2 (36).jpg";
import car2now37 from "../Images2/carnow2 (37).jpg";
import car2now38 from "../Images2/carnow2 (38).jpg";
import car2now39 from "../Images2/carnow2 (39).jpg";
import car2now40 from "../Images2/carnow2 (40).jpg";
import car2now41 from "../Images2/carnow2 (41).jpg";
import car2now42 from "../Images2/carnow2 (42).jpg";
import car2now43 from "../Images2/carnow2 (43).jpg";


import car2now44 from "../Images3/carnow2 (1).jpg";
import car2now45 from "../Images3/carnow2 (1).jpeg";
import car2now46 from "../Images3/carnow2 (4).jpg";
import car2now47 from "../Images3/carnow2 (6).jpg";
import car2now48 from "../Images3/carnow2 (6).jpeg";
import car2now49 from "../Images3/carnow2 (7).jpeg";
import car2now50 from "../Images3/carnow2 (7).jpg";

import car2now51 from "../Images3/carnow2 (2).jpg";
import car2now52 from "../Images3/carnow2 (2).jpeg";
import car2now53 from "../Images3/carnow2 (4).jpeg";
import car2now54 from "../Images3/carnow2 (2).jpg";
import car2now55 from "../Images3/carnow2 (2).jpeg";
import car2now56 from "../Images3/carnow2 (5).jpeg";
import car2now57 from "../Images3/carnow2 (5).jpeg";





export const Context = createContext();

const ContextProvider = ({children}) => {



    const [theme,setTheme]=useState(true)
    const [loading, setLoading] = useState(true);

//     const cars = [
//       // { id: 1, name: 'Car Model 1', image: car1 },
//       { id: 2, name: 'SHINE', image: car2 },
//       // { id: 3, name: 'Car Model 3', image: car3 },
//       // { id: 4, name: 'Car Model 4', image: car4 },
//       // { id: 5, name: 'Car Model 5', image: car5 },
//       // { id: 6, name: 'Car Model 6', image: car6 },
//       // { id: 7, name: 'Car Model 7', image: car7 },
     
//       // { id: 9, name: 'SUV COLLECTION A', image: car12b },
//       // { id: 10, name: 'SUV COLLECTION B', image: car13 },
   
//       { id: 12, name: 'MAGE', image: car15 },
     
//       { id: 14, name: 'SUV', image: car17 },

     
//       { id: 18, name: 'RICH 6', image: car21 },
//       { id: 15, name: 'PROTAGONIST  ', image: car18 },
//       // { id: 19, name: 'Car Model 19', image: car22 },
//       { id: 8, name: 'TRUCK COLLECTION', image: car11 },
//       { id: 11, name: 'VR DUMPER', image: car14 },
//       { id: 13, name: 'KL TRACTOR', image: car16 },
 
//       { id: 16, name: 'SPECIAL TRUCK', image: car19 },
//       { id: 17, name: 'KX TRACTOR', image: car20 },


//       { id: 23, name: '', image: car23 },
// { id: 24, name: '', image: car24 },
// { id: 25, name: '', image: car25 },
// { id: 26, name: '', image: car26 },
// { id: 27, name: '', image: car27 },
// { id: 28, name: '', image: car28 },
// { id: 29, name: '', image: car29 },
// { id: 30, name: '', image: car30 },
// { id: 31, name: '', image: car31 },
// { id: 32, name: '', image: car32 },
// { id: 33, name: '', image: car33 },
// { id: 35, name: '', image: car35 },

//     ];




const cars = [
  { id: 23, name: '', image: car2d },
  
  { id: 27, name: '', image: car6d },
  { id: 28, name: '', image: car7d },

  { id: 32, name: '', image: car11d },
  { id: 33, name: '', image: car12d },

  { id: 35, name: '', image: car14d },
  { id: 36, name: '', image: car15d },
  { id: 37, name: '', image: car16d },
  { id: 38, name: '', image: car17d },
  { id: 39, name: '', image: car18d },
  { id: 40, name: '', image: car19d },
  { id: 41, name: '', image: car20d },
  { id: 42, name: '', image: car21d },
  { id: 43, name: '', image: car22d },
  { id: 44, name: '', image: car23d },
  { id: 45, name: '', image: car24d },
  { id: 46, name: '', image: car25d },
  { id: 47, name: '', image: car26d },
  { id: 48, name: '', image: car27d },
  { id: 49, name: '', image: car28d },
  { id: 50, name: '', image: car29d },
  { id: 51, name: '', image: car30d },
  { id: 52, name: '', image: car31d },
  { id: 53, name: '', image: car32 },
  { id: 54, name: '', image: car33d },

  { id: 56, name: '', image: car35d },
  { id: 100, name: '', image: car2now8 },
  { id: 103, name: '', image: car2now11 },
{ id: 104, name: '', image: car2now12 },
{ id: 106, name: '', image: car2now14 },
{ id: 107, name: '', image: car2now15 },
{ id: 108, name: '', image: car2now16 },
{ id: 109, name: '', image: car2now17 },
{ id: 110, name: '', image: car2now18 },
{ id: 111, name: '', image: car2now19 },
{ id: 112, name: '', image: car2now20 },
{ id: 113, name: '', image: car2now21 },
{ id: 114, name: '', image: car2now22 },
{ id: 115, name: '', image: car2now23 },
{ id: 116, name: '', image: car2now24 },
{ id: 117, name: '', image: car2now25 },
{ id: 118, name: '', image: car2now26 },
{ id: 119, name: '', image: car2now27 },
{ id: 122, name: '', image: car2now30 },
{ id: 123, name: '', image: car2now31 },
{ id: 130, name: '', image: car2now38 },
{ id: 133, name: '', image: car2now41 },
{ id: 134, name: '', image: car2now42 },
{ id: 135, name: '', image: car2now43 },


{ id: 143, name: '', image: car2now51 },
{ id: 144, name: '', image: car2now52 },
{ id: 145, name: '', image: car2now53 },
{ id: 146, name: '', image: car2now54 },
{ id: 147, name: '', image: car2now55 },
{ id: 148, name: '', image: car2now56 },
{ id: 149, name: '', image: car2now57 }
];

const cars2 = [

  { id: 57, name: '', image: carnow1 },
{ id: 58, name: '', image: carnow2 },
{ id: 59, name: '', image: carnow3 },
{ id: 60, name: '', image: carnow4 },
{ id: 61, name: '', image: carnow5 },
{ id: 62, name: '', image: carnow6 },
{ id: 63, name: '', image: carnow7 },
{ id: 64, name: '', image: carnow8 },
{ id: 65, name: '', image: carnow9 },
{ id: 66, name: '', image: carnow10 },
{ id: 67, name: '', image: carnow11 },
{ id: 68, name: '', image: carnow12 },
{ id: 69, name: '', image: carnow13 },
{ id: 70, name: '', image: carnow14 },
{ id: 71, name: '', image: carnow15 },
{ id: 72, name: '', image: carnow16 },
{ id: 73, name: '', image: carnow17 },
{ id: 74, name: '', image: carnow18 },
{ id: 75, name: '', image: carnow19 },
{ id: 76, name: '', image: carnow20 },
{ id: 77, name: '', image: carnow21 },
{ id: 78, name: '', image: carnow22 },
{ id: 79, name: '', image: carnow23 },
{ id: 80, name: '', image: carnow24 },
{ id: 81, name: '', image: carnow25 },
{ id: 82, name: '', image: carnow26 },
{ id: 83, name: '', image: carnow27 },
{ id: 84, name: '', image: carnow28 },
{ id: 85, name: '', image: carnow29 },
{ id: 86, name: '', image: carnow30 },
{ id: 87, name: '', image: carnow31 },
{ id: 88, name: '', image: carnow32 },
{ id: 89, name: '', image: carnow33 },

{ id: 91, name: '', image: carnow35 },
{ id: 92, name: '', image: carnow36 },
{ id: 93, name: '', image: carnow37 },
{ id: 94, name: '', image: carnow38 },
{ id: 95, name: '', image: carnow39 },
{ id: 96, name: '', image: carnow40 },
{ id: 97, name: '', image: carnow41 },
{ id: 98, name: '', image: carnow42 },
{ id: 99, name: '', image: carnow43 },


{ id: 101, name: '', image: car2now9 },
{ id: 102, name: '', image: car2now10 },

{ id: 105, name: '', image: car2now13 },

{ id: 120, name: '', image: car2now28 },
{ id: 121, name: '', image: car2now29 },

{ id: 124, name: '', image: car2now32 },
{ id: 125, name: '', image: car2now33 },
{ id: 126, name: '', image: car2now34 },
{ id: 127, name: '', image: car2now35 },
{ id: 128, name: '', image: car2now36 },
{ id: 129, name: '', image: car2now37 },

{ id: 131, name: '', image: car2now39 },
{ id: 132, name: '', image: car2now40 },


{ id: 136, name: '', image: car2now44 },
{ id: 137, name: '', image: car2now45 },
{ id: 138, name: '', image: car2now46 },
{ id: 139, name: '', image: car2now47 },
{ id: 140, name: '', image: car2now48 },
{ id: 141, name: '', image: car2now49 },
{ id: 142, name: '', image: car2now50 },




]


const [location2,setLocation2]=useState(false)
    

   
    
  return (
    <Context.Provider value={{theme,setTheme,loading,setLoading,cars,cars2,location2,setLocation2}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider





// tawk.to chat account
// url: https://dashboard.tawk.to/login
// pw: #Fac123fac
// email: info@facafrica.com