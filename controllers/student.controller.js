import Student from "../models/student.model.js";

// Get all students with pagination & sorting
export const getStudents = async (req, res) => {
  try {
    let { page = 1, limit = 5, sort = "name" } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const students = await Student.find()
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Student.countDocuments();

    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create student
export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Not found" });
    res.json(student);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// Update
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!student) return res.status(404).json({ message: "Not found" });

    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Student deleted" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};