module.exports = function(app) {
	app.factory('ContentService', ContentService);
}

function ContentService() {
  ContentService.getContentInfo();
}

function ContentService($http) {
	return {
		getContent : function (chapterId, pageId) {
			return $http.get("./api/content/" + chapterId + "/" + pageId).then(function(response) {
				return response.data;
			});
		},
    getContentInfo : function (chapterId) {
      return $http.get("./api/cite/" + chapterId).then(function(response) {
        return response.data;
      });
    }
	}
}
