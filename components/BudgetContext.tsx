import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Budget {
  id: string;
  numero: string;
  descricao: string;
  valorEstimado: string;
  status: string;
  cliente: string;
}

interface BudgetContextType {
  Budget: Budget[];
  addBudget: (m: Budget) => void;
  removeBudget: (id: string) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [Budget, setBudget] = useState<Budget[]>([
    // Budget iniciais podem ser colocados aqui se quiser
  ]);

  const addBudget = (m: Budget) => setBudget(prev => [...prev, m]);
  const removeBudget = (id: string) => setBudget(prev => prev.filter(m => m.id !== id));

  return (
    <BudgetContext.Provider value={{ Budget, addBudget, removeBudget }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const ctx = useContext(BudgetContext);
  if (!ctx) throw new Error('useBudget deve ser usado dentro de BudgetProvider');
  return ctx;
}
