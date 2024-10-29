const display=document.getElementById('display');
function appendtoDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value="";
}
function calculateA(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    

}