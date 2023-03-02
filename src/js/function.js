export const handleWrapperOver = ({ target }) => {
    const color =
      "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
  
    if (target.classList.contains("color-wrapper")) {
      target.style.backgroundColor = color;
    }
  };
  
  export const handleWrapperOut = ({ target }) => {
    const color = "#fff";
  
    if (target.classList.contains("color-wrapper")) {
      target.style.backgroundColor = color;
    }
  };
