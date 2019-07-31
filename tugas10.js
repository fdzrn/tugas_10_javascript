function tugasSepuluh(num) {
	if (num === 0) {
		return 0;
	} else {
		return num + tugasSepuluh(--num)
	}
}
console.log(tugasSepuluh(1));
console.log(tugasSepuluh(2));
console.log(tugasSepuluh(3));
console.log(tugasSepuluh(4));
console.log(tugasSepuluh(5));
console.log(tugasSepuluh(6));
console.log(tugasSepuluh(7));
console.log(tugasSepuluh(8));
console.log(tugasSepuluh(9));
console.log(tugasSepuluh(10));




// function tugas10(n) {
// let angka = 0;
// 	for(let i=n; i>0; i--) {
// 		angka += i;
// 	}
// 	return angka;
// }
// console.log(tugas10(10));



