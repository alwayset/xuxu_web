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
  var collection = new PaWallObjects();
  collection.fetch({
    success: function(collection) {
      collection.each(function(object) {
        document.writeln(object.get("contentText")+"\n");
      });
    },
    error: function(collection, error) {
      // The collection could not be retrieved.
    }
  });
  collection.comparator = function(object) {
    return object.get("createdAt");
  };

});