const sqlite3 = require('sqlite3')
let db = new sqlite3.Database("database.db",(err)=>{
    if(err){
        console.log('Error when creating the data base',err)
    } else {
        console.log('Database created!')
        /* Put code to create table(s) here */
        createTableCourses()
    }
})
const createTableCourses = () => {
    console.log("create database table courses");
db.run('CREATE TABLE IF NOT EXISTS courses (id INTEGER PRIMARY KEY AUTOINCREMENT ,name VARCHAR(100), description TEXT)',createTableExercise);
}
const createTableExercise = () => {
    console.log("create database table exercises");
    db.run("CREATE TABLE IF NOT EXISTS exercises(id INTEGER PRIMARY KEY AUTOINCREMENT , name VARCHAR(255),course_id INTEGER FOREIGNKEY REFERENCES course(id))")
}
db.close();