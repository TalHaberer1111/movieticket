function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

var ageCheck = function(age) {
  if (age <= 12) {
    return "youth"
  } else if (age > 12 && age <= 18) {
    return "student"
  } else if (age <= 55) {
    return "adult"
  } else {
    return "senior"
  }
};

var timeCheck = function(time) {
  if (time <= "16") {
    return "matinee"
  } else {
    return "regularPriced"
  }
};

var priceEvaluation = function(age, time) {
  if (age === "youth") {
    if (time === "matinee") {
      return "6.00"
    } else {
      return "8.00"
    }
  } else if (age === "student") {
    if (time === "matinee") {
      return "6.50"
    } else {
      return "8.50"
    }
  } else if (age === "adult") {
    if (time === "matinee") {
      return "7.50"
    } else {
      return "9.50"
    }
  } else if (age === "senior") {
    if (time === "matinee") {
      return "5.50"
    } else {
      return "7.50"
    }
  }
};

$(document).ready(function() {
  $("button#submit").click(function(event) {

    event.preventDefault();
    var movieInput = $("#movieOptions").val();
    var timeInput = $("select#movieTimes").val();
    var ageInput = $("#ageInput").val();

    var ageEval = ageCheck(ageInput);
    var timeResult = timeCheck(timeInput);
    var priceResult = priceEvaluation(ageEval, timeResult);

    if (movieInput === "The Revenant") {
      $("#ticketPrice").append("<span>Your ticket will be " + priceResult + "! This is a confirmation that you have selected THE REVENANT at " + timeInput + ":00.</span><br><iframe width='560' height='315' src='https://www.youtube.com/embed/LoebZZ8K5N0' frameborder='0' allowfullscreen></iframe>");

    } else if (movieInput === "The Boy") {
      $("#ticketPrice").append("<span>Your ticket will be " + priceResult + "! This is a confirmation that you have selected THE BOY at " + timeInput + ":00.</span><br><iframe width='560' height='315' src='https://www.youtube.com/embed/XGbB9UQ6r1g' frameborder='0' allowfullscreen></iframe>");

    } else if (movieInput === "Kung Fu Panda 3") {
      $("#ticketPrice").append("<span>Your ticket will be " + priceResult + "! This is a confirmation that you have selected KUNG FU PANDA 3 at " + timeInput + ":00.</span><br><iframe width='560' height='315' src='https://www.youtube.com/embed/fGPPfZIvtCw' frameborder='0' allowfullscreen></iframe>");

    } else {
      $("#ticketPrice").append("<span>Your ticket will be " + priceResult + "! This is a confirmation that you have selected STAR WARS: THE FORCE AWAKENS at " + timeInput + ":00.</span><br><iframe width='560' height='315' src='https://www.youtube.com/embed/sGbxmsDFVnE' frameborder='0' allowfullscreen></iframe>");
    }


  });
});
