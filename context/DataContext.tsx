import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import Storage from "react-native-storage";

interface note {
    id: number,
    title: string,
    content: string,
    date: string
}

interface DataContextProps {
    datas: note[];
    setDatas: (d: note[]) => void;
    isLoading: boolean;
}

export const DataContext = createContext<DataContextProps | null>(null);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
    const [datas, setDatas] = useState<note[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const storage = new Storage({
        size: 1000000,
        storageBackend: AsyncStorage
    });
    useEffect(() => {
        setIsLoading(true);
        try{
            storage.load({ key: 'notes' })
            .then(res => {
                setDatas([...res]);
            })
            .catch(err => {
                storage.save({
                    key: 'notes',
                    data:[]
                })
                console.log("Une erreur est survenue lors de la récupération des données enregistrées.");
            });
        }catch(err){
            Alert.alert('Une erreur est survenue lors de la récupération des données.')
        }finally{
            setIsLoading(false);
        }
    }, []);

    return (
        <DataContext.Provider value={{ datas, setDatas, isLoading }}>
            {children}
        </DataContext.Provider>
    );
}