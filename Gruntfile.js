//Wrapper函数
module.exports = function(grunt) {
    'use strict';

    //load all grunt tasks
    // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var pkg = grunt.file.readJSON('package.json');
    var cfg = {
        src: 'app/',
        serverHost: '127.0.0.1',
        serverPort: 8800,
        livereload: true
    };

    // 项目配置.
    grunt.initConfig({

        //======== 配置相关 ========
        // pkg: pkg,
        // cfg: cfg,

        //======== 开发相关 ========

        //开启服务
        connect: {
            // options: {
            //     // open: true,
            //     // port: cfg.serverPort,
            //     // hostname: cfg.serverHost
            //     // middleware: function(connect, options) {
            //     //     return [
            //     //         require('connect-livereload')({
            //     //             port: cfg.livereload
            //     //         }),
            //     //         connect.static(options.base)
            //     //     ];
            //     // }
            // },
            server: {
                options: {
                    open: true,
                    port: cfg.serverPort,
                    hostname: cfg.serverHost,
                    keepalive: true,
                    base: ['app/']
                }
            }
        },

        //监控文件变化
        watch: {
            server: {
                files: ['app/**/*.*'],
                tasks: ['hello'],
                options: {
                    livereload: true
                }
            }
        },

        //js检查
        jshint: {
            all: ['app/**/*.js'],
            options: {
                browser: true, // browser environment
                devel: true //
            }
        }

    });

    // 加载任务
    grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-open');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-bower-task');


    grunt.registerTask('hello', 'Hello, world task description.', function() {
        grunt.log.writeln('Hello, world.');
    });

    // 默认任务.
    grunt.registerTask('default', ['connect:server', 'watch:server']);

};
