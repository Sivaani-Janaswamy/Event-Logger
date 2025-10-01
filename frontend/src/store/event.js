import {create} from "zustand";

export const useEventStore = create((set) => ({
    events: [],
    setEvents: (events) => set({events}),   
    createEvent: async (newEvent) => {
        if(!newEvent.title || !newEvent.date || !newEvent.time ||!newEvent.venue || !newEvent.image){
            return {success:false,message:"Please provide all fields"};
        }
        const res = await fetch("/api/events",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newEvent)
        });
        const data = await res.json();
        set((state) => ({events: [...state.events, data.data]}));
        return {success:true,message:"Event Created Successfully"};
    },
    fetchEvents: async () => {
        const res = await fetch("/api/events");
        const data = await res.json();
        set({events: data.data});
    }
}));