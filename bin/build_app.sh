#!/usr/bin/env bash


./node_modules/.bin/tsc
./node_modules/.bin/webpack lib/WebApp/BootcampWebAppSuite.js public/lib/index.js
