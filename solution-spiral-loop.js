/**
 * * SPIRAL LOOP
 * Diberikan sebuah multidimensional array dengan ukuran n * n.
 * Fungsi harus mereturn array satu dimensi dengan urutan yang membentuk spiral.
 * Contoh:
 *
 * [[1,  2,  3,  4,  5],
 * [6,   7,  8,  9, 10],
 * [11, 12, 13, 14, 15],
 * [16, 17, 18, 19, 20],
 * [21, 22, 23, 24, 25]]
 *
 * akan mereturn:
 * [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
 *
 * ------------>
 * ^--------->|
 * |^------->||
 * |<--------v|
 * <----------v
 * (wkwkwk sepertinya penggambaran diatas kurang membantu. Intinya bentuknya spiral)
 *
 * boleh membuat fungsi lain/terpisah di luar spiralLoop agar lebih modular.
 * Boleh menggunakan built-in function, object method, dan lainnya.
 */

function spiralLoop(arr) {
  var directions = {
    toRight: recursiveLoop(arr, arr.length, 0),
    toBottom: recursiveLoop(
      spinArray(arr, 1, arr[0].length - 1),
      arr.length,
      1
    ),
    toLeft: recursiveLoop(spinArray(arr, 2, arr[0].length - 1), arr.length, 1),
    toTop: recursiveLoop(spinArray(arr, 3, arr.length - 1), arr.length - 1, 1)
  }

  var result = []

  /* This thing below me is so not modular, but I don't have any idea to make it tidier, as for now */
  for (var i = 0; i < Math.ceil(arr.length / 2); i++) {
    if (directions.toRight !== undefined) {
      for (var j = 0; j < directions.toRight.length; j++) {
        if (directions.toRight[j].length !== undefined) {
          directions.toRight = directions.toRight[j]
          break
        }
        result.push(directions.toRight[j])
      }
      if (directions.toRight === undefined || j === directions.toRight.length) {
        directions.toRight = undefined
      }
    }

    if (directions.toBottom !== undefined) {
      for (var j = 0; j < directions.toBottom.length; j++) {
        if (directions.toBottom[j].length !== undefined) {
          directions.toBottom = directions.toBottom[j]
          break
        }
        result.push(directions.toBottom[j])
      }
      if (
        directions.toBottom === undefined ||
        j === directions.toBottom.length
      ) {
        directions.toBottom = undefined
      }
    }

    if (directions.toLeft !== undefined) {
      for (var j = 0; j < directions.toLeft.length; j++) {
        if (directions.toLeft[j].length !== undefined) {
          directions.toLeft = directions.toLeft[j]
          break
        }
        result.push(directions.toLeft[j])
      }
    }
    if (directions.toLeft === undefined || j === directions.toLeft.length) {
      directions.toLeft = undefined
    }

    if (directions.toTop !== undefined) {
      for (var j = 0; j < directions.toTop.length; j++) {
        if (directions.toTop[j].length !== undefined) {
          directions.toTop = directions.toTop[j]
          break
        }
        result.push(directions.toTop[j])
      }
      if (directions.toTop === undefined || j === directions.toTop.length) {
        directions.toTop = undefined
      }
    }
  }

  return result
}

function recursiveLoop(arr, width, startIndex, start = 0) {
  var result = []
  for (var i = startIndex; i < width; i++) {
    result.push(arr[start][i])
  }
  start++
  startIndex++

  if (width - 1 > 0 && startIndex < width - 1) {
    result.push(recursiveLoop(arr, width - 1, startIndex, start))
  }
  return result
}

function spinArray(arr, times, last) {
  var result = []
  for (var i = last; i >= 0; i--) {
    var temp = []
    for (var j = 0; j < arr.length; j++) {
      temp.push(arr[j][i])
    }
    result.push(temp)
  }
  times--
  if (times > 0) {
    result = spinArray(result, times, last)
  }
  return result
}

//  test case:
console.log(spiralLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(
  spiralLoop([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
)
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

console.log(
  spiralLoop([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ])
)
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

/* This function below is something, but not the solution for teh problem */
// function appendArray(arr, depth) {
//   var result = []
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length !== undefined) {
//       depth--
//       var temp = appendArray(arr[i], depth)
//       for (var j = 0; j < temp.length; j++) {
//         result.push(temp[j])
//       }
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
