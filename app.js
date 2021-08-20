function addElement(name) {
    return document.querySelector(name);
}

var btn = addElement("#btn-go");
var returnStat = addElement("#return-stat");

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
            break;
        case 5:
         returnStat.innerHTML ="<span class='character'>E</span>nemies🗡️";
         break;
         case 4:
            returnStat.innerHTML ="<span class='character'>M</span>arried 💍";
         break;
         case 3:
            returnStat.innerHTML ="<span class='character'>A</span>ffair🙈";
         break;
         case 2:
            returnStat.innerHTML ="<span class='character'>L</span>overs❤️";
         break;
         case 1:
            returnStat.innerHTML ="<span class='character'>F</span>riends🤝";
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
    return concatString.length;
}