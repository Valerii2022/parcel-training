import {handleWrapperOver, handleWrapperOut} from "./js/function";
// import {refs} from "./js/refs";
import {wrapperRef} from "./js/refs";

// refs.wrapperRef.addEventListener("mouseover", handleWrapperOver);
// refs.wrapperRef.addEventListener("mouseout", handleWrapperOut);

wrapperRef.addEventListener("mouseover", handleWrapperOver);
wrapperRef.addEventListener("mouseout", handleWrapperOut);
