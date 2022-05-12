

  $(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide(); 
});
//Функция отображения PopUp
const buttenTest = document.querySelector('.b-container');
const buttenTest2 = document.querySelector('.End');
const buttenTest3 = document.querySelector('.b-popup');
const buttenTest4 = document.querySelector('.popup_button_back_index');
const buttenTest5 = document.querySelector('.End2');
const buttenTest6 = document.querySelector('.b-popup2');


//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
    $("#popup2").hide();
}

function ShowCkick() {
    $("#popup1").show();
}
function ShowCkick1() {
    $("#popup2").show();
}

function DarkClose(event) {                         // скрывает при нажатии на темную область
    if(!event.target.closest('.b-popup-content')){
        $("#popup1").hide();
        $("#popup2").hide();
    }
}
function ButtonClose() { 
    $("#popup2").hide();    // скрывает при нажатии на кнопку
    $("#popup1").hide();
    
}

buttenTest.addEventListener("click",ShowCkick);
buttenTest2.addEventListener("click",ButtonClose);
buttenTest3.addEventListener("click",DarkClose);
buttenTest4.addEventListener("click",ShowCkick1);
buttenTest5.addEventListener("click",ButtonClose);
buttenTest6.addEventListener("click",DarkClose);






