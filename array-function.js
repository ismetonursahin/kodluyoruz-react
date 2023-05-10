// kullanaılacak array functionları

// push
// map
// find
// filter
// some
// every
// includes
// .

// push : Dizinin sonuna eleman ekler
let kisi = [
  { name: "ayse", age: 21 },
  { name: "onur", age: 35 },
  { name: "hasan", age: 32 },
];
kisi.push({ name: "arda", age: 26 });

console.log(kisi);

// .

// map : Dizi elemanlarını tek tek dönebilir
kisi.map((item) => {
  console.log(item.name);
});

// .

// find : dizide denk olan bir tanesi gelir

let result = kisi.find((item) => item.name === "ayse");
console.log(result);

// filter;
let filtre = kisi.filter(({ name, age }) => age > 30);
console.log(filtre);
// .

// some : kontrol edip true / false değeri döner
let kontrol = kisi.some((item) => item.age == 30);
console.log(kontrol);

// .

// every : hepsinde ortak olan olduğunda true döner
let everi = kisi.every((item) => item.age > 20);
console.log(everi);

// .

// includes : içerisinde varmı yokmu kontrolu yapar true/false
let meyveler = ["elma", "armut", "muz"];
let inc = meyveler.includes("ker");
console.log(inc);
