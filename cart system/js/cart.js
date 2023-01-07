var get=JSON.parse(sessionStorage.getItem("cart"))
window.addEventListener("load",()=>{
    var tableBody=document.getElementById("tablebody")
    get.forEach((item,ind)=>{
        var total= parseInt(item.price)*item.count
        tableBody.innerHTML += `
            <tr>
               <td  scope="row"><img src=".${item.src}" alt=""></td>
               <td>${item.name}</td>
               <td class="price" id="price">${item.price}</td>
               <td ><button onclick="incriment(${ind})" class="incriment">+</button><input style="width: 40%;" type="number" value=${item.count} class="input"><button onclick="decriment(${ind})" class="decriment">-</button></td>
               <td class="totaltwo" id="total">${total}<span style="margin-left:40px;"><button onclick="deletee(${ind})" class="delete">Delete</button></span></td>
             </tr>
        `
    })
})
function deletee(i){
    var getValues=JSON.parse(sessionStorage.getItem("cart"))
    getValues.splice(i,1)
    sessionStorage.setItem("cart",JSON.stringify(getValues))
    var printValues=JSON.parse(sessionStorage.getItem("cart"))
    var tableBody=document.getElementById("tablebody")
    tableBody.innerHTML=""
    printValues.forEach((item,ind)=>{
        var total= parseInt(item.price)*item.count
        tableBody.innerHTML += `
            <tr>
               <td  scope="row"><img src=".${item.src}" alt=""></td>
               <td>${item.name}</td>
               <td class="price" id="price">${item.price}</td>
               <td ><button onclick="incriment(${ind})" class="incriment">+</button><input style="width: 40%;" type="number" value=${item.count} class="input"><button onclick="decriment(${ind})" class="decriment">-</button></td>
               <td class="totaltwo" id="total">${total}<span style="margin-left:40px;"><button onclick="deletee(${ind})" class="delete">Delete</button></span></td>
             </tr>
        `
    })
}

function incriment (j){
    var price=document.querySelectorAll(".price")
    var totalTwo=document.querySelectorAll(".totaltwo")
    var input=document.querySelectorAll(".input")
    input[j].value= ++input[j].value
    var newPrice=parseInt( price[j].innerHTML)
    totalTwo[j].innerHTML=newPrice*input[j].value + `<span style="margin-left:40px;"><button onclick="deletee(${j})" class="delete">Delete</button></span>`
    var incrUpdate=JSON.parse(sessionStorage.getItem("cart"))
    incrUpdate[j].count=parseInt(input[j].value)
    sessionStorage.setItem("cart",JSON.stringify(incrUpdate))
}
function decriment(k){
    var price=document.querySelectorAll(".price")
    var totalTwo=document.querySelectorAll(".totaltwo")
    var input=document.querySelectorAll(".input")
    input[k].value= --input[k].value
    var newPrice=parseInt( price[k].innerHTML)
    totalTwo[k].innerHTML=newPrice*input[k].value + `<span style="margin-left:40px;"><button onclick="deletee(${k})" class="delete">Delete</button></span>`
    var decrUpdate=JSON.parse(sessionStorage.getItem("cart"))
    decrUpdate[k].count=parseInt(input[k].value)
    sessionStorage.setItem("cart",JSON.stringify(decrUpdate))
}