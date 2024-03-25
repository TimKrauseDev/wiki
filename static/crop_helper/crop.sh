#!/bin/bash

for FILE in *.jpg; do
  echo $FILE
  convert $FILE -gravity center -crop 3:2 -resize 400x267 "./cropped/$FILE"
done
