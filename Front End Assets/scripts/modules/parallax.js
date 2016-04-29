// add data-scroll-speed as an attribute to the html element you want to affect


$(window).on('scroll', function () {
    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('#my-element').offset().top,
        distance      = (elementOffset - scrollTop);
    });
    
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});
    
