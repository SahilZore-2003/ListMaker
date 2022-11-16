

let makeList = ()=>{
    let item = document.querySelector('#item').value;
    let amount = document.querySelector('#amount').value;
    let quntity = document.querySelector('#quntity').value;
    
   
    // Create an "li" node:
    let order = `${item} ${amount} ${quntity}`;
  
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode(order);

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("list").appendChild(node);

document.getElementById('item').value = "";
document.getElementById('amount').value = "";

let lihas = document.getElementsByTagName('li').length;
 if(lihas>=1){
    document.getElementById('delete').style.display = "block";
 }
   
}

let cut =()=>{
    window.location.reload();
}