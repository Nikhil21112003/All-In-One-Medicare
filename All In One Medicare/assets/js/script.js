

$(document).ready(function(){
    $('.feedback-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
    });

    // stop animation on resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    $('.navbar-show-btn').click(function(){
        $('.navbar-box').addClass('navbar-box-show');
    });

    $('.navbar-hide-btn').click(function(){
        $('.navbar-box').removeClass("navbar-box-show");
    })
});



$('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(800);
    
  });



//   login js 

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


// search bar js 

// let availableKeywords = [
//   //     'HTML',
//   //     'CSS',
//   //     'Code Artistic',
//   // '    Web Design Tutorial',
//   //     'JavaScript',
//   //     'Where to learn coding online',
//   //    ' Where to learn Web design',
//   //     'Where to learn a Website',
//   //     'Where to learn HTML',
//       'sanjivani hospital'
//   ];
  
//   const resultbox = document.querySelector('.result-box');
//   const inputBox = document.getElementById('input-box');
  
//   inputBox.onkeyup = function(){
//       let result = [];
//       let input = inputBox.value;
//       if(input.length){
//           result = availableKeywords.filter((keyword)=>{
//              return keyword.toLowerCase().includes(input.toLowerCase());
//           });
//           console.log(result);
//       }
//       display(result);
  
//       if(!result.length){
//           resultbox.innerHTML = '';
//       }
//   }
  
//   function display(result){
//       const content = result.map((list)=>{
//           return "<li onclick=selectInput(this)>" + list + "</li>";
  
//       });
  
//       resultbox.innerHTML = "<ul>" + content.join('')  + "</ul>" 
//   }
//   function selectInput(list){
//       inputBox.value = list.innerHTML;
//       resultbox.innerHTML = '';
//   }