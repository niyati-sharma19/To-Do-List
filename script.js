let select = document.querySelector("#contentType");
let materiala = document.getElementById("materiala");

select.addEventListener("change", () => {

    if (select.value === "list") {

        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter list item";

        let list = document.createElement("ul");

        materiala.appendChild(input);
        materiala.appendChild(list);

        input.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                if (input.value != "") {

                    let item = document.createElement("li");

                    item.textContent = input.value;

                    list.appendChild(item);

                    input.value = "";
                }
            }
        });
    }

    else if (select.value === "checkbox") {

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter task";

        materiala.appendChild(checkbox);
        materiala.appendChild(input);

        input.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                if (input.value != "") {

                    let newCheckbox = document.createElement("input");
                    newCheckbox.type = "checkbox";

                    let newInput = document.createElement("input");
                    newInput.type = "text";
                    newInput.placeholder = "Enter task";

                    materiala.appendChild(newCheckbox);
                    materiala.appendChild(newInput);

                    input.value = "";
                }
            }
        });
    }
    else{
        
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter list item";

        let list = document.createElement("ul");

        materiala.appendChild(input);
        materiala.appendChild(list);

        input.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                if (input.value != "") {

                    let item = document.createElement("li");

                    item.textContent = input.value;

                    list.appendChild(item);

                    input.value = "";
                }
            }
        });
    }
});
    
       
    
    