$(function() {
  AV.$ = jQuery;

  // Initialize AV with your AV application javascript keys
  AV.initialize("wzxcxb6x360ze0tcp0jrewnkz42ardd3wwnknfpgfl8k4huc",
                   "3reqogjfk7eyv86r2khbmzmakw9rmcfcj0la0pgfk270mmm7");


	var Picture = AV.Object.extend("Picture");

	  // Todo Collection
	  // ---------------


	var query = new AV.Query(Picture);
	//query.equalTo("playerName", "Dan Stemkoski");
	query.descending("createdAt");
	query.limit(100);
	query.find({
  		success: function(results) {
    		//alert("Successfully retrieved " + results.length + " pictures.");
    		// Do something with the returned AV.Object values
    		for (var i = 0; i < results.length; i++) {
      			var object = results[i];
      			var profilePhoto = object.get('image');

				var imgDiv = document.createElement('div');
				imgDiv.id = 'imgDiv' + i;
		    	imgDiv.style.width = '75px';
			    imgDiv.style.height = '120px';
			    G('picturesWall').appendChild(imgDiv);
				
	        	var img = document.createElement('img');
		    	img.src = profilePhoto.url();
		    	img.style.width = '75px';
			    img.style.height = '100px';
			    G('imgDiv' + i).appendChild(img);
				
				var del = document.createElement('input');
				del.type = 'button';
			    G('imgDiv' + i).appendChild(del);
			}
  		},
  		error: function(error) {
    		alert("Error: " + error.code + " " + error.message);
  		}	
	});
});