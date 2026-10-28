
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const Student = sequelize.define("Student", {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    age: DataTypes.INTEGER
});

async function main() {
    try {
        await sequelize.authenticate();
        await Student.sync();

        // INSERT
        const student = await Student.create({
            name: "Rahul",
            department: "BCA",
            age: 20
        });
        console.log("Student inserted:", student.toJSON());

        // DISPLAY ALL STUDENTS
        const students = await Student.findAll();
        console.log("All students:", students.map(s => s.toJSON()));

        // UPDATE
        await Student.update(
            { department: "Computer Applications" },
            { where: { id: student.id } }
        );
        console.log("Student updated!");

        // DELETE
        await Student.destroy({
            where: { id: student.id }
        });
        console.log("Student deleted!");

    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await sequelize.close();
    }
}

main();
