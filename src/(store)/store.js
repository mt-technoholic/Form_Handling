import { create } from "zustand";

const useStore = create((set) => ({
    role: "landlord",
    setRole: (newRole) => {
        set(state => {
            return {
                ...state,
                role: newRole
            }
        })
    },
}));


export default useStore;