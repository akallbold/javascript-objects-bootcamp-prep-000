var playlist = {
  HAIM:'Falling'
};

updatePlaylist(playlist,key,value){
  return Object.assign({},playlist, {key : value})
}
