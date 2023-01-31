// Submit Button For Rating
  const button = document.querySelector("#submit-button");
  button.addEventListener("click", function(){
    alert("Thanks For Rating.....");
  });


 // PreLoader For web
  window.addEventListener("load", function() {
      setTimeout(function (){
        const preloader = document.querySelector(".preloader");
        preloader.style.display = "none";
      },2000);// 2000ms = 2 seconds
  });
  
  window.addEventListener("load", function() {
      setTimeout(function (){
        document.getElementById("spinner").style.display = "none";
      },2000);// 2000ms = 2 seconds
  });

  window.addEventListener("beforeunload", function() {
      setTimeout(function (){
          document.getElementById("spinner").style.display = "block";
      },2000); // 2000ms = 2 seconds
  });

  
