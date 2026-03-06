import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

// Show all students
router.get("/students", async (req, res) => {
  const students = await Student.find().sort("name");
  res.render("students/index", { students });
});

// Add student
router.post("/students", async (req, res) => {
  try {
    await Student.create(req.body);
    res.redirect("/view/students");
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      const students = await Student.find().sort("name");
      return res.render("students/index", {
        students,
        error: "Roll number already exists!"
      });
    }

    const students = await Student.find().sort("name");
    res.render("students/index", {
      students,
      error: "Something went wrong!"
    });
  }
});

// Edit page
router.get("/students/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("students/edit", { student });
});

// Update student
router.post("/students/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/view/students");
});

// Delete
router.get("/students/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/view/students");
});

export default router;