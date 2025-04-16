
 async function displayProduct(){
      try{
        let res = await fetch("https://fakestoreapi.com/products")
           data = await res.json()
        console.log(data)
      }catch(error){
        console.log("Failed to fetch products. Please try again later" ,error)

      }finally{
        let totalPrice = data.reduce((acc,product) => {
            return acc + product.price;
        }, 0);
        console.log(Math.floor(totalPrice));
      }
     
 }
 displayProduct()