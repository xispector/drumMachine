$(document).ready(function () {});
const stat = (con) => {
  $("#display").html(con);
}

$("#Heater-1, #Heater-2, #Heater-3, #Heater-4_1, #Heater-6, #Dsc_Oh, #Cev_H2, #Kick_n_Hat, #RP4_KICK_1").on("click", function (event) {
  $(`#${event.target.innerText}`)[0].play();
  stat(event.target.id);
})
$("html").keydown(function (event) {
  $(`#${event.key.toUpperCase()}`)[0].play();
  stat($(`#${event.key.toUpperCase()}`).parent().attr("id"));
})