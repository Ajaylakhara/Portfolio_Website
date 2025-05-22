import Message from "../models/message.js";
import validator from "validator";


export const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({success: false, message: "All fields are required." });
  }
   if (!validator.isEmail(email)) {
    return res.status(400).json({ success: false , message: "Please enter a valid email" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Server error. Please try again." });
  }
};
