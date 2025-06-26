#!/bin/bash

# Répertoire où se trouvent les images
IMAGE_DIR="images"

# Qualité à appliquer (entre 0 et 100)
QUALITY=70

# Extension des images à traiter
EXTENSIONS=("jpg" "jpeg" "png")

echo "Compression des images dans $IMAGE_DIR..."

for EXT in "${EXTENSIONS[@]}"; do
  find "$IMAGE_DIR" -type f -iname "*.$EXT" | while read FILE; do
    echo "Compression de $FILE..."
    mogrify -strip -interlace Plane -gaussian-blur 0.05 -quality $QUALITY "$FILE"
  done
done

echo "✅ Compression terminée."