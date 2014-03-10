/*
var i = -1;
var objectsArr = new  Array();
function clickPic(x)
{
    //alert("click");
    //alert(x);
    //alert("length="+objectsArr.length);
	  //var object = objectsArr[x];
    //alert(objectsArr[x]);
	  //alert(objectsArr[x].get("objectId"));
	  objectsArr[x].set("featuredAt",new Date());
	  objectsArr[x].save();
    alert("推荐成功！");
}
*/
$(function() {
  AV.$ = jQuery;

  // Initialize AV with your AV application javascript keys
  AV.initialize("wzxcxb6x360ze0tcp0jrewnkz42ardd3wwnknfpgfl8k4huc",
                   "3reqogjfk7eyv86r2khbmzmakw9rmcfcj0la0pgfk270mmm7");



  // Our basic Todo model has `content`, `order`, and `done` attributes.
  var PaWallObject = AV.Object.extend("PaWallObject");

  
  var query = new AV.Query(PaWallObject);
	query.descending("createdAt");
	query.limit(100);
	query.find({
  		success: function(results) {
    		for (var i = 0; i < results.length; i++) {
      			var object = results[i];
      			var profilePhoto = object.get('image');

				var imgDiv = document.createElement('div');
				imgDiv.id = 'imgDiv' + i;
		    	imgDiv.style.width = '320px';
			    imgDiv.style.height = '480px';
				imgDiv.style.float = 'left';
				imgDiv.style.align = 'center';
				imgDiv.picObject = object;
			    G('picturesWall').appendChild(imgDiv);
				
				
	        	var img = document.createElement('img');
		    	img.src = profilePhoto.url();
		    	img.style.width = '300px';
			    img.style.height = '400px';
			    G('imgDiv' + i).appendChild(img);
				
				
				var feature = document.createElement('input');
				feature.id = 'feature'+i;
				feature.type = 'button';
				feature.value = '推荐';
				feature.onclick = function (e){
					imgDiv.picObject.set("featuredAt",new Date());
					imgDiv.picObject.save();
				}; 
			    G('imgDiv' + i).appendChild(feature);
				/*
				var del = document.createElement('input');
				del.id = 'del'+i;
				del.type = 'button';
				del.value = '删除';
				del.onclick = function (e){
					var currentPic = e.target.parentNode.picObject;
					var currentFile = currentPic.get('image');
					currentPic.destroy({
					  success: function(currentPic) {
						// The object was deleted from the AVOS Cloud.
						currentFile.destroy({
							success: function(currentFile){
								alert("删除成功");
							},
							error: function(currentFile, error) {
							}
						});
					  },
					  error: function(currentPic, error) {
						// The delete failed.
						// error is a AV.Error with an error code and description.
					  }
					});
				}; 
			    G('imgDiv' + i).appendChild(del);
				*/
				
				
			}
  		},
  		error: function(error) {
    		alert("Error: " + error.code + " " + error.message);
  		}	
	});

});

