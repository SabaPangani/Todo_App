{/* <div class="list">
<div class="circle">
    <img src="/todo-app-main/images/icon-check.svg" alt="">
</div>
<p>Complete online JavaScript course</p>
</div> */}

var count = 0;
const todoList = document.querySelector(".todoList")
const todoInput = document.querySelector(".todoInput")
const pseudoAfter = document.querySelector(".list.circle::after")
console.log(pseudoAfter)
$(".todoInput").keydown(function(ev){
   if(ev.keyCode == 13 && todoInput.value != ""){
    var list  = document.createElement("div")
    list.classList.add("list")
    count++
    $(".itemsTxt").text(count + " items left")
    var circle  = document.createElement("div")
    circle.classList.add("circle")
    var circleImg = document.createElement("img")
    circleImg.classList.add("check")
    circleImg.setAttribute("src","/todo-app-main/images/icon-check.svg")
    var todoTxt  = document.createElement("p")
    todoTxt.classList.add("text")
    todoTxt.textContent = todoInput.value
    var closeBtn = document.createElement("img")
    closeBtn.setAttribute("src","/todo-app-main/images/icon-cross.svg")
    closeBtn.classList.add("closeBtn")
    closeBtn.addEventListener("click",function(){
        this.parentElement.remove()
        count--
        console.log(count)
        $(".itemsTxt").text(count + " items left")
    })
    list.appendChild(circle)
    list.appendChild(closeBtn)
    list.appendChild(todoTxt)
    circle.appendChild(circleImg)

    todoList.appendChild(list)

    circle.addEventListener("click",function(){
        this.firstChild.classList.toggle("active")

        if(this.firstChild.classList.contains("active")){
            list.lastChild.style.textDecoration = "line-through"
            list.lastChild.style.color = "#e3e4f147"
            circle.style.background = "linear-gradient(to right,hsl(192, 100%, 67%) , hsl(280, 87%, 65%))"

            list.classList.add("completed")

            if ($("body").hasClass("light")){
                list.lastChild.style.color = "hsl(233, 11%, 84%)"
            }
        }else{
            list.lastChild.style.textDecoration = "none"
            list.lastChild.style.color = "white"
            circle.style.background = "white"
            list.classList.remove("completed")

            if ($("body").hasClass("light")){
                list.lastChild.style.color = "#25273D"
            }
        }
    })
    todoInput.value = ""
   }
})

$(".statusBtn").click(function(){
    for (const btn of $(".statusBtn")) {
        if( $(this).css("color","hsl(220, 98%, 61%)")){
            $(btn).css("color","#e3e4f147")
            if ($("body").hasClass("light")){
                $(btn).css("color","hsl(236, 9%, 61%)")
            }
        }
        $(".statusBtn").click(function(){
            $(this).css("color","hsl(220, 98%, 61%)")
        })
    }
})

$(".completed").click(function(){
    const lists = document.querySelectorAll(".list")
    for (const item of lists) {
        if(item.classList.contains("completed")){
            item.style.display = "flex"
        }else if(item.classList.contains("completed") == false){
            item.style.display = "none"
        }
    }
})

$(".all").click(function(){
    const lists = document.querySelectorAll(".list")
    for (const item of lists) {
        item.style.display = "flex"
    }
})

$(".unDone").click(function(){
    const lists = document.querySelectorAll(".list")
    for (const item of lists) {
        if(item.classList.contains("completed")){
            item.style.display = "none"
        }else if(item.classList.contains("completed") == false){
            item.style.display = "flex"
        }
    }
})
var completedItems = []
$(".clearBtn").click(function(){
    const lists = document.querySelectorAll(".list")
    for (const item of lists) {
        if(item.classList.contains("completed")){
            completedItems.push(item)
            console.log(completedItems.length)
            count = count - completedItems.length
            $(".itemsTxt").text(count + " items left")
            completedItems.length = 0
            item.remove()
        }
    }
})

var icon = document.querySelector(".icon")
$(".icon").click(function(){
    $("body").toggleClass("light")

    if($("body").hasClass("light")){
        $(".icon").attr("src","todo-app-main/images/icon-sun.svg")
        $(header).style.backgroundImage = url(todo-app-main/images/bg-desktop-light.jpg);
    }else{
        $(".icon").attr("src","todo-app-main/images/icon-moon.svg")
    }
})