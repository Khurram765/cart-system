var list = document.getElementById("list")
var search = document.getElementById("search")
fetch("../products.json")
    .then(data => {
        return data.json()
    }).then(res => {
        res.forEach((products) => {
            list.innerHTML += `
        <div class="col-sm-6 col-md-4 col-12">
        <div class="card">
            <img src="${products.src}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${products.name}</h5>
              <p class="card-text">${products.price}</p>
              <a  class="btn btn-primary cart">Add To Cart</a>
            </div>
          </div>
      </div>
        `

        })
        ////////////////////// For Search System////////////////////////////////////////////
        search.addEventListener("keyup", () => {
            var regular = new RegExp(`${search.value}`, "ig")
            var card=document.querySelectorAll(".card") 
            var prinarr = []
            res.forEach((pro, indexxx) => {
                if (pro.name.match(regular)) {
                    card[indexxx].style.display="block"
                }else{
                    card[indexxx].style.display="none"
                }
            })
            
        })

        //////////////////////////// FOR ON LOAD SYSTEM//////////////////////////////////////////////////
        var cartbtn = document.querySelectorAll(".cart")
        var btn = document.querySelectorAll(".btn")
        var arr = []
        var badge = document.getElementById("badge")
        if (sessionStorage.getItem("cart")) {
            var newarr = JSON.parse(sessionStorage.getItem("cart"))
            newarr.forEach((item) => {
                arr.push(item)
                badge.innerHTML = arr.length
                btn[item.id].classList.add("disabled")
            })
        }


        Array.from(cartbtn).forEach((e, index) => {
            e.addEventListener("click", () => {
                arr.push(res[index])
                btn[index].classList.add("disabled")
                badge.innerHTML = arr.length
                sessionStorage.setItem("cart", JSON.stringify(arr))
            })
        })
        badge.addEventListener("click", () => {
            window.location.href = "./pages/cart.html"
        })
    })
    








