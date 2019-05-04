$('#our-services-view').hide()
$('#testimonials-view').hide()
$('#flow-view').hide()
$('#home-view').hide()
$('#contact-view').hide()
$('#partner-view').hide()
$('#footer-view').hide()

$(document).ready(function(){
  $('.ui.menu')
    .visibility({
      type   : 'fixed'});
  
  $('.ui.dropdown')
    .dropdown();
    
    setTimeout(
      function(){
        $('.ui.menu.placeholder')
        .hide();
      }
      , 1000)
    setTimeout(function(){
      $('#home-view').transition('fly up')
      $('#footer-view').show()      
    },
    1500)  
})

$('.nav-home').on('click', function(){
  $('#contact-view').transition('hide')
  $('#partner-view').transition('hide')
  $('#our-services-view').transition('hide')
  $('#testimonials-view').transition('hide')
  $('#flow-view').transition('hide')
  if($("#home-view").is('hidden')){
    $('#home-view').transition('fly up').transition('stop')
  } else {
    $('#home-view').transition('pulse')
  }
})

$('.nav-testimonials').on('click', function(){
  $('#contact-view').transition('hide')
  $('#partner-view').transition('hide')
  $('#home-view').transition('hide')
  $('#our-services-view').transition('hide')
  $('#flow-view').transition('hide')
  if($('#testimonials-view').is('hidden')){
    $('#testimonials-view').transition('fly up').transition('stop')
  } else {
    $('#testimonials-view').transition('pulse')
  }
})

$('.nav-our-services').on('click', function(){
  $('#contact-view').transition('hide')
  $('#partner-view').transition('hide')
  $('#home-view').transition('hide')
  $('#flow-view').transition('hide')
  $('#testimonials-view').transition('hide')
  if($('#our-services-view').is('hidden')){
    $('#our-services-view').transition('fly up').transition('stop')
  } else {
    $('#our-services-view').transition('pulse')
  }
})

$('.nav-flow').on('click', function(){
  $('#contact-view').transition('hide')
  $('#partner-view').transition('hide')
  $('#home-view').transition('hide')
  $('#our-services-view').transition('hide')
  $('#testimonials-view').transition('hide')
  if($('#flow-view').is('hidden')){
    $('#flow-view').transition('fly up').transition('stop')
  } else {
    $('#flow-view').transition('pulse')
  }
})

$('.nav-contact').on('click', function(){
  $('#flow-view').transition('hide')
  $('#partner-view').transition('hide')
  $('#home-view').transition('hide')
  $('#our-services-view').transition('hide')
  $('#testimonials-view').transition('hide')
  if($('#contact-view').is('hidden')){
    $('#contact-view').transition('fly up').transition('stop')
  } else {
    $('#contact-view').transition('pulse')
  }
})

$('.nav-partner').on('click', function(){
  $('#flow-view').transition('hide')
  $('#contact-view').transition('hide')
  $('#home-view').transition('hide')
  $('#our-services-view').transition('hide')
  $('#testimonials-view').transition('hide')
  if($('#partner-view').is('hidden')){
    $('#partner-view').transition('fly up').transition('stop')
  } else {
    $('#partner-view').transition('pulse')
  }
})

