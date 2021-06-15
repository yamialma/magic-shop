import React from 'react';
import { BannerPromos } from './BannerPromos';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = () => {
    return <div>
        <BannerPromos texto= "¡10% off pagando en efectivo o transferencia bancaria!"/>
        <ItemList />
    </div>
}