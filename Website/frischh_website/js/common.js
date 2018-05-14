// Scrolling animation
// ======================================
AOS.init({
    easing: 'ease-in-out-sine'
  });

  setInterval(addItem, 300);

  var itemsCounter = 1;
  var container = document.getElementById('aos-demo');

  function addItem () {
    if (itemsCounter > 42) return;
    var item = document.createElement('div');
    item.classList.add('aos-item');
    item.setAttribute('data-aos', 'fade-up');
    item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
    if (container) {
      container.appendChild(item);
      itemsCounter++;
    }
  }


// Push Menu
// ======================================
  $(".button-collapse").sideNav();


// slider
// ======================================
  $(document).ready(function(){
    $('.slider').slider();
  });

// Select Box
// ======================================
  $(document).ready(function() {
    $('select').material_select();
  });


// hide-show (all screen)
// ======================================
  $(document).ready(function(){
      $(".all-screen").click(function(){
          $("#all-screen").fadeIn(500);
          $("#proto-type").fadeOut(500);
      });
  });
  $(document).ready(function(){
      $(".live-prt").click(function(){
          $("#all-screen").fadeOut(500);
          $("#proto-type").fadeIn(500);
      });
  });

// smooth scrolling page
// ======================================
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 3000, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


// Header apperance change scrolling page
// ======================================
  $(window).scroll(function() {
      if ($(this).scrollTop() > 1){
          $('nav').addClass("sticky");
      }
      else{
          $('nav').removeClass("sticky");
      }
  });
