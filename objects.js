var playlist = {
  HAIM:'Falling'
};

updatePlaylist(obj,key,value){
  return Object.assign({}, obj, {[key]:value});
}
