define([
    './services'
], function(mod) {

    mod.factory('appCom', ['$http', function($http) {

        var own = {};

        own.controller = function($scope) {

            var ow = {};

            ow.set = function(key, value) {

                if(angular.isObject(key)) {

                    var map = key;
                    angular.forEach(map, function(v, k) {
                        $scope[k] = v;
                    });

                } else {
                    $scope[key] = value;
                }

            };

            ow.get = function(key) {
                return $scope[key];
            };

            ow.module = function(member) {
                this.mods = member;
            };

            ow.fn = function(member) {
                var fn = this.get('fn') || {};

                angular.extend(fn, member);

                this.set('fn', fn);
            };

            ow.run = function(callback) {
                callback && callback.apply(this, arguments);
            };

            return ow;

        };

        return own;

    }]);

});
