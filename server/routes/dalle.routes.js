import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();
router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL·E ROUTES" });
});
const openai =new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
     

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    

    const result = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json"
    });

    const imageBase64 = result.data[0].b64_json

    // return 
    res.status(200).json({ photo: imageBase64 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});


export default router;