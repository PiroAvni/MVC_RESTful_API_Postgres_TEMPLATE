const db = require("../database/connect");

class Diary {
  constructor({
    post_id,
    title,
    content,
    category,
    post_time,
    post_date,
    user_id,
  }) {
    this.post_id = post_id;
    this.title = title;
    this.content = content;
    this.category = category;
    this.post_time = post_time;
    this.post_date = post_date;
    this.user_id = user_id;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM post ORDER BY post_date");

    if (response.rows.length === 0) {
      throw new Error("No diary posts available");
    }
    return response.rows.map((p) => new Diary(p));
  }

  static async getOneById(id) {
    const response = await db.query("SELECT * from post WHERE post_id = $1", [
      id,
    ]);
    if (response.rows.length != 1) {
      throw new Error("Unable to locate the post id");
    }
    return new Diary(response.rows[0]);
  }

  static async create(data) {
    const { title, content, category } = data;
    const response = await db.query(
      "INSERT INTO post (title, content, category) VALUES( $1, $2 , $3)  RETURNING post_id",
      [title, content, category]
    );
    const postId = response.rows[0].post_id;
    const newDiary = await Diary.getOneById(postId);

    return new Diary(response.rows[0]);
  }

  static async update(data, id) {
    const { content } = data;
    const response = await db.query(
      "UPDATE post SET content =$1  WHERE post_id =$2 RETURNING *;",
      [content, id]
    );
    return new Diary(response.rows[0]);
  }

  static async destroy(id) {
    const response = await db.query("DELETE FROM post WHERE post_id = $1 ;", [
      id,
    ]);
    return "The record has been deleted";
  }

  static async getCategory(category) {
    const data =  category ;
   
    console.log("line 63", data);
    const response = await db.query(
    'SELECT * FROM post WHERE category = $1  ORDER BY post_date, post_time DESC;' ,[data]
    );
    if (response.rows.length === 0) {
      throw new Error("No diary posts available");
    }
    return response.rows.map(g => new Diary(g));
  }


  
  static async getCategory2(post) {
    const item =  post ;
   
    console.log("line 87", item);
    const response = await db.query(
    'SELECT * FROM post WHERE category = $1 ORDER BY post_date, post_time DESC;' ,[item]
    );
    if (response.rows.length === 0) {
      throw new Error("No diary posts available");
    }
    return response.rows.map(g => new Diary(g));
  }

  
  static async getByYear(year){ 
  
    const response = await db.query("SELECT * FROM post WHERE EXTRACT(YEAR FROM post_date) = $1 ORDER BY post_date, post_time DESC;", [year]);
    if (response.rows.length === 0) {
        throw new Error("No entries available.")
    }
    return response.rows.map(g => new Diary(g));
}


}

module.exports = Diary;
