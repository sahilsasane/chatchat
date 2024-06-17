import { create } from "zustand";

const useConversations = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set((state) => {
        console.log("Updating messages in Zustand:", messages);
        return { messages };
    }),
}));

export default useConversations;