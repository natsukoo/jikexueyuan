module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
         less: {
              development:{
                options:{
                        //Default value is the directory of the source, which is probably what you want.
                        paths:['css']
                    },
                    files:{
                        'css/test.css':'css/test.less'
                    }
              },
              production:{
                options:{
                    paths:['css']
                },
                files:{
                    'css/test-min.css':'css/test.css'
                }
              }
            },    
        watch: {
            scripts:{
            	files:['css/test.less'],
            	tasks:['less'],
            	options:{
            		spawn:false,
            		interrupt:true,
            	},
            },
        },
    });
 	// require("load-grunt-tasks")(grunt);
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    // Default task(s).
    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', [ 'less','watch']);
 
    //使用watch，实时编译less成功
 
};