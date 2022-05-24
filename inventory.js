var myData=JSON.parse(localStorage.getItem("productData")) || [];
console.log(myData)
console.log(myData.length)
myData.forEach(function(el,index){
    var div=document.createElement("div");
    
    let img=document.createElement("img");
    img.src=el.image;
    let t=document.createElement("p");
    let d=document.createElement("p")
    let p=document.createElement("p")
    t.innerText=el.type;
    d.innerText=el.desc;
    p.innerText=el.price;
    var btnn=document.createElement("button");
    btnn.innerText="Remove Item"
    btnn.addEventListener("click",function(){
        remove(index);
    })
    div.append(img,t,d,p,btnn);
    all_products.append(div);


})
function remove(index){
    var myData=JSON.parse(localStorage.getItem("productData")) || [];
    let newData=myData.filter(function(el,i){
        if(i==index){
        let bin=JSON.parse(localStorage.getItem("bin")) || [];
        bin.push(el)
        localStorage.setItem("trash",JSON.stringify(trash));
        }
        return i !== index;
    })
    
    document.querySelector
    localStorage.removeItem(myData)
    console.log("removed")
}
localStorage.setItem("nd",JSON.stringify(newData));
append();
 

    
