"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.html",
                "./src/views/pages/*.html"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html"
            ]
        },
        styles: {
            src: "./src/assets/scss/styles.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/assets/scss/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/assets/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/assets/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/assets/images/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/assets/images/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        webp: {
            src: [
                "./src/assets/images/**/*.{jpg,jpeg,png,tiff}",
                "!./src/assets/images/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: [
                "./src/assets/images/**/*.{jpg,jpeg,png,tiff}",
                "!./src/assets/images/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ]
        },
        sprites: {
            src: "./src/assets/images/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/assets/images/svg/*.svg"
        },
        fonts: {
            src: "./src/assets/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/assets/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/assets/images/favicon/*.{jpg,jpeg,png,gif}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"]));

export default development;