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
 * 5, 3, 1
 * 4, 2
 * 4, 2
 * 3, 1
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
  var toRight = recursiveLoop(arr, arr.length, 0)
  var toBottom = recursiveLoop(
    spinArray(arr, 1, arr[0].length - 1),
    arr.length,
    1
  )
  var toLeft = recursiveLoop(
    spinArray(arr, 2, arr[0].length - 1),
    arr.length,
    1
  )
  var toTop = recursiveLoop(
    spinArray(arr, 3, arr.length - 1),
    arr.length - 1,
    1
  )

  var result = []
}

function appendArray(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length !== undefined) {
			var temp = appendArray(arr[i])
			for (var j = 0; j < temp)
    } else {
      result.push(temp[i])
    }
  }
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

/**
 * 5 10 15 20 25
 * 4  9 14 19
 * 3  8 12 16
 * 2  7 12 17
 * 1  6 11 16
 */

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
/**
 * 3, 1
 * 2
 * 2
 * 1
 */

console.log(
  spiralLoop([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
)
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
/**
 * 4, 2
 * 3, 1
 * 3, 1
 * 2
 */

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
