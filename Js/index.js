var high=document.querySelectorAll(".h2");
      window.addEventListener("scroll",checkboxes);
      checkboxes();
      function checkboxes(){
          const triggerBottom=window.innerHeight/5*3.5;        
          high.forEach(box =>{
              const hightop=box.getBoundingClientRect().top;
              if(hightop<=triggerBottom){
                  box.classList.add("highlight");
              }
              else if(hightop>triggerBottom){
                  box.classList.remove("highlight");
              }
          });
      }

      var high1=document.querySelectorAll(".s1");
      window.addEventListener("scroll",checkboxes2);
      checkboxes2();
      function checkboxes2(){
          const triggerBottom=window.innerHeight/5*5;        
          high1 .forEach(box =>{
              const hightop=box.getBoundingClientRect().top;
              if(hightop<=triggerBottom){
                  box.classList.add("up");
              }
              else if(hightop>triggerBottom){
                  box.classList.remove("up");
              }
          });
      }


var close=document.getElementsByClassName("close");


document.getElementById("Personal1").addEventListener("click",function(){
    document.getElementById("Personal").classList.add("down");
    document.getElementById("Personal_popup").style.visibility="visible";
});

for(var i=0;i<close.length;i++){
    close[i].addEventListener("click",function(){
        document.getElementById("Personal").classList.remove("down")
        document.getElementById("Personal_popup").style.visibility="hidden";
    })
}


document.getElementById("Filmography1").addEventListener("click",function(){
    document.getElementById("Filmography").classList.add("down");
    document.getElementById("Filmography_popup").style.visibility="visible";
});

for(var i=0;i<close.length;i++){
    close[i].addEventListener("click",function(){
        document.getElementById("Filmography").classList.remove("down")
        document.getElementById("Filmography_popup").style.visibility="hidden";
    })
}



document.getElementById("Music1").addEventListener("click",function(){
    document.getElementById("Music").classList.add("down");
    document.getElementById("Music_popup").style.visibility="visible";
});

for(var i=0;i<close.length;i++){
    close[i].addEventListener("click",function(){
        document.getElementById("Music").classList.remove("down")
        document.getElementById("Music_popup").style.visibility="hidden";
    })
}



document.getElementById("Biography1").addEventListener("click",function(){
    document.getElementById("Biography").classList.add("down");
    document.getElementById("Biography_popup").style.visibility="visible";
});

for(var i=0;i<close.length;i++){
    close[i].addEventListener("click",function(){
        document.getElementById("Biography").classList.remove("down")
        document.getElementById("Biography_popup").style.visibility="hidden";
    })
}



var early=document.getElementById("early1").addEventListener("click",function(){
    document.getElementById("early").classList.add("active");
    document.getElementById("Rising").classList.remove("active");
    document.getElementById("Drugs").classList.remove("active");
    document.getElementById("Turning").classList.remove("active");

    document.getElementById("early1").classList.add("active2");
    document.getElementById("Rising1").classList.remove("active2");
    document.getElementById("Drugs1").classList.remove("active2");
    document.getElementById("Turning1").classList.remove("active2");
})

var Rising=document.getElementById("Rising1").addEventListener("click",function(){
    document.getElementById("Rising").classList.add("active");
    document.getElementById("early").classList.remove("active");
    document.getElementById("Drugs").classList.remove("active");
    document.getElementById("Turning").classList.remove("active");


    document.getElementById("early1").classList.remove("active2");
    document.getElementById("Rising1").classList.add("active2");
    document.getElementById("Drugs1").classList.remove("active2");
    document.getElementById("Turning1").classList.remove("active2");
})
var Drugs=document.getElementById("Drugs1").addEventListener("click",function(){
    document.getElementById("Drugs").classList.add("active");
    document.getElementById("Rising").classList.remove("active");
    document.getElementById("early").classList.remove("active");
    document.getElementById("Turning").classList.remove("active");



    document.getElementById("early1").classList.remove("active2");
    document.getElementById("Rising1").classList.remove("active2");
    document.getElementById("Drugs1").classList.add("active2");
    document.getElementById("Turning1").classList.remove("active2");
})


var Turning=document.getElementById("Turning1").addEventListener("click",function(){
    document.getElementById("Turning").classList.add("active");
    document.getElementById("Drugs").classList.remove("active");
    document.getElementById("Rising").classList.remove("active");
    document.getElementById("early").classList.remove("active");
    
    
    document.getElementById("early1").classList.remove("active2");
    document.getElementById("Rising1").classList.remove("active2");
    document.getElementById("Drugs1").classList.remove("active2");
    document.getElementById("Turning1").classList.add("active2");
})


document.getElementById("reveal_movies").addEventListener("click",function(){
    document.getElementById("other_movies").classList.toggle("reveal_movies");
})




document.getElementById("first_popup_item").addEventListener("click",function(){
    document.getElementById("first_popup_target").classList.toggle("popup_item_reveal_click");  
});




document.getElementById("second_popup_item").addEventListener("click",function(){
    document.getElementById("second_popup_target").classList.toggle("popup_item_reveal_click");  
});


document.getElementById("third_popup_item").addEventListener("click",function(){
    document.getElementById("third_popup_target").classList.toggle("popup_item_reveal_click");  
});