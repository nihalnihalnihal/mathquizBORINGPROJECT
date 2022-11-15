function addUser(){
    player_1_name = document.getElementById("Player_1_name_input").value;
    player_2_name = document.getElementById("Player_2_name_input").value;

    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);

    window.location = "game_page.html";
}

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    da_boring_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = ""
}