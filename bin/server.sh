#!/usr/bin/env bash


./node_modules/.bin/onchange "src/**/*" "node_modules/**/*" -- ts-node src/Server/BootcampServerSuite.ts
