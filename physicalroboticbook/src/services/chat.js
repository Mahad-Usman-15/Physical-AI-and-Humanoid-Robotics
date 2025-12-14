
const API_URL = 'https://physical-ai-and-humanoid-robotics-production-8d25.up.railway.app/';




export const sendMessage = async (message, context = null) => {
    try {
        const response = await fetch(`${API_URL}/api/v1/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, context }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Assuming the backend sends a streaming response or a simple JSON response
        // This part needs to be adapted based on the actual backend implementation
        const data = await response.json(); 
        console.log(data)
        return data;
        
    } catch (error) {
        console.error('Error sending message:', error);
        return { response: 'Sorry, something went wrong.' };
    }
};
