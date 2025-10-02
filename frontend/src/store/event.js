import { create } from "zustand";

export const useEventStore = create((set) => ({
  events: [],
  setEvents: (events) => set({ events }),

  createEvent: async (newEvent) => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.venue || !newEvent.image) {
      return { success: false, message: "Please provide all fields" };
    }
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      if (!res.ok) throw new Error("Failed to create event.");

      const data = await res.json();
      set((state) => ({ events: [...state.events, data.data] }));
      return { success: true, message: "Event Created Successfully" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  fetchEvents: async () => {
    try {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Failed to fetch events.");
      const data = await res.json();
      set({ events: data.data });
    } catch (error) {
      console.error("fetchEvents error:", error);
    }
  },

  deleteEvent: async (id) => {
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete event.");

      set((state) => ({
        events: state.events.filter((event) => event._id !== id), // ✅ fixed
      }));
      return { success: true, message: "Event Deleted Successfully" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  updateEvent: async (id, updatedEvent) => {
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });

      if (!res.ok) throw new Error("Failed to update event.");

      const data = await res.json();
      set((state) => ({
        events: state.events.map((event) =>
          event._id === id ? data.data : event // ✅ fixed
        ),
      }));
      return { success: true, message: "Event Updated Successfully" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
}));
