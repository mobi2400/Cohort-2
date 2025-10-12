import { useEffect } from "react";
export default function Mycomponent() {
   useEffect(() => {
    console.error("Component mounted");
   return () => {
    console.log("Component unmounted"); 
   };
}, []);
    return <div>Check the console for messages when this component mounts and unmounts.</div>;
}