
import { connectToDB } from "@utils/database";
import Prompt from '@models/Prompt'

export const POST = async (req) => {
  // console.log(await req.json())
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    console.info(userId)
    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag
    });
    // console.info(userId);

    console.info('line 16')
    // await Prompt.create(newPrompt)
    
    await newPrompt.save();
    console.info('line 18')

    return new Response(JSON.stringify(newPrompt), {
      status: 201
    })

  } catch (error) {
    console.log(error)
    return new Response("Failed to create a new prompt", {
      status: 500
    })
  }
}
