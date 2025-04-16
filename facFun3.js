 function createInventoryItem(name,category,price){
  return{
     name:name,
     category:category,
     price:price,
     describeItem:function(){
        console.log(`Item: ${this.name}\nCategory: ${this.category}\nPrice: $${this.price.toFixed(2)}`);
     }
  }
 }
//  createInventoryItem()
function addItemDiscount(inventoryItem, discountPercent) {
  
    inventoryItem.discountPercent = discountPercent;
    inventoryItem.discountPrice = inventoryItem.price - (inventoryItem.price * (discountPercent / 100));
  

    inventoryItem.applyDiscount = function () {
      this.discountPrice = this.price - (this.price * (this.discountPercent / 100));
      console.log(`Discounted price for ${this.name}: $${this.discountPrice.toFixed(2)}`);
    };
  
    return inventoryItem;
  }
  
  let item1 = createInventoryItem("Laptop", "Electronics", 1200);
  item1.describeItem(); 
  
  let discountedItem = addItemDiscount(item1, 15); 
  discountedItem.applyDiscount();