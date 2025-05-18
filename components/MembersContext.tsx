import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Member {
  id: string;
  nome: string;
  email: string;
  idade: number;
  matricula: string;
  imagem?: string;
}

interface MembersContextType {
  membros: Member[];
  addMember: (m: Member) => void;
  removeMember: (id: string) => void;
}

const MembersContext = createContext<MembersContextType | undefined>(undefined);

export function MembersProvider({ children }: { children: ReactNode }) {
  const [membros, setMembros] = useState<Member[]>([
    // membros iniciais podem ser colocados aqui se quiser
  ]);

  const addMember = (m: Member) => setMembros(prev => [...prev, m]);
  const removeMember = (id: string) => setMembros(prev => prev.filter(m => m.id !== id));

  return (
    <MembersContext.Provider value={{ membros, addMember, removeMember }}>
      {children}
    </MembersContext.Provider>
  );
}

export function useMembers() {
  const ctx = useContext(MembersContext);
  if (!ctx) throw new Error('useMembers deve ser usado dentro de MembersProvider');
  return ctx;
}
