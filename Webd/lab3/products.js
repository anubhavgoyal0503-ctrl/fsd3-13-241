export const addProduct=(item)=>{
    item.id=nextId;
    nextId++;
    products.push(item);
    return item;
};