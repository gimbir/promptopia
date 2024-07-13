import { connectToDB } from '@utils/database';
import Prompt from '@models/Prompt';

// GET

// PATH

// DELETE
export const DELETE = async (req, {params}) => { 
    const { id } = params;
    try {
        await connectToDB();
        await Prompt.findByIdAndDelete(id);
        return new Response("Prompt Deleted", {
            status: 200
        });
    } catch (error) {
        return new Response("Failed to delete prompt", {
            status: 500
        });
    }
};