let numberArray = [];
function mrRoboger(element) {
  for (let i=0; i <= element; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      numberArray.push("Won't you be my neighbor?");
    } else if (element.includes(2)) {
      numberArray.push("Boop!");
    } else if (element.includes(1)) {
      numberArray.push("Beep!");
    } else {
      numberArray.push(element);
    }
  }
  return numberArray;
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault(); 
    const number = $("input#number").val();
    const story = mrRoboger(number);
    $("#output").html(story);
  });
});
