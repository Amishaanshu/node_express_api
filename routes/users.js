import express from "express";
const router = express.Router();
const users = [
  {
    firstName: "Amisha",
    lastName: "Anshu",
    age: 21,
  },
  {
    firstName: "Jatin",
    lastName: "Choudhary",
    age: 21,
  },
];
//all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});
router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName} added to the database`);
});
export default router;
