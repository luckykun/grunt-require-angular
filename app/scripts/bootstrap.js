define([
    'angular',
    'app',
    'jquery',
    './controller/_base',
    './service/com',
    './service/services'
], function(angular) {

    // 手动将angular模块绑定到document对象
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myProject']);
    });

});
