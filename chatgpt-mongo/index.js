const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })//bu hisseler olmasada eslinde rahat isleyir lakin chatgpt bunun daha guncel ve guvenli olacagin bildirdi
    .then(() => console.log('MongoDB connected'))//eger calissa her sey mongodb connected yazacaq
    .catch(err => console.log(err));//xetani consola verecek

const app = express();
app.use(express.json());

const studentSchema = new mongoose.Schema({//yeni bir shema yaradiriq   
    name: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

app.get('/student', (req, res) => {
    res.status(200).json('cs403 on backend');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

app.get('/robots.txt', (req, res) => {
    res.json("burda ne isin var");
});

app.post('/students', async (req, res) => {
    const newStudent = new Student(req.body);
    try {
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedStudent) {
            res.json(updatedStudent);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (deletedStudent) {
            res.json(deletedStudent);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



//MongoDB -de id hissesi girmesekde olar ozu avtomatik verir + asagida hemcinin __v artirir---sehf basa dusmedimse bir data, obyekt uzerinde eyni anda bir nece prosesi yerine yetiermeyin qarsisin alir.

/*
async,await,try,catch
oz basa dusduyum sekilde

await gozleyir butun her sey icra ola daha sonra alinan success neticeleri oturur, try catch success ve faili esasen icra olunur.error olduqda catch succes olduqda try icra olunur

*/


