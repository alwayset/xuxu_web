var imgsArr = new  Array();

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
		    	imgDiv.style.width = '160px';
			    imgDiv.style.height = '240px';
				imgDiv.style.float = 'left';
				imgDiv.style.align = 'center';
				imgDiv.setAttribute("picObject",object); // 设置  
			    G('picturesWall').appendChild(imgDiv);
				
				//if (i<5) alert(imgDiv.attributes["picObject"].nodeValue);
				
	        	var img = document.createElement('img');
		    	img.src = profilePhoto.url();
		    	img.style.width = '150px';
			    img.style.height = '200px';
			    G('imgDiv' + i).appendChild(img);
				
				var del = document.createElement('input');
				del.id = 'del'+i;
				del.type = 'button';
				del.value = '删除';
				del.onclick = function (e){
					var currentPic = e.target.parentNode.attributes["picObject"].nodeValue;
					alert(currentPic);
					alert(currentPic.get('objectId'));
					currentPic.destroy({
					  success: function(currentPic) {
						// The object was deleted from the AVOS Cloud.
						alert("删除成功");
					  },
					  error: function(currentPic, error) {
						// The delete failed.
						// error is a AV.Error with an error code and description.
					  }
					});
					alert(e.target.parentNode.id);
				}; 
			    G('imgDiv' + i).appendChild(del);
			}
  		},
  		error: function(error) {
    		alert("Error: " + error.code + " " + error.message);
  		}	
	});
});