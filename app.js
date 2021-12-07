//Function to fetch elements present in the document
function addElement(id) {
    return document.getElementById(id);
}

let flames = addElement("flames");
let returnStat = addElement("return-stat");

addElement("btn-go").addEventListener("click", function () {
    let inputOne = String(addElement("name-first").value.trim()); //converting the input to avoid type coercion
    let inputTwo = String(addElement("name-second").value.trim());
    if (inputOne !== "" && inputTwo !== "") { //check to make sure, names have been entered
        getResult(inputOne, inputTwo);
    } else returnStat.innerText = "I'm gonna need those name thingies xD"; //informing that one of the names is a blank value
})

function getResult(name1, name2) {
    let result = playFlames(name1, name2);
    //updating UI here.
    switch (result) {
        case 6:
            returnStat.innerHTML = "<span class='character'>S</span>iblings👯‍♀️";
            flames.innerHTML = "Flame<span class='character'>s</span><span class='emoji'>🔥</span>"
            break;
        case 5:
            returnStat.innerHTML = "<span class='character'>E</span>nemies🗡️";
            flames.innerHTML = "Flam<span class='character'>e</span>s<span class='emoji'>🔥</span>"
            break;
        case 4:
            returnStat.innerHTML = "<span class='character'>M</span>arried💍";
            flames.innerHTML = "Fla<span class='character'>m</span>es<span class='emoji'>🔥</span>"
            break;
        case 3:
            returnStat.innerHTML = "<span class='character'>A</span>ffair🙈";
            flames.innerHTML = "Fl<span class='character'>a</span>mes<span class='emoji'>🔥</span>"
            break;
        case 2:
            returnStat.innerHTML = "<span class='character'>L</span>overs❤️";
            flames.innerHTML = "F<span class='character'>l</span>ames<span class='emoji'>🔥</span>"
            break;
        case 1:
            returnStat.innerHTML = "<span class='character'>F</span>riends🤝";
            flames.innerHTML = "<span class='character'>F</span>lames<span class='emoji'>🔥</span>"
            break;
    }
}

function playFlames(name1, name2) {
    let uniqueChars = removeCommonCharacters(name1, name2);
    let count = uniqueChars.length;
    if (count === 0) return 1;
    else if (count % 6 === 0) return 6;
    else if (count % 5 === 0) return 5;
    else if (count % 4 === 0) return 4;
    else if (count % 3 === 0) return 3;
    else if (count % 2 === 0) return 2;
    else return 1;
}
/*An abstract funtion that removes all characters, this can be used for any purpose. It returns an array of all the values that were uncommon
 between the two strings*/
function removeCommonCharacters(str1, str2) {
    let str1Array = str1.toLowerCase().split("");
    let str2Array = str2.toLowerCase().split("");
    let commonChars = [];
    for (let char of str1Array) {
        if (str2Array.includes(char)) {
            commonChars.push(char);
        }
    }
    let allChars = str1Array.concat(str2Array);

    for (let char of commonChars) {
        while (allChars.includes(char)) {
            allChars.splice(allChars.indexOf(char), 1);
        }
    }
    //I could've used a Set here for all the unique values but it would also negate the values of recurring common characters in a name.
    return allChars;
}