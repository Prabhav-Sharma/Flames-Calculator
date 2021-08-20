function addElement(name) {
    return document.querySelector(name);
}

var btn = addElement("#btn-go");
var returnStat = addElement("#return-stat");
var flames = addElement("#flames");

btn.addEventListener("click", function clickHandler() {

    var name1 = addElement("#name-first").value.trim();
    var name2 = addElement("#name-second").value.trim();

    if(name1==="" || name2===""){
        returnStat.innerText = "I'm gonna need those name thingies xD";
        return;
    }

    switch (playFlames(name1, name2)) {

        case 6:
            returnStat.innerHTML = "<span class='character'>S</span>iblings👯‍♀️";
            flames.innerHTML="Flame<span class='character'>s</span><span class='emoji'>🔥</span>"
            break;
        case 5:
         returnStat.innerHTML ="<span class='character'>E</span>nemies🗡️";
         flames.innerHTML="Flam<span class='character'>e</span>s<span class='emoji'>🔥</span>"
         break;
         case 4:
            returnStat.innerHTML ="<span class='character'>M</span>arried 💍";
            flames.innerHTML="Fla<span class='character'>m</span>es<span class='emoji'>🔥</span>"
         break;
         case 3:
            returnStat.innerHTML ="<span class='character'>A</span>ffair🙈";
            flames.innerHTML="Fl<span class='character'>a</span>mes<span class='emoji'>🔥</span>"
         break;
         case 2:
            returnStat.innerHTML ="<span class='character'>L</span>overs❤️";
            flames.innerHTML="F<span class='character'>l</span>ames<span class='emoji'>🔥</span>"
         break;
         case 1:
            returnStat.innerHTML ="<span class='character'>F</span>riends🤝";
            flames.innerHTML="<span class='character'>F</span>lames<span class='emoji'>🔥</span>"
         break;
    

    }



})

function playFlames(name1, name2) {

    var count = removeCommonLetters(name1, name2);

    if (count % 6 === 0) {
        return 6;
    } else if (count % 5 === 0) {
        return 5;
    } else if (count % 4 === 0) {
        return 4;
    } else if (count % 3 === 0) {
        return 3;
    } else if (count % 2 === 0) {
        return 2;
    } else {
        return 1;
    }

}



function convertStringToLowerCase(name) {
    return name.toLowerCase();
}

function convertStringToArray(name) {
    var lowerCaseName = convertStringToLowerCase(name);
    var nameCharList = lowerCaseName.split("");
   
    return nameCharList;
}


function removeCommonLetters(name1, name2) {
    var counter = 0;
    var arrayName1 = convertStringToArray(name1);
    var arrayName2 = convertStringToArray(name2);

    while (counter < 5) {
        for (var i = 0; i <= arrayName1.length; i++) {
            if (arrayName2.includes(arrayName1[i])) {
                arrayName2.splice(arrayName2.indexOf(arrayName1[i]), 1);
                arrayName1.splice(i, 1);
            }
        }
        counter++;
    }
    var concatString = arrayName1.concat(arrayName2);
    console.log(concatString);
    return concatString.length;
}