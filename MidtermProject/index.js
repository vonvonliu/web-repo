const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const quotes = ["Keep your face always toward the sunshine - and shadows will fall behind you.",
                "Don't judge each day by the harvest you reap but by the seeds that you plant.",
                "Perfection is not attainable, but if we chase perfection we can catch excellence.",
                "Happiness is a direction, not a place.",
                "Do good and good will come to you.",
                "A positive mindset brings positive things.",
                "If life were predictable it would cease to be life, and be without flavor."];
const menu = [["Leg Day!","Free style meditation","Declutter","Call home"],
            ["Cardio Day!","Paint or color in a coloring book","Call a friend","Watch an episode of a trending show"],
            ["Push Day!","Guided meditation","Go on a bike ride to class","Enjoy some rum raisin"],
            ["Yoga","Nap","Study outside on the grass", "Make my favorite tea","At-home spa"],
            ["Pull Day!","Girls' night (nails?)","Online shopping","Hit the bars"],
            ["Rest/Stretch Day","Long bath with wine and candle","Grab boba!","Chill with friends"],
            ["Reflection and chamomile","Meal prep (get cooking!)","Turn on diffuser and read","Afternoon walk"]];
document.getElementById("mon").addEventListener("click", function(){ClickedChoice("mon")});
document.getElementById("tue").addEventListener("click", function(){ClickedChoice("tue")});
document.getElementById("wed").addEventListener("click", function(){ClickedChoice("wed")});
document.getElementById("thu").addEventListener("click", function(){ClickedChoice("thu")});
document.getElementById("fri").addEventListener("click", function(){ClickedChoice("fri")});
document.getElementById("sat").addEventListener("click", function(){ClickedChoice("sat")});
document.getElementById("sun").addEventListener("click", function(){ClickedChoice("sun")});

function ClickedChoice(choice){
  let i;
  switch(choice){
    case "mon":
      i = 0;
      break;
    case "tue":
      i = 1;
      break;
    case "wed":
      i = 2;
      break;
    case "thu":
      i = 3;
      break;
    case "fri":
      i = 4;
      break;
    case "sat":
      i = 5;
      break;
    case "sun":
      i = 6;
      break;
  }
  document.getElementById("quote").innerHTML = quotes[i];
  document.getElementById("day").innerHTML = days[i];
  document.getElementById("item1").innerHTML = menu[i][0];
  document.getElementById("item2").innerHTML = menu[i][1];
  document.getElementById("item3").innerHTML = menu[i][2];
  document.getElementById("item4").innerHTML = menu[i][3];
}
