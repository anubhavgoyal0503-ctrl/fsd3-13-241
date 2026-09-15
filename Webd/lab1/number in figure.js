const ToWord = (num) => {
  switch (num) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid";
  }
};
const toWords2 =(digit)=>{
    const words=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    return words[digit];
}
const rollNum="25032010000190";
const digits=String(rollNum).split("");
console.log(digits);
let inWords="";
digits.forEach((d) => {
    inWords +=" " +toWords2(Number(d));
});
console.log(inWords);
    