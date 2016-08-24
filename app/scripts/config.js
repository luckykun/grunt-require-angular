
(function() {

    var vendorPath = 'vendor/';

    require.config({    //配置模块
        baseUrl: '../scripts/',
        paths: {
            'app': 'app',
            'angular': vendorPath + 'angular/angular',
            'jquery': vendorPath + 'jquery/jquery'
        },
        shim: {   //处理没有遵守requirejs规范的js库
            'angular': {
                exports: 'angular'
            }
        }
    });

    //执行bootstrap.js
    require(['./bootstrap'], function(bootstrap) {
        // ...
    });


})();
