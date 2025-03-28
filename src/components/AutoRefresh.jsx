// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setRefreshed } from "../Features/Slice"; // Action for managing refresh state

// const AutoRefresh = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const hasRefreshed = useSelector((state) => state.hasRefreshed);
//   console.log(hasRefreshed)

// //   useEffect(() => {
// //     if (hasRefreshed===false) {
// //       // Refresh the page once on initial mount
// //       window.location.reload();
// //       dispatch(setRefreshed(true)); // Set the refresh state to true
// //       reset();
// //     } else {
// //       // Ensure the page refreshes once for every navigation
// //     //   dispatch(setRefreshed(false));
// //     }
// //   }, [location.pathname]);


// useEffect(()=>{
//     const id = setTimeout(()=>{
//         dispatch(setRefreshed(true))
//     },1000)

//     const id2 = setTimeout(()=>{
//         dispatch(setRefreshed(false))

//     },2000)

//     return()=>{clearInterval(id);clearInterval(id2)}
    
// },[location])

// useEffect(()=>{
//     if(hasRefreshed===true){
//         window.location.reload()
    
//     }
// },[hasRefreshed])

// // const refresh=()=>{

// // }

// //   const reset = ()=>{
// //     dispatch(setRefreshed(false));
// //   }

//   return null;
// //   (
// //     <div style={{marginTop:"200px"}}>
// //             <button onClick={()=>dispatch(setRefreshed(!hasRefreshed))}>test</button>
// //     </div>
// //   )
// };

// export default AutoRefresh;








import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRefreshed } from "../Features/Slice"; // Action for managing refresh state

const AutoRefresh = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const hasRefreshed = useSelector((state) => state.hasRefreshed);

  // Handle refresh state on location change
  useEffect(() => {
    if (hasRefreshed===false) {
      // Trigger refresh logic
      dispatch(setRefreshed(true)); // Set the refreshed state to true
    }

    // Reset the refreshed state after some delay
    const resetTimeout = setTimeout(() => {
      dispatch(setRefreshed(false));
    }, 1000);

    return () => clearTimeout(resetTimeout);
  }, [location.pathname]);

  // Trigger a page reload when `hasRefreshed` is true
  useEffect(() => {
    if (hasRefreshed===true) {
      window.location.reload();
    }
  }, [hasRefreshed]);

  return null; // This component doesn't render anything
};

export default AutoRefresh;



// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setRefreshed } from "../Features/Slice"; // Action for managing refresh state
// import Swal from 'sweetalert2'

// const AutoRefresh = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const hasRefreshed = useSelector((state) => state.hasRefreshed);

//   useEffect(() => {
//     const hasReloaded = sessionStorage.getItem("hasRefreshed");
//     Swal.fire({text:"refreshing"})

//     if (!hasReloaded) {
//       sessionStorage.setItem("hasRefreshed", "true"); // Mark that we've refreshed
//       dispatch(setRefreshed(true)); // Set state
//       window.location.reload(); // Refresh the page
//       Swal.fire({text:"refreshed"})
//     }
//   }, [location]);

//   return null; // This component doesn't render anything
// };

// export default AutoRefresh;


