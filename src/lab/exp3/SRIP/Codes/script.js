(function(root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
	  
    define(function(){
		
      return factory(root, root.document)
		
    })
  } else if (typeof exports === 'object') {
	  
    module.exports = root.document ? factory(root, root.document) : function(w){ return factory(w, w.document) }
	
  } 
	else {
		
    root.SVG = factory(root, root.document)
		
  }
}(typeof window !== "undefined" ? window : this, function(window, document) {


var globalRef = (typeof this !== "undefined") ? this : window;


var SVG = globalRef.SVG = function(element) {
	
  if (SVG.supported) {
    element = new SVG.Doc(element)

    if(!SVG.parser.draw)
		
      SVG.prepare()

    return element
  }
}

SVG.invent = function(config) {
	
  // Create element initializer
	
  var initializer = typeof config.create == 'function' ?
	  
    config.create :
    function() {
		
      this.constructor.call(this, SVG.create(config.create))
    }

  // Inherit prototype
  if (config.inherit)
	  
    initializer.prototype = new config.inherit

  // Extend with methods
  if (config.extend)
	  
    SVG.extend(initializer, config.extend)

  // Attach construct method to parent
  if (config.construct)
	  
    SVG.extend(config.parent || SVG.Container, config.construct)

  return initializer
}