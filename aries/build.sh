#!/bin/bash
cd aries-webapp
npm install
npm run deploy
cd ..
mvn clean compile package

