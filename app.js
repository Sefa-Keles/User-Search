const profile = new Profile();
const ui = new UI();
const searchUser = document.querySelector("#searchUser");

searchUser.addEventListener("keyup", event => {
    ui.textCleaner();
    let searchText = event.target.value;
    if(searchText !== ""){
        profile.getProfile(searchText)
        .then(res => {
            if(res.userItem.length === 0){
                ui.showAlert(searchText);
            }else{
                ui.showProfile(res.userItem[0]);
                ui.showTodo(res.todo)
            }
        })
        .catch(err=>{
            ui.showAlert(searchText);
        });
}});
