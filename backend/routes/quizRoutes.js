const express = require('express');
const Quiz = require('../models/quizModel');
const router = express.Router();

// Get all quizzes
router.get('/quizzes', async (req, res) => {
    const quizzes = await Quiz.find();
    res.json(quizzes);
});

// Get quiz by ID
router.get('/quizzes/:id', async (req, res) => {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
});

// Submit quiz and calculate score
router.post('/submit', async (req, res) => {
    const { quizId, answers } = req.body;

    try {
        const quiz = await Quiz.findOne({ _id: quizId });

        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++;
            }
        });

        res.json({ score });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit quiz' });
    }
});


router.post('/quizzes', async (req, res) => {
    console.log(req.body)
    const { title, questions } = req.body;

    if (!title || !questions || !questions.length) {
        return res.status(400).json({ error: 'Invalid quiz data' });
    }

    try {
        const newQuiz = new Quiz({
            title,
            questions,
        });

        await newQuiz.save();
        res.status(200).json(newQuiz);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add quiz' });
    }
});

module.exports = router;
