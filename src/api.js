const API_URL = "https://environmental-tedi-dharmacoders-6aad2d67.koyeb.app/chat";

export const sendMessage = async (message) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
