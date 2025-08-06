import { createContext, ReactNode, useState } from "react";

export const ContextMenuVisibility = createContext<ContextMenuVisibilityProps>({
    visible: false,
    setVisibility: () => {}
});

interface ContextMenuVisibilityProps{
    visible: boolean;
    setVisibility: (v: boolean) => void;
}

export function ContextMenuVisibilityProvider({children}:{children: ReactNode}){
    const [visible, setVisibility] = useState<boolean>(false);

    return (
        <ContextMenuVisibility.Provider value={{visible, setVisibility}}>
            {children}
        </ContextMenuVisibility.Provider>
    );
}