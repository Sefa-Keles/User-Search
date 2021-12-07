class User {
    constructor(){
        this.clientId = "";
        this.clientSecret = "";
    }

    async getUser(userName){
        const userOutput = await fetch(`https://jsonplaceholder.typicode.com/users/${userName}`);
        const user = await userOutput.json();

        return {
            user
        }
    }
}