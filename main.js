  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollX;
  const dt = new Date();

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("fixed-top");
    }else{
      nav.classList.remove("fixed-top");
    }

    // lastScrollY = window.scrollY;

  });
  
  
  document.getElementById("datE").innerHTML = dt.toDateString();


     

  // slidecard
  $(document).ready(function(){
    $('.sel').slick({
      accessibility: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }

      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,

        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
        }
      }]
    });
  });


  // mostlove
  var swiper = new Swiper(".mySwipers", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


  // imageAwal
  $('.center').slick({
    centerMode: true,
    arrows: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  var btnContain = document.getElementById("tabs")
  var btn = btnContain.getElementsByClassName("nav-link")

  for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
      var current = document.getElementsByClassName("active")
      current[0].className = current[0].className.replace(" active")
      this.className += " active"
    })
  }
