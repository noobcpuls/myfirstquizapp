const Quiz = [
    {
        question: "sinx를 미분하면?",
        answer: [
            { answerText: "sinx", isCorrect: false },
            {
                answerText: "cosx", isCorrect: true
            },
            {
                answerText: "tanx", isCorrect: false
            },
            {
                answerText: "-cosx", isCorrect: false
            }
        ]
    },
    {
        question: "테슬라의 CEO는 누구인가",
        answer: [
            { answerText: "Elon Musk", isCorrect: true },
            {
                answerText: "Jeff Bezos", isCorrect: false
            },
            {
                answerText: "Bill Gates", isCorrect: false
            },
            {
                answerText: "Warren Buffett", isCorrect: false
            }
        ]
    },
    {
        question: "내 생일은",
        answer: [
            { answerText: "10월 22일", isCorrect: false },
            {
                answerText: "4월 27일", isCorrect: false
            },
            {
                answerText: "9월 3일", isCorrect: false
            },
            {
                answerText: "12월 24일", isCorrect: true
            }
        ]
    }
]

export default Quiz;