import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Storage from "react-native-storage";

type ThemeContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    toggleTheme: () => void
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'clair',
    setTheme: () => {},
    toggleTheme: () => {}
});

export const ThemeContextProvider = ({children}:{children: ReactNode}) =>{
    const storage = new Storage({
        size: 1000,
        storageBackend: AsyncStorage
    });
    const [theme, setTheme] = useState<string>('clair');
    const toggleTheme = () => {
        setTheme(theme === 'clair' ? 'sombre' : 'clair');
        storage.load({key: 'theme'})
        .then((res)=>{
            storage.save({
                key: 'theme',
                data: [theme === 'clair' ? 'sombre' : 'clair']
            })
            .then(()=>{
                setTheme(theme === 'clair' ? 'sombre' : 'clair')
            })
        }).catch(err => {

        })        
    }
    useEffect(()=>{
        storage.load({
            key: 'theme'
        })
        .then((res)=>{
            setTheme(res[0])
        })
        .catch(err => {
            storage.save({
                key: 'theme',
                data: [theme]
            })
        })
    }, [])

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}