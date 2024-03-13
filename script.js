let freshman = document.getElementById("freshman");
let sophmore = document.getElementById("sophmore");
let junior = document.getElementById("junior");
let senior = document.getElementById("senior");
let currentGrade = freshman;

let academic = document.getElementById("acaWrk");
let shop = document.getElementById("shopWrk");
let related = document.getElementById("relWrk");

function setCurrentgrade(grade) 
{
  if(grade == "freshman")
  {
    setLinksWithGrade("Freshman");
  }
  else if(grade == "sophmore") 
  {
    setLinksWithGrade("Sophmore");
  }
  else if(grade == "junior")
  {
    setLinksWithGrade("Junior");
  }
  else if(grade == "senior")
  {
    setLinksWithGrade("Senior");
  }

}


function setLinksWithGrade(gradeName)
{
  academic.href = "htmls/Years/" + gradeName + "/academicWork.html";
  shop.href = "htmls/Years/" + gradeName + "/shopWork.html";
  related.href = "htmls/Years/" + gradeName + "/relatedWork.html";
}


freshman.addEventListener('click', function() {
  setCurrentgrade('freshman');
});

sophmore.addEventListener('click', function() {
  setCurrentgrade('sophmore');
});

junior.addEventListener('click', function() {
  setCurrentgrade('junior');
});

senior.addEventListener('click', function() {
  setCurrentgrade('senior');
});
