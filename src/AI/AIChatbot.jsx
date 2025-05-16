// import React, { useEffect, useState } from "react";

// const introPrompt = `
// You're an AI assistant on Ajay's portfolio. Help visitors by answering questions about:
// - Skills: React, Node.js, Firebase, Tailwind CSS, etc.
// - Projects: IndiCov, Snapalyzer, OnTrack, etc.
// - Blog, experience, contact.
// Be helpful and friendly.
// `;

// const AIChatbot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "system", content: introPrompt },
//     { role: "assistant", content: "Hi! Ask me anything about Ajay's portfolio." },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//   // Load/save chat from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("ajay-ai-chat");
//     if (saved) setMessages(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("ajay-ai-chat", JSON.stringify(messages));
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;
//     const newMessage = { role: "user", content: input };
//     const updatedMessages = [...messages, newMessage];
//     setMessages(updatedMessages);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo",
//           messages: updatedMessages,
//         }),
//       });

//       const data = await response.json();
//       const botReply = data.choices[0].message;
//       setMessages((prev) => [...prev, botReply]);
//     } catch (error) {
//       console.error("OpenAI error:", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "Oops! Something went wrong. Try again later." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVoiceInput = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setInput(transcript);
//     };
//     recognition.start();
//   };

//   if (!open) {
//     return (
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
//       >
//         💬
//       </button>
//     );
//   }

//   return (
//     <div
//       className={`fixed bottom-6 right-6 w-80 shadow-xl rounded-xl p-4 z-50 ${
//         isDark ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-lg font-bold">AI Assistant</h3>
//         <button onClick={() => setOpen(false)} className="text-xl font-bold">×</button>
//       </div>
//       <div className="h-48 overflow-y-auto space-y-2 mb-2 pr-1">
//         {messages
//           .filter((msg) => msg.role !== "system")
//           .map((msg, idx) => (
//             <div
//               key={idx}
//               className={`p-2 rounded-lg ${
//                 msg.role === "assistant"
//                   ? isDark
//                     ? "bg-gray-800"
//                     : "bg-gray-200"
//                   : isDark
//                   ? "bg-gray-600"
//                   : "bg-blue-100"
//               }`}
//             >
//               <strong>{msg.role === "assistant" ? "AI" : "You"}: </strong> {msg.content}
//             </div>
//           ))}
//       </div>
//       <div className="flex gap-1">
//         <button
//           onClick={handleVoiceInput}
//           className="bg-purple-500 text-white px-3 rounded-lg hover:bg-purple-600"
//         >
//           🎙️
//         </button>
//         <input
//           className="flex-1 border p-2 rounded-lg focus:outline-none"
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a question..."
//         />
//         <button
//           className="bg-blue-500 text-white px-4 rounded-lg disabled:opacity-50"
//           onClick={handleSend}
//           disabled={loading}
//         >
//           {loading ? "..." : "Send"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AIChatbot;
