// 包装函数
module.exports = function(grunt) {
	grunt.initConfig({

		// 获取Package.json的信息
		pkg: grunt.file.readJSON('package.json'),
		// uglify插件的配置信息
		uglify: {
				build: {
						src: 'js/test.js',
						dest: 'js/<%= pkg.name %>.min.js'
				}
		},
		watch: {
				scripts: {
						files: ['js/<%= pkg.name %>.js'],
						tasks: ['uglify'],
						options: {
								spawn: false,
						},
				},
		}
	});

  // Load the plugins.
	// 压缩js文件
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// 告诉grunt当我们在终端输入grunt的时候需要做些什么东西
	grunt.registerTask('default',['uglify']);

};
