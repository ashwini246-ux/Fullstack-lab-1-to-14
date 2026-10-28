
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const Student = sequelize.define("Student", {
    name: DataTypes.STRING
});

const Course = sequelize.define("Course", {
    title: DataTypes.STRING
});

// Many-to-Many relationship
Student.belongsToMany(Course, { through: "StudentCourses" });
Course.belongsToMany(Student, { through: "StudentCourses" });

async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        const student1 = await Student.create({ name: "Ashwini" });
        const student2 = await Student.create({ name: "Rahul" });

        const course1 = await Course.create({ title: "Web Development" });
        const course2 = await Course.create({ title: "Cloud Computing" });

        await student1.addCourses([course1, course2]);
        await student2.addCourses([course1]);

        const result = await Student.findOne({
            where: { id: student1.id },
            include: Course
        });

        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await sequelize.close();
    }
}

main();
