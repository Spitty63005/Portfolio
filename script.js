let freshman = document.getElementById("freshman");
let sophomore = document.getElementById("sophmore");
let junior = document.getElementById("junior");
let senior = document.getElementById("senior");
let currentGrade = freshman;

let academic = document.getElementById("acaWrk");
let shop = document.getElementById("shopWrk");
let related = document.getElementById("relWrk");
let ddm = document.getElementById("ddm");

let close = document.getElementById("closeBtn")
let open = document.getElementById("openBtn");

let pageReference = document.getElementById("title");



function setCurrentgrade(grade) 
{
  console.log(grade)
  if(!(grade == currentGrade))
  {
    if(grade == "freshman")
    {
      setLinksWithGrade("Freshman");
    }
    else if(grade == "sophomore") 
    {
      setLinksWithGrade("Sophomore");
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
};


function setLinksWithGrade(gradeName)
{
  academic.href = "htmls/Years/" + gradeName + "/academicWork.html";
  shop.href = "htmls/Years/" + gradeName + "/shopWork.html";
  related.href = "htmls/Years/" + gradeName + "/relatedWork.html";
  ddm.href = "htmls/Years/" + gradeName + "/ddm.html";
  goToDropDownLink(gradeName);
}

function goToDropDownLink(grade)
{
  window.location.href = "../" + grade + "/" + pageReference.textContent + ".html";
}

function openFullText()
{
  let fullText = document.getElementById("fullTextDimmed");
  fullText.setAttribute('style', 'display: block;');
}

function closeFullText()
{
  let fullText = document.getElementById("fullTextDimmed");
  fullText.style.display = "none";
}

open.addEventListener("click", function(){
  openFullText();
});

close.addEventListener('click', function() {
  closeFullText();
});

freshman.addEventListener('click', function() {
  setCurrentgrade('freshman');
});

sophomore.addEventListener('click', function() {
  setCurrentgrade('sophomore');
});

junior.addEventListener('click', function() {
  setCurrentgrade('junior');
});

senior.addEventListener('click', function() {
  setCurrentgrade('senior');
});
