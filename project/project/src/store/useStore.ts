import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LabRequest, TechnicalAnalysis, User, ChemicalProduct } from '../types';

interface Store {
  currentUser: {
    name: string;
    role: string;
  } | null;
  requests: LabRequest[];
  analyses: TechnicalAnalysis[];
  users: User[];
  products: ChemicalProduct[];
  notifications: Array<{
    id: string;
    message: string;
    read: boolean;
    date: Date;
  }>;
  setCurrentUser: (user: { name: string; role: string; } | null) => void;
  addRequest: (request: LabRequest) => void;
  updateRequest: (id: string, request: Partial<LabRequest>) => void;
  addAnalysis: (analysis: TechnicalAnalysis) => void;
  updateAnalysis: (id: string, analysis: Partial<TechnicalAnalysis>) => void;
  addProduct: (product: ChemicalProduct) => void;
  updateProduct: (id: string, product: Partial<ChemicalProduct>) => void;
  addNotification: (message: string) => void;
  markNotificationAsRead: (id: string) => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      currentUser: null,
      requests: [],
      analyses: [],
      users: [],
      products: [],
      notifications: [],
      setCurrentUser: (user) => set({ currentUser: user }),
      addRequest: (request) =>
        set((state) => ({
          requests: [...state.requests, request],
        })),
      updateRequest: (id, request) =>
        set((state) => ({
          requests: state.requests.map((r) =>
            r.id === id ? { ...r, ...request } : r
          ),
        })),
      addAnalysis: (analysis) =>
        set((state) => ({
          analyses: [...state.analyses, analysis],
        })),
      updateAnalysis: (id, analysis) =>
        set((state) => ({
          analyses: state.analyses.map((a) =>
            a.id === id ? { ...a, ...analysis } : a
          ),
        })),
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),
      updateProduct: (id, product) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...product } : p
          ),
        })),
      addNotification: (message) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            {
              id: crypto.randomUUID(),
              message,
              read: false,
              date: new Date(),
            },
          ],
        })),
      markNotificationAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        })),
    }),
    {
      name: 'lab-storage',
    }
  )
);