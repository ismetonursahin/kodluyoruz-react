let onur = (name) => {
  console.log("hello" + name);
};

function topla(a, b) {
  return a + b;
}
// let  topla = (a, b) => a + b;   arrow function yazılımı

function cikar(a, b) {
  return a * b;
}

export let text = "string olan ifadeyi dışarıya çıkarmak";

export { topla, cikar };
export default onur;
