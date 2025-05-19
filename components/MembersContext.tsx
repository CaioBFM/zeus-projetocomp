// Contexto gloabal de membros, usando o React Context API (manipulação de dados na memória).
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Member {
  id: string;
  nome: string;
  dataNascimento: string;
  email: string;
  cargo: string;
  telefone: string;
  genero: string;
  dataIngresso: string;
  habilidades: string;
  imagem?: string;
}

interface MembersContextType {
  membros: Member[];
  addMember: (m: Member) => void;
  removeMember: (id: string) => void;
}

const MembersContext = createContext<MembersContextType | undefined>(undefined);

export function MembersProvider({ children }: { children: ReactNode }) {
  const [membros, setMembros] = useState<Member[]>(
    [
      {
        id: '1',
        nome: 'Lady Gaga',
        dataNascimento: '01/01/1990',
        email: 'gaga@zeus.com',
        cargo: 'Analista',
        telefone: '11999999999',
        genero: 'Feminino',
        dataIngresso: '01/01/2022',
        habilidades: 'Excel, Comunicação',
        imagem: 'https://snworksceo.imgix.net/tdl/542c7960-10ed-4dd3-bfda-8c4c963ecda6.sized-1000x1000.png?w=1000',
      },
      {
        id: '2',
        nome: 'Satoru Gojo',
        dataNascimento: '15/05/1985',
        email: 'satoru@zeus.com',
        cargo: 'Desenvolvedor',
        telefone: '11988888888',
        genero: 'Masculino',
        dataIngresso: '10/03/2021',
        habilidades: 'React, Node.js',
        imagem: 'https://cdn.pfps.gg/pfps/5051-gojo-manga.png',
      },
      {
        id: '3',
        nome: 'Batman',
        dataNascimento: '01/02/1975',
        email: 'batman@wayne.com',
        cargo: 'Detetive',
        telefone: '11977777777',
        genero: 'Masculino',
        dataIngresso: '01/01/2020',
        habilidades: 'Investigação, Estratégia',
        imagem: 'https://preview.redd.it/batman-profile-pics-v0-qrz10k9s6fid1.jpg?width=542&format=pjpg&auto=webp&s=2f848b2d6644cbb03e0116e28755cd7e0a63319a',
      },
      {
        id: '4',
        nome: 'Thomas Shelby',
        dataNascimento: '10/06/1890',
        email: 'thomas.shelby@peakyblinders.com',
        cargo: 'Líder',
        telefone: '11966666666',
        genero: 'Masculino',
        dataIngresso: '01/01/2019',
        habilidades: 'Liderança, Negociação',
        imagem: 'https://rollingstone.com.br/media/uploads/ciliian_murphy.jpg',
      },
    ]
  );

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
