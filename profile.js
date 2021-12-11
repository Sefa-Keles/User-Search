class Profile {
    constructor(){
        this.clientId = "";
        this.clientSecret = "";
    }

    async getProfile(inputText){
        const userOutput = await fetch(`https://jsonplaceholder.typicode.com/users?username=${inputText}`);
        const userItem = await userOutput.json();

        const todoResult = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userItem[0].id}`);
        const todo = await todoResult.json();

        return {
            userItem,
            todo
        }
    }
}