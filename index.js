//store the products array in localstorage as "products"
function myData(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function store(){
    event.preventDefault();
    console.log("clicked");
    // var products=document.getElementById("products").value;
    var type=products.type.value;
    var desc=products.desc.value;
    var price=products.price.value;
    var image=products.image.value;
    var arr=[];
    
    let d1=new myData(type,desc,price,image);
    arr.push(d1);
    localStorage.setItem("productData",JSON.stringify(arr));
}


 function myButton(){
        location.href="file:///C:/Code/unit-3-c-1/inventory.html"   ;
}
