// add solution here
function theBeatlesPlay(musicians, instruments){
  var BeatlesPlay = []
    for(let i = 0; i < musicians.length; i++){
      BeatlesPlay.push(musicians[i] + " plays " + instruments[i]);
      i++
    }
  return BeatlesPlay
}

function johnLennonFacts(array){
  var newArray = []
  let i = 0
  while(i < array.length){
    array[i] = array[i] + "!!!"
    newArray.push(arrai[i])
    i++
  }
  return newArray
}


