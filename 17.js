//รวมตัวเรียกใช้คำสั่ง
document.addEventListener("DOMContentLoaded", () => {
    const productinput = document.getElementById('productinput');
    const priceInput = document.getElementById('priceinput');
    const imgeinput = document.getElementById('imgeinput');
    const addItem = document.getElementById("addItembtn");
    const cartItemlist = document.getElementById("cartItem-list");

    let allEverything = [];


    //เพิ่มitem
    addItem.addEventListener("click", () => {
        const addId = productinput.value.trim(); 
        const addPrice = Number(priceInput.value.trim());
        const addImge = imgeinput.value.trim();


        if (!addId || !addImge || isNaN(addPrice) || addPrice <= 0) {
            alert('Please check again.');
            return;
        }

        const items = {
            id: Date.now(),
            name: addId,
            price: addPrice,
            img: addImge,
        };
        allEverything.push(items);
        renderTasks(allEverything);

        productinput.value = "";
        priceInput.value = "";
        imgeinput.value = "";
    });




    function renderTasks(a) {
        cartItemlist.innerHTML = ""
        a.forEach((task) => {

            const taskItem = document.createElement("li")
            taskItem.innerHTML = ` 
            <div>
            <input type="checkbox" id ="chacklis">
             Name: ${task.name}
            price: ${task.price}$ 
         <img src="${task.img}" alt="${task.name}" style="width: 150px; height: auto;"></img> 
         </div>`;

          const deleteBtn =  document.createElement("Button")
          deleteBtn.textContent = "Delete";
          deleteBtn.addEventListener("click", () => {deleteTask(task.id)});
            taskItem.appendChild(deleteBtn)
            
            cartItemlist.appendChild(taskItem);
        });
    }


    function deleteTask(id) {
       
        allEverything = allEverything.filter((task) => task.id !== id);
        renderTasks(allEverything); 
    }


});
