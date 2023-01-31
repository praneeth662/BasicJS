//console.log(document);
//console.log(document);
//var headerTitle = document.getElementById("main-header");
//headerTitle.style.borderBottom = "solid 3px #000";
//var header = document.getElementById("heading2");
//header.style.fontWeight = "bold";
//header.style.color = "green";

//GET ELEMENTS BY CLASSNAME and making all listitems bold and 3rd element background to green.
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';
items[2].style.background='green';