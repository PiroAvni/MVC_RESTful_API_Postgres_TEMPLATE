const db = require('../database/connect');

class User {

    constructor({ user_id, username, password, Admin }) {
        this.id = user_id;
        this.username = username;
        this.password = password;
        this.Admin = Admin;
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM user_account WHERE user_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getOneByUsername(username) {
        const response = await db.query("SELECT * FROM user_account WHERE username = $1", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async create(data) {
        const { username, password, Admin } = data;
        let response = await db.query("INSERT INTO user_account (username, password, Admin) VALUES ($1, $2 , $3) RETURNING user_id;",
            [username, password, Admin]);
        const newId = response.rows[0].user_id;
        const newUser = await User.getOneById(newId);
        return newUser;
    }

    static async update(data,id){
        const {username, password, Admin} = data;
        let response = await db.query('UPDATE user_account SET username = $1, password =$2, Admin =$3 WHERE  user_id = $4 RETURNING *', [username, password, Admin, id])
        return new User(response.rows[0]);
    }


}

module.exports = User;