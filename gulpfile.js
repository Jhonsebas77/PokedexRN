'use strict';
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// --------------------------------------------------------
// Copying Resources
// --------------------------------------------------------

// --------------------------------------------------------
// config task
// --------------------------------------------------------
gulp.task('default', ['watch', 'resource-copy', 'test-data-copy']);
function String2JSON(path, name, string) {
    const stream = source(name);
    stream.end(string);
    stream.pipe(gulp.dest(path));
}
gulp.task('build', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("lib"));
});