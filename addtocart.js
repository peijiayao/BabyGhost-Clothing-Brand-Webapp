const product = [
    {
        id: 1,
        image: 'image/product1.png',
        title: 'Signature Tracksuit Set Hot Pink',
        price: 95.99,
    },
    {
        id: 2,
        image: 'image/product2.png',
        title: 'Oil Pain Tracksuit Set Cream Pie',
        price: 105.99,
    },
    {
        id: 3,
        image: 'image/product3.png',
        title: 'Oil Paint Tracksuit Set Ice Age',
        price: 105.99,
    },
    {
        id: 4,
        image: 'image/product4.png',
        title: 'Wukong Tracksuit Set Midnight',
        price: 105.99,
    }
];
const categories = [...new Set(product.map((item)=>{return item}))]
    let i=1;
document.getElementById('root').innerHTML = categories.map((item)=>{
    var {image, title, price} = item;
    return{
    }
})