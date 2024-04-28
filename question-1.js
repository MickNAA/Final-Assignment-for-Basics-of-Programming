// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.find(item => item.name === 'apple').quantity = 200
inventory.push({ name: 'orange', price: 20, quantity: 300 })

let totalValue = 0

inventory.forEach(item => {
  totalValue += item.price * item.quantity;
})

console.log(`Total inventory value: ${totalValue} bath`)