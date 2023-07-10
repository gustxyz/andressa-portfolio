//write interface for get color

const getColor = (color: any) => {
  console.log("in get color,", color);
  if (color === "yellow") return "bg-[color:var(--yellow)]";
  else if (color === "offwhite") return "bg-[color:var(--offwhite)]";
  else if (color === "white") return "bg-white";

  console.log("did we hit null");
  return null;
};

export default getColor;
