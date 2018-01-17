#!/usr/bin/env ash

echo -e "\nCopying new distribution..."
cp -av ./dist ${OUTPUT_FOLDER}/dist-new

echo -e "\nSwapping active distribution folder..."
mv -v ${OUTPUT_FOLDER}/dist ${OUTPUT_FOLDER}/dist-old
mv -v ${OUTPUT_FOLDER}/dist-new ${OUTPUT_FOLDER}/dist

echo -e "\nDeleting previous distribution..."
rm -rfv ${OUTPUT_FOLDER}/dist-old
