import React, {createContext, FC, useState} from 'react';

type dataContext = {
    squadFormation: string,
    setSF: (name:string) => void
}

const defaultData:dataContext ={
    squadFormation: "",
    setSF: ()=>{}
}
export const DataContext = createContext<dataContext>(defaultData)
const DataProvider:FC = ({children}) => {
    const [data, setData] = useState<string>(defaultData.squadFormation);
    const addData = (newData:string) => setData(newData)
    return (
        <DataContext.Provider  value={{squadFormation : data, setSF: addData}}  >
                {children}
        </DataContext.Provider>
    );
};

export default DataProvider
