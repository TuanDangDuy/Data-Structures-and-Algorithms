// Ví dụ: 2  |  1  3  5  7   6
//       i-1    i
//            temp
// i = 1 => arr[i] = 1
// j = i - 1 = 0
// temp = arr[i]


function insertionSort(arr) { //
    // Lặp qua từng phần tử trong mảng
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1 // Chỉ số của phần tử đứng trước phần tử thứ i
      let temp = arr[i] // Lưu lại phần tử thứ i để chèn vào vị trí đúng

      // Lặp qua các phần tử trước phần tử thứ i
      while (j >= 0 && arr[j] > temp) {
        // Di chuyển các phần tử lớn hơn temp lên một vị trí
        arr[j + 1] = arr[j]
        j = j - 1
      }
      arr[j + 1] = temp // Chèn phần tử thứ i vào vị trí đúng
    }
    return arr
  }
  
  const arr = [8, 20, -2, 4, -6]
  insertionSort(arr)
  console.log(arr) // [-6, -2, 4, 8, 20]