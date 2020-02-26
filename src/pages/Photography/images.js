import imageDimensions from "assets/igImages/jsonFile";
const images = importAll(
  require.context("assets/igImages", false, /\.(png|jpe?g|svg)$/)
);

let loadedImages = images.map(image => {
  let imageName = image.slice(image.indexOf('/static/')+8, image.indexOf('.')) + '.jpg';
  let imageSize = imageDimensions[imageName] || {width:4, height:5};
  return ({
    src: image,
    width: imageSize.width,
    height: imageSize.height
  })
});

function importAll(r) {
  return r.keys().map(r);
}

//To generate the json file with dimensions, run this script in bash in the images folder:
/*
  for f in *jpg; do
    identify -format '"%f":{"width": %w,"height": %h},' $f >> jsonFile.json
  done
*/

export default loadedImages;
