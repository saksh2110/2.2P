const app = Vue.createApp({
  data() {
      return {
          quizStarted: false,
          questions: [
              {
                  question: "What does IT stand for?",
                  options: ["Information Technology", "International Trade", "Internet Tools", "Innovative Technologies"],
                  correctAnswer: "Information Technology",
              },
              {
                question: 'Which programming language is known as the "mother of all languages"?',
                options: ['C', 'Java', 'Assembly', 'Python'],
                correctAnswer: "Java",
              },
              {
                question: 'What does HTML stand for?',
                options: ['Hyper Text Markup Language', 'Hyperlink and Text Markup Language', 'High Text Markup Language', 'Hyper Text Makeup Language'],
                correctAnswer: "Hyper Text Markup Language",
              },
          ],
          currentQuestionIndex: 0,
          selectedOption: "",
          score: 0,
      };
  },
  computed: {
      question() {
          return this.questions[this.currentQuestionIndex].question;
      },
      options() {
          return this.questions[this.currentQuestionIndex].options;
      },
  },
  methods: {
      startQuiz() {
          this.quizStarted = true;
      },
      checkAnswer() {
          if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
              this.score++;
          }
          this.selectedOption = "";
          this.currentQuestionIndex++;
          if (this.currentQuestionIndex === this.questions.length) {
              alert(`Quiz completed! Your score: ${this.score}/${this.questions.length}`);
              this.quizStarted = false;
              this.currentQuestionIndex = 0;
              this.score = 0;
          }
      },
  },
});

app.mount('#quiz-app');
