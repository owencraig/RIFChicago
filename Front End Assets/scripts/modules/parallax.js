// add data-scroll-speed as an attribute to the html element you want to affect

//calculates element's distance from top of viewport, not top of page    
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      var distance = inst.el.offset().top - scrollTop;
      inst.update(distance);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(y){
  var pos = y / this.speed;
  this.el.css('transform', 'translateY(' + pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});
    
