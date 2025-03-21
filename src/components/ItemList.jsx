import Item from "./Item/Item"

export default function ItemList({items}){
    return(
        <>
                {items.map(item => <Item product={ item } key={item.id}/>) }
        </>
    )
}