const intents = require("./intents");
const contexts = require("./contexts");

module.exports = {
  [intents.REDIRECT]: ["No problem, redirected", "ok, redirected"],
  [intents.READ_BLOG]: [
    "Good for you,  maybe check out our blog. We have some articles about data science, fin-tech, human resources, mobility, product development, telco and more. Which topic sounds interesting to you?",
    "Good for you,  maybe check out our blog. We have some articles about data science, fin-tech, human resources, mobility, product development, telco and more. Is there a topic you'd like to learn more about?"
  ],
  [contexts.NAVIGATE]: ["If you need directions press the button bellow"],
  [contexts.GET_ADDRESS]: [
    "We have two offices: one located in Tallinn, Tartu mnt 43, and the second in Tartu, Narva mnt 9"
  ],
  [contexts.GET_MESSAGE]: [
    "Thanks, I get your message, email sent",
    "Cool, I get your message, email sent"
  ],
  [contexts.GET_EMAIL]: [
    "I didn't get that. What's your email?",
    "Sorry, what was that? What's your email?",
    "One more time? What's your email?"
  ],
  [intents.FALLBACK]: [
    "I didn't get that. Can you say it again?",
    "I missed what you said. What was that?",
    "Sorry, could you say that again?",
    "Sorry, can you say that again?",
    "Can you say that again?",
    "Sorry, I didn't get that. Can you rephrase?",
    "Sorry, what was that?",
    "One more time?",
    "What was that?",
    "Say that one more time?",
    "I didn't get that. Can you repeat?",
    "I missed that, say that again?"
  ]
};
