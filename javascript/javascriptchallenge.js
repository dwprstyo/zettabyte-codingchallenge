function result(input) {
    
    let sorting = input.sort(function(a, b){return a - b});
    
    if (sorting.length % 2 == 0) {
        return (sorting[sorting.length/2-1] + sorting[sorting.length/2]) / 2
    }else{
        return sorting[sorting.length/2-(1/2)]
    }

  }
  
  console.log(result([8, 7, 7, 9, 5, 4, 2, 9]));