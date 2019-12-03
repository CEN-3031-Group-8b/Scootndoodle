import React, {useState, useContext, createContext} from 'react';
import {ShopPreview} from "./ShopPreview";
import {Cart} from "../Cart/Cart";

export const ShopContext = createContext();

export const ShopProvider = () => {
    const [tools, setTools] = useState([
        {
            name: 'Hippo',
            price: '9.95',
            color: 'green',
            id: '1'
        }
    ]);
    return(
        <ShopContext.Provider>
            <ShopPreview />
            <Cart />
        </ShopContext.Provider>
    );
}
