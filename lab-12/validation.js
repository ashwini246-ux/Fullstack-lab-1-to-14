
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const Student = sequelize.define("Student", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: 18,
            max: 60
        }
    }
});

async function main() {
    try {
        await sequelize.authenticate();

        const student = await Student.build({
            name: "",
            email: "wrong-email",
            age: 15
        });

        await student.validate();
        console.log("Validation successful!");
    } catch (error) {
        console.log("Validation errors:");
        if (error.errors) {
            error.errors.forEach(err => console.log(err.message));
        } else {
            console.log(error.message);
        }
    } finally {
        await sequelize.close();
    }
}

main();
