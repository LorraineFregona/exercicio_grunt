    module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
        development: {
            options: {
            compress: false,
            sourceMap: true,
            sourceMapFilename: 'css/style.css.map',
            sourceMapURL: 'style.css.map'
            },
            files: {
            'css/style.css': 'less/style.less'
            }
        },
        production: {
            options: {
            compress: true,
            cleancss: true,
            sourceMap: false
            },
            files: {
            'css/style.min.css': 'less/style.less'
            }
        }
        },
        
        uglify: {
        options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            mangle: true
        },
        my_target: {
            files: {
            'js/scripts.min.js': ['js/script1.js', 'js/script2.js']
            }
        }
        },
        
        watch: {
        less: {
            files: ['less/**/*.less'],
            tasks: ['less:development']
        },
        js: {
            files: ['js/**/*.js', '!js/**/*.min.js'],
            tasks: ['uglify']
        }
        },
        
        clean: {
        css: ['css/*.css', 'css/*.map'],
        js: ['js/*.min.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['less:development', 'uglify']);
    grunt.registerTask('dev', ['less:development', 'uglify', 'watch']);
    grunt.registerTask('production', ['less:production', 'uglify']);
    grunt.registerTask('clean-all', ['clean:css', 'clean:js']);
    };