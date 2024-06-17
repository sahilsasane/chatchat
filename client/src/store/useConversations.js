import { create } from "zustand";

const useConversations = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set((state) => {
        return { messages };
    }),
}));

export default useConversations;