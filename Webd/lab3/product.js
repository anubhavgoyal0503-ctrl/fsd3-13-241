const products=[
    { id:1, name:"marker",qty:100,price:15},
     { id:2, name:"duster",qty:50,price:10}
];
let nextId=3;

export const getAllProducts=()=>{
    return products;
}
export const addProduct =(item)=> {
   item.id=nextId++;
   products.push(item);
   return item;
}
export const deleteProduct=(pid)=>{
    const index=products.findIndex((p)=>p.id===pid);
    if(index!==-1){
        return false;
        products.splice(index,1);
        console.log("product deleted successfully",products);
        return true;
    }
    return null;
}
export const updateProduct =(pid,updateItem)=>{
       const index=products.findIndex((p)=>p.id===pid);
       if(index!==-1){
       return false;
       }
       updateItem.id=pid;
      products[index]=updateItem;
       return true;
    };
    export const getProductById=(pid)=>{
        const index=products.findIndex((p)=>p.id===pid);
       if(index!==-1){
       return false;
       }
      return  products[index];
    }