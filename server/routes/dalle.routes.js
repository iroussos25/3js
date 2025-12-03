import express, { response } from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
// import {Configuration, OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();

const config = new OpenAI({
// const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAI(config);
// const openai = new OpenAIApi(config);

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "prompt is required" });

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    const imageBase64 = result?.data?.[0]?.b64_json;
    if (!imageBase64) throw new Error("No image returned from OpenAI");

    return res.status(200).json({ photo: imageBase64 });
  } catch (error) {
    console.error("DALL·E route error:", error);
    return res.status(500).json({ error: error?.message || "Server error" });
  }
});

// router.route('/').get((req, res)=> {
//     res.status(200).json({ message: "Hello from DALL.E ROUTES"})
// })

// router.route('/').post(async (req, res) => {
//     try {
//         const { prompt } = req.body;
//         const response = await openai.createImage({
//             prompt,
//             n: 1, 
//             size: '1024x1024',
//             response_format: 'b64_json'
//         });
//         const image = response.data.data[0].b64_json;
//         res.status(200).json({photo: image });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message: "Something went wrong"})
// }
// })
export default router;