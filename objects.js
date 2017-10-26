var playlist = {
  HAIM:'Falling'
};

updatePlaylist(key,value){
  return Object.assign({},playlist, {[key] : value})
}
