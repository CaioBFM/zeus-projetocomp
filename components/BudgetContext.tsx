// Contexto global de orçamentos, usando o React Context API.
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Formato dos orçamentos
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
  const [Budget, setBudget] = useState<Budget[]>([]); // state que guarda todos os orçamentos

  const addBudget = (b: Budget) => setBudget(prev => [...prev, b]);
  const removeBudget = (id: string) => setBudget(prev => prev.filter(b => b.id !== id));
  const updateBudgetStatus = (id: string, status: string) => {
    setBudget(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  // Provider do contexto para componentes filhos
  return (
    <BudgetContext.Provider value={{ Budget, addBudget, removeBudget, updateBudgetStatus }}>
      {children}
    </BudgetContext.Provider>
  );
}
// Facilitar acesso ao contexto (tratamento de excessôes)
export function useBudget() {
  const ctx = useContext(BudgetContext);
  if (!ctx) throw new Error('useBudget deve ser usado dentro de BudgetProvider');
  return ctx;
}
