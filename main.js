var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit' , addItem);
//delete event
itemlist.addEventListener('click',removeItem);


//Add item
function addItem(e)
{
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    
    //create new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));


    //create del button element
    var deletebtn = document.createElement('button');

    //add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deletebtn.appendChild(document.createTextNode('x'));

    //append button to li
    li.appendChild(deletebtn);

    //append li to list
    itemlist.appendChild(li);
}

//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
