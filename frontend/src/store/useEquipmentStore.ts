import { create } from "zustand";
import type { Equipment } from "../types";

type EquipmentCategoryMap = {
  [category: string]: Equipment[];
};

type EquipmentState = {
  categories: EquipmentCategoryMap;

  // getters
  getAllEquipments: () => Equipment[];
  getByCategory: (category: string) => Equipment[];

  // actions
  addEquipment: (equipment: Equipment) => void;
  setCategoryEquipments: (category: string, equipments: Equipment[]) => void;
  removeEquipment: (id: number) => void;
};

export const useEquipmentStore = create<EquipmentState>((set, get) => ({
  categories: {
    Printer: [
      {
        id: 1,
        name: "Printer 01",
        category: "Printer",
        team: "IT",
        location: "Floor 2",
      },
      {
        id: 2,
        name: "Printer 02",
        category: "Printer",
        team: "IT",
        location: "Floor 1",
      },
    ],

    AC: [
      {
        id: 3,
        name: "AC Unit 01",
        category: "AC",
        team: "Electrical",
        location: "Roof",
      },
      {
        id: 4,
        name: "AC Unit 02",
        category: "AC",
        team: "Electrical",
        location: "Server Room",
      },
    ],

    Oven: [
      {
        id: 5,
        name: "Oven 01",
        category: "Oven",
        team: "Maintenance",
        location: "Cafeteria",
      },
    ],
  },

  // 🔹 flatten all equipments (useful for dashboard)
  getAllEquipments: () => {
    const categories = get().categories;
    return Object.values(categories).flat();
  },

  // 🔹 category-wise access
  getByCategory: (category) => {
    return get().categories[category] || [];
  },

  // 🔹 add equipment safely
  addEquipment: (equipment) =>
    set((state) => {
      const { category } = equipment;

      return {
        categories: {
          ...state.categories,
          [category]: state.categories[category]
            ? [...state.categories[category], equipment]
            : [equipment],
        },
      };
    }),

  // 🔹 replace full category (useful for backend sync)
  setCategoryEquipments: (category, equipments) =>
    set((state) => ({
      categories: {
        ...state.categories,
        [category]: equipments,
      },
    })),

  // 🔹 delete equipment globally
  removeEquipment: (id) =>
    set((state) => {
      const updatedCategories: EquipmentCategoryMap = {};

      for (const category in state.categories) {
        updatedCategories[category] = state.categories[category].filter(
          (eq) => eq.id !== id
        );
      }

      return { categories: updatedCategories };
    }),
}));
