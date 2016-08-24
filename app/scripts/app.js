define([
    'angular',
    './controller/controllers'
], function(angular) {
    //定义将要绑定到document上的模块名称
    return angular.module('myProject', [
        'projectController'
    ]);
});
