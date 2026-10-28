
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

        // Find all students
        const allStudents = await Student.findAll();
        console.log("All Students:", allStudents.map(s => s.toJSON()));

        // Find one student by name
        const oneStudent = await Student.findOne({
            where: { name: "Ashwini" }
        });
        console.log("One Student:", oneStudent ? oneStudent.toJSON() : "Not found");

        // Find student by primary key (ID)
        const studentById = await Student.findByPk(1);
        console.log("Student by ID:", studentById ? studentById.toJSON() : "Not found");

    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await sequelize.close();
    }
}

main();
