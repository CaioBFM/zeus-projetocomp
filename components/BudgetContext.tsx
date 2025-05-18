import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Budget {
  id: string;
  numero: string;
  descricao: string;
  cliente: string;
  membro: string;
  valorEstimado: string;
  custosPrevistos: string;
  dataCriacaoOrcamento: string;
  status: string;
}

interface BudgetContextType {
  Budget: Budget[];
  addBudget: (b: Budget) => void;
  removeBudget: (id: string) => void;
  updateBudgetStatus: (id: string, status: string) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [Budget, setBudget] = useState<Budget[]>([]);

  const addBudget = (b: Budget) => setBudget(prev => [...prev, b]);
  const removeBudget = (id: string) => setBudget(prev => prev.filter(b => b.id !== id));
  const updateBudgetStatus = (id: string, status: string) => {
    setBudget(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  return (
    <BudgetContext.Provider value={{ Budget, addBudget, removeBudget, updateBudgetStatus }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const ctx = useContext(BudgetContext);
  if (!ctx) throw new Error('useBudget deve ser usado dentro de BudgetProvider');
  return ctx;
}
