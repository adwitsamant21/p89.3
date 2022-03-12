function send(){
    Number1 = document.getElementById("number1").value
    Number2 = document.getElementById("number2").value
actual_answer = parsInt(Number1) * parsInt(Number1)

    question_turn = "<h4>" + Number1 + "x" + Number2 + "</h4>";
    input_box = "<br>answer :<input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}
