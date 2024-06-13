const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/student', (req, res) => {
    res.status(200).json('cs403 on backend');
});

var Port = 7000;
app.listen(Port, () => console.log(`http://localhost:${Port}`.bold.green));

app.get('/robots.txt', (req, res) => {
    res.json("burda ne isin var");
});

let students = [
    {
        id: 1,
        name: "Elmir"
    },
    {
        id: 2,
        name: "isa"
    },
    {
        id: 3,
        name: "ferhad"
    },
    {
        id: 4,
        name: "turan"
    }
];

// Create a new student
app.post('/students', (req, res) => {
    const newStudent = req.body;
    newStudent.id = students.length + 1;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Read all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Read a single student by ID
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Update a student by ID
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students[index] = { id, ...req.body };
        res.json(students[index]);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Delete a student by ID
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        res.json(deletedStudent[0]);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

app.get('/', (req, res) => {
    res.json(students);
});
