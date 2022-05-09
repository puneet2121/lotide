const without = function(arr,itemsToRemove) {
  for (i = 0; i < arr.length; i++) {
    for(j= 0; j <itemsToRemove; j++){
      if (arr[i] === itemsToRemove[j]){
        arr.splice(i,itemsToRemove.length)
        console.log(arr)
    }
    
    }
    
  }
  
}
arr = [1,2,2,3,8,8]
itemsToRemove = [1]
without(arr,itemsToRemove)