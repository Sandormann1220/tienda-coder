import { getFirestore,
          collection, 
          getDocs, 
          query, 
          where,
          doc, 
          getDoc } 
          from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

// import { collection, getDocs } from "firebase/firestore"; 
export const getProducts = async() => {

     const querySnapshot = await getDocs(collection(db, "products"));
     const productos = []

     querySnapshot.forEach((doc) => {
          console.log(doc.data())
          productos.push({...doc.data(), id: doc.id})
          console.log(`id:${doc.id} => ${doc.data()}`);

          return productos
    });

}
export const getProductsByCategory= async(categoria) => {
     const q = query(collection(db, "products"), where("categoria", "==", categoria));

     const querySnapshot = await getDocs(q);
     const productos = []

     querySnapshot.forEach((doc) => {
          console.log(doc.data())
          productos.push({id: doc.id, ...doc.data()})
          console.log(`${doc.id} => ${doc.data()}`);

          return productos
    });


}

export const getProduct = async(id)=>{
          const docRef = doc(db, "products", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
               return{...docSnap.data(), id:docSnap.id};
          } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
     }

}
