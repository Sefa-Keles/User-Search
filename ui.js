class UI {
    constructor(){
        this.userContainer = document.querySelector("#userContainer");
        this.alert = document.querySelector("#alert");
    }

    showProfile = (userData) =>{
        this.userContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href ="https://placeholder.com">
                            <img src="https://via.placeholder.com/350x150" class="img-thumbnail"> 
                        </a>        
                    </div>
                    <div class="col-md-9">
                        <h4>CONTACT INFORMATION</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name: ${userData.name}
                            </li>
                            <li class="list-group-item">
                                User Name: ${userData.name}
                            </li>
                            <li class="list-group-item">
                                E-Mail: ${userData.email}
                            </li>
                            <li class="list-group-item">
                                Address: ${userData.address.street}
                                         ${userData.address.city}
                                         ${userData.address.zipcode}
                                         ${userData.address.suite}
                            </li>
                            <li class="list-group-item">
                                Website: ${userData.website}
                            </li>
                            <li class="list-group-item">
                                Company: ${userData.company.name}
                            </li>
                        </ul>
                        <h4 class="mt-4">TODO LIST</h4>
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    showTodo = (todo) =>{
        let html = "";

        todo.forEach(item => {
            if(item.completed){
                html += `
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>
                `;
            }else{
                html += `
                <li class="list-group-item bg-secondary">
                    ${item.title}
                </li>
            `;
            }
        });

        this.userContainer.querySelector("#todo").innerHTML = html;
    }

    showAlert = (text) =>{
        this.alert.innerHTML = `
            ${text} is not found!
        `;
    }

    textCleaner = () =>{
        this.userContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
}