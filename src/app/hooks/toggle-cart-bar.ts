const toggleCartBar = () => {
    const Bar = document.getElementById("cartBar");
    if(Bar){
        Bar.classList.toggle("showCartBar")
        Bar.classList.toggle("hideCartBar")
    }
}
export default toggleCartBar;