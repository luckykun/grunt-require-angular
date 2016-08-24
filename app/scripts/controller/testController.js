define([
    './controllers'
], function(mod) {

    var controllerFn = function($scope, $location) {

        // var own = appCom.controller($scope);

        // own.set({
        //     'app': 'hello grunt+requirejs+angular'
        // });
        //
        // own.module({
        //     init: function() {
        //         console.log('init');
        //     }
        // });
        //
        // own.fn({
        //     select: function() {
        //         alert('你好！');
        //     }
        // });
        //
        // own.run(function() {
        //     console.log($scope);
        //     this.mods.init();
        // });


        $scope.app = 'hello, world';
    };

    controllerFn.$inject = ['$scope', '$location'];
    mod.controller('testController', controllerFn);

});
