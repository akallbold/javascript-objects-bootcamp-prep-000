var playlist = {
  HAIM:'Falling'
};

updatePlaylist(playlist,key,value){
  return Object.assign({}, obj, {[key] : value})
}
