
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("college", "root", "YOUR_MYSQL_PASSWORD", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const Person = sequelize.define("Person", {
    name: DataTypes.STRING
});

const Passport = sequelize.define("Passport", {
    passportNumber: {
        type: DataTypes.STRING,
        unique: true
    }
});

// One-to-One relationship
Person.hasOne(Passport);
Passport.belongsTo(Person);

async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        const person = await Person.create({ name: "Rahul" });

        await Passport.create({
            passportNumber: "P12345",
            PersonId: person.id
        });

        const result = await Person.findOne({
            where: { id: person.id },
            include: Passport
        });

        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await sequelize.close();
    }
}

main();
