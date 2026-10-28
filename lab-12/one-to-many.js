
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const Department = sequelize.define("Department", {
    name: DataTypes.STRING
});

const Student = sequelize.define("Student", {
    name: DataTypes.STRING
});

// One-to-Many relationship
Department.hasMany(Student);
Student.belongsTo(Department);

async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        const department = await Department.create({
            name: "BCA"
        });

        await Student.create({
            name: "Ashwini",
            DepartmentId: department.id
        });

        await Student.create({
            name: "Rahul",
            DepartmentId: department.id
        });

        const result = await Department.findOne({
            where: { id: department.id },
            include: Student
        });

        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await sequelize.close();
    }
}

main();
