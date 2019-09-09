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
  //  write your code here
}

//  test case:
console.log(spiralLoop[([1, 2, 3], [4, 5, 6], [7, 8, 9])])
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(
  spiralLoop([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
)
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

console.log([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
])
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
