import React, { createContext, useState, useContext, ReactNode } from 'react';
import { data as initialData, Person } from '../data';

type PeopleContextType = {
    people: Person[];
    addPerson: (person: Omit<Person, 'id'>) => void;
};

const PeopleContext = createContext<PeopleContextType | undefined>(undefined);

export function PeopleProvider({ children }: { children: ReactNode }) {
    const [people, setPeople] = useState<Person[]>(initialData);

    const addPerson = (newPersonData: Omit<Person, 'id'>) => {
        setPeople((prev) => {
            const maxId = prev.reduce((max, item) => (item.id > max ? item.id : max), 0);
            const newId = maxId + 1;
            const newPerson: Person = {
                id: newId,
                ...newPersonData,
            };

            return [...prev, newPerson];
        });
    };

    return (
        <PeopleContext.Provider value={{ people, addPerson }}>
            {children}
        </PeopleContext.Provider>
    );
}

export function usePeople() {
    const context = useContext(PeopleContext);
    if (!context) {
        throw new Error('usePeople deve ser usado dentro de um PeopleProvider');
    }
    return context;
}