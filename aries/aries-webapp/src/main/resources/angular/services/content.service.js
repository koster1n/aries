module.exports = function(app) {
	app.factory('ContentService', ContentService);
}

function ContentService() {
  ContentService.getContentInfo();
}

function ContentService($http) {
	return {
		getContent : function (contentId) {
			return $http.get("./api/content/" + contentId).then(function(response) {
				return response.data;
			});
		},
    getContentInfo : function (contentId) {
      return $http.get("./api/cite/" + contentId).then(function(response) {
        return response.data;
      });
    }
	}
}
