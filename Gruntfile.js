/*global module */

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-tsc");
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        tsc: {
            task_name: {
                options: {
                    version: "1.4",
                    module: "commonjs",
                    target: "latest"
                },
                files: [
                    {
                        "expand": true,
                        dest: "dest",
                        ext: ".js",
                        cwd: "src",
                        src: [
                            "*.ts",
                            "**/*.ts"
                        ]
                    }
                ]
            }
        }
    });
};