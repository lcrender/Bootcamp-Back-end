
let userList=[]
class User { 
    constructor(name) {
        for (let i=0; i < userList.length; i++) {
            if (name === userList[i]) {
                console.log(`Error. There is another user with the same username "${name}", please change the name of the new user and be happy with this app :)`)
                return
            }
        }
        this.name = name;
        userList.push(this.name)
        console.log(`New user: ${name}.`);
    }
}
module.exports = User; 