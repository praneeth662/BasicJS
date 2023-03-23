<html>
    <body>
        <form onsubmit="SavetoLocalStorage(event)">
            <label> Choose expenseamount</label>
            <input type="number" name="expenseamount" id="expenseInputTag" required>
            <label> Choose description</label>
            <input type="text" name="description" id="descriptionInputTag" required>
            <label> Choose a category</label>
            <select name="category" id="categoryInputTag">
                <option>entertainment</option>
                <option>education</option>
                <option>food</option>
            </select>

            <button> Add Expense </button>
        </form>
        <ul id='listOfitems'></ul>
        <script>
            function SavetoLocalStorage(event)
            {
                event.preventDefault();
                const expamt = event.target.expenseamount.value;
                const des  = event.target.description.value;
                const cat  = event.target.category.value;
                //localStorage.setItem('name',name);
                //localStorage.setItem('emailid',email);
                //localStorage.setItem('phno',phno);
                const obj={
                    expamt,
                    des,
                    cat 
                }
                localStorage.setItem(obj.des,JSON.stringify(obj));
                showuseronscreen(obj)
            }    
            function showuseronscreen(obj)
            {
                const parentElem = document.getElementById('listOfitems')
                const childElem = document.createElement('li')

                childElem.textContent = obj.expamt + '-' + obj.des + '-' + obj.cat
                
                
                const deleteButton = document.createElement('input')
                deleteButton.type = "button"
                deleteButton.value = "Delete Expense"
                deleteButton.onclick = () => {
                    localStorage.removeItem(obj.des)
                    parentElem.removeChild(childElem)
                }

                const editButton = document.createElement('input')
                editButton.type="button"
                editButton.value='Edit Expense'
                editButton.onclick = () => {
                    localStorage.removeItem(obj.des)
                    parentElem.removeChild(childElem)
                    document.getElementById(`expenseInputTag`).value = obj.expamt
                    document.getElementById(`descriptionInputTag`).value = obj.des
                    document.getElementById(`categoryInputTag`).value = obj.cat

                }

                childElem.appendChild(deleteButton)
                childElem.appendChild(editButton)
                parentElem.appendChild(childElem)
            } 

                
            
        </script>    

        
    </body>
</html>
