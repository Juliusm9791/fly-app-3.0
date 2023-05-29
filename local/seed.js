const db = require("./dbconnect");
const User = require("./user");

db.once("open", async () => {
  await User.deleteMany();

  const users = [];
  users.push(
    await User.create({
      firstName: "Test 1",
      email: "Test1@gmail.com",
    })
  );

  users.push(
    await User.create({
      firstName: "Test 2",
      email: "Test2@gmail.com",
    })
  );

  users.push(
    await User.create({
      firstName: "Test 3",
      email: "Test3@gmail.com",
    })
  );

  users.push(
    await User.create({
      firstName: "Test 4",
      email: "Test4@gmail.com",
    })
  );

  console.log("users seeded");
  process.exit();
});
