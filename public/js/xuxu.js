var i = -1;
var objectsArr = new  Array();
function clickPic(x)
{
    alert("click");
    alert(x);
    alert("length="+objectsArr.length);
	  //var object = objectsArr[x];
    alert(objectsArr[x]);
	  alert(objectsArr[x].get("objectId"));
	  objectsArr[x].set("featuredAt",new Date());
	  objectsArr[x].save();
}
$(function() {
  AV.$ = jQuery;

  // Initialize AV with your AV application javascript keys
  AV.initialize("wzxcxb6x360ze0tcp0jrewnkz42ardd3wwnknfpgfl8k4huc",
                   "3reqogjfk7eyv86r2khbmzmakw9rmcfcj0la0pgfk270mmm7");

  // Todo Model
  // ----------

  // Our basic Todo model has `content`, `order`, and `done` attributes.
  var PaWallObject = AV.Object.extend("PaWallObject");

  // Todo Collection
  // ---------------

  var PaWallObjects = AV.Collection.extend({

    // Reference to this collection's model.
    model: PaWallObject,

  });

  //var strPut = "";
  


  var collection = new PaWallObjects();
  collection.fetch({
    success: function(collection) {
      collection.each(function(object) {
	      i++;
        objectsArr.push(object);
        var profilePhoto = object.get("thumbnail");
        //strPut +="<img src="+profilePhoto.url()+"\">";
        //alert(profilePhoto.url());
        document.writeln("<img src=\""+profilePhoto.url()+"\" />");
        document.writeln("<input type='button' value='推荐' onclick='javascript:clickPic("+i+")' />");
		alert("<input type='button' value='推荐' onclick='clickPic("+i+")' />");
      });
    },
    error: function(collection, error) {
      // The collection could not be retrieved.
    }
  });
  collection.comparator = function(object) {
    return object.get("createdAt");
  };
  //$("#divImg").html(strPut);//<div id="divImg"></div>

});

