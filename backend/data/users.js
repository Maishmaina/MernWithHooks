import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Dan Joe",
    email: "dan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jan Joe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
