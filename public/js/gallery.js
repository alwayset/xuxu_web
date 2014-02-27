$(function() {
  AV.$ = jQuery;

  // Initialize AV with your AV application javascript keys
  AV.initialize("wzxcxb6x360ze0tcp0jrewnkz42ardd3wwnknfpgfl8k4huc",
                   "3reqogjfk7eyv86r2khbmzmakw9rmcfcj0la0pgfk270mmm7");


	var Picture = AV.Object.extend("Picture");

	  // Todo Collection
	  // ---------------

	  var Pictures = AV.Collection.extend({

	    // Reference to this collection's model.
	    model: Picture,

	  });

	  //var strPut = "";
	  
	  var collection = new Pictures();
	  var s = 0;
	  collection.fetch({
	    success: function(collection) {
	      collection.each(function(object) {
	      	s++;
	        //document.writeln(object.get("contentText")+"123\n");
	        var profilePhoto = object.get('image');
	        //strPut +="<img src="+profilePhoto.url()+"\">";

	        var img = document.createElement('img');
		    //span.id = '_attachment' + i;
		    img.src = profilePhoto.url();
		    img.style.width = '100px';
		    img.style.height = '100px';
		  
		    G('picturesWall').appendChild(img);
		  
	        //document.writeln("<img src=\""+profilePhoto.url()+"\"/>");
	      });
	    },
	    error: function(collection, error) {
	      // The collection could not be retrieved.
	    }
	  });
	  alert("共"+s +“张picture”)；
	  collection.comparator = function(object) {
	    return object.get("createdAt");
	  };
});