module.exports = function(app) {
	app.factory('ContentService', ContentService);
}

function ContentService() {
  ContentService.getContentInfo();
}

function ContentService($http) {
	return {
		getContent : function (chapter, page) {
			return $http.get("./api/content/" + chapter + "/" + page).then(function(response) {
				return response.data;
			});
		},

    getContentInfo : function (contentId) {
      return $http.get("./api/content/" + contentId + "/cite").then(function(response) {
        return response.data;
      });
    }
	}
}
