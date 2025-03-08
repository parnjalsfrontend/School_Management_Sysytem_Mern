import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "teacher", text: "Hello! How is your child doing?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Simulate AI reply with a rule-based chatbot
  const chatbotReply = (message) => {
    setIsTyping(true);
    setTimeout(() => {
      let reply = "I'm here to assist you.";
      if (message.includes("homework"))
        reply = "The latest homework is uploaded in the portal.";
      else if (message.includes("performance"))
        reply = "Your child is doing well in Math but needs improvement in Science.";
      else if (message.includes("fees"))
        reply = "The last fee payment was on March 1st, and the next is due April 10th.";

      setMessages((prev) => [...prev, { sender: "teacher", text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = { sender: "parent", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Generate AI response
    chatbotReply(input.toLowerCase());
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <div className="p-4 bg-green-600 text-white text-lg font-semibold text-center sticky top-0">
        Teacher-Parent Chat
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === "parent" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-xs p-3 rounded-lg ${
              msg.sender === "parent"
                ? "ml-auto bg-green-500 text-white"
                : "mr-auto bg-gray-300 text-gray-900"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="mr-auto bg-gray-300 text-gray-900 p-3 rounded-lg max-w-xs"
          >
            Typing...
          </motion.div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white dark:bg-gray-800 sticky bottom-0 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-green-600 text-white rounded-lg"
        >
          <PaperAirplaneIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
