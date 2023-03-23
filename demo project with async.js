html>
    <body>
        <form onsubmit="SavetobackendStorage(event)">
            <label> Selling Price </label>
            <input type="number" name="SellingPrice" id="sellingprice" required>
            <label> Product Name </label>
            <input type="text" name="ProductName" id="productname" required>
            <button> Add Product </button>
            <h1> Products </h1> 
            <h3 id="sum">Total price:</h3>
            
        </form>
        <ul id='listOfitems'></ul>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.3/axios.min.js"></script>
        <script>
            var totalEl = document.getElementById('sum');
            var totalValue=0;
            async function SavetobackendStorage(event)
                {
                    event.preventDefault();
                    const number = event.target.SellingPrice.value;
                    const name = event.target.ProductName.value;
                    

                    const obj={
                            number,
                            name 
                        }
                try
                {
     
                const response = await axios.post("https://crudcrud.com/api/1630647535d6471f84aa23aef0c40162/sellerproducts",obj);
                showUserOnScreen(response.data);
                    

                }
                catch(err){
                        document.body.innerHTML = document.body.innerHTML + "<h4> Something Went Wrong </h4>"
                        console.log(err)
                    }
                }
            
    
                    

            window.addEventListener("DOMContentLoaded", async () => {
                try {
                 const response = await axios.get("https://crudcrud.com/api/1630647535d6471f84aa23aef0c40162/sellerproducts");
                     
                       
                            
                    for(var i=0; i < response.data.length;i++)
                        {
                            showUserOnScreen(response.data[i])
                        }

                     }
                    catch(err) {
                        console.log(err)
                     }
                })
                    
            function showUserOnScreen(user)
                {
                    
                    document.getElementById('productname').value ='';
                    document.getElementById('sellingprice').value='';
                    //if(localStorage !== null)
                      // {
                        //removeUserFromScreen(user.sellingprice)
                       //}
                    var parentNode = document.getElementById('listOfitems');
                    var childHTML =   `<li id=${user._id}> ${user.number} - ${user.name}
                                            <button onclick = (deleteItem('${user._id}'),del('${user.number}'))>Delete Product </button>
                                        </li>`

                    var o = parseInt(user.number);
                    totalValue = totalValue + o
                    totalEl.textContent = `Total price: ${totalValue}`;
                                        


                    parentNode.innerHTML = parentNode.innerHTML + childHTML;

                    
                    

                    
                }
            
            async function deleteItem(userId) {
                try
                    {   
                    const response = await axios.delete(`https://crudcrud.com/api/1630647535d6471f84aa23aef0c40162/sellerproducts/${userId}`);
                    removeUserFromScreen(userId)
                    }
                    catch(err) {
                            console.log(err)
                        }
                
               
                    }     
            function del(userprice){
                var a = parseInt(userprice);
                totalValue = totalValue - a
                totalEl.innerHTML = `Total price: ${totalValue}`;        

            }
            
            function removeUserFromScreen(userId)
                   {
                   
                    
                    const parentNode = document.getElementById('listOfitems');
                    const childNodeToBeDeleted = document.getElementById(userId);
                    
                    if(childNodeToBeDeleted)
                    {
                        parentNode.removeChild(childNodeToBeDeleted)
                       
                        

                    }
                    totalValue -= parseInt(userId.number);
                    totalEl.textContent = `Total price: ${totalValue}`;
                 
                    

                    
                   }
                  
   
                
        </script>
    </body>
</html>  
