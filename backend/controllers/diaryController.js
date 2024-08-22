const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to get all diaries
const getAllDiary = async (req, res) => {
    try {
        const diaries = await prisma.Diary.findMany();
        res.json(diaries);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve diaries" });
    }
}


const createNewDiary = async (req, res) => {
    try {
        console.log(req.body)
        const newDiary = await prisma.Diary.create({
            data: {
                entry: req.body.entry,
                title: req.body.title,
                topic: req.body.topic,
                userId: req.body.id
            }
        });
        res.status(201).json(newDiary);
    } catch (error) {
        res.status(500).json({ error: "Failed to create diary" });
    }
}

const updateDiary = async (req, res) => {
    const { id, title, entry, topic, userId } = req.body.editDiary; 
    console.log(id, userId, req.body);
    try {
        const updatedDiary = await prisma.diary.update({
            where: {id: id, userId: userId},
            data: {
                title,
                entry,
                topic,
            },
        });

        res.json(updatedDiary); // Respond with the updated diary
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update diary" });
    }
};

const deleteDiary = async (req, res) => {
    const { userId, id } = req.body; 
    console.log(id, userId, typeof userId, req.body)
    try {
        const deletedDiary = await prisma.diary.delete({
            where: {
                id: id,
                userId: userId,
            },
        });

        res.json(deletedDiary); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete diary" });
    }
};

const getDiary = (req, res) => {
    const Diary = data.Diarys.find(emp => emp.id === parseInt(req.params.id));
    if (!Diary) {
        return res.status(400).json({ "message": `Diary ID ${req.params.id} not found` });
    }
    res.json(Diary);
}

module.exports = {
    getAllDiary,
    createNewDiary,
    updateDiary,
    deleteDiary,
    getDiary
}