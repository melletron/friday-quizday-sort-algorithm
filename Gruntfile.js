
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        meta: {
            package: grunt.file.readJSON('package.json'),
            src: {
                main: 'src/main',
                test: 'src/test'
            },
            bin: {
                coverage: 'bin/coverage'
            }
        },
        jasmine: {
            options: {
                vendor: [
                    'vendor/jquery-*.js',
                    'vendor/jasmine-jquery.js'
                ]
            },
            nocover: {
                src: [
                    'src/**/*.js',
                    '!src/**/*.spec.js',
                ],
                options: {
                    specs: [
                        '**/*.spec.js'
                    ]
                }
            },
            cover: {
                src: '<%=jasmine.nocover.src%>',
                options: {
                    specs: '<%=jasmine.nocover.options.specs%>',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'bin/coverage/coverage.json',
                        report: [
                            {
                                type: 'html',
                                options: {
                                    dir: 'bin/html'
                                }
                            },
                            {
                                type: 'cobertura',
                                options: {
                                    dir: 'bin/cobertura'
                                }
                            },
                            {
                                type: 'text-summary'
                            }
                        ],
                        thresholds: {
                            lines: 100,
                            statements: 100,
                            branches: 100,
                            functions: 100
                        }
                    }
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['jasmine']);

};