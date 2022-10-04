let str = "Nevean is more beautiful than Ninos";
let str2 = " I love algorithm so much like OMG";
function revStr(str) {
  let arr = str.split(" ");
  let arr2 = arr.map(function (e) {
    let newE = "";
    for (i = e.length - 1; i >= 0; i--) {
      newE += e[i];
    }
    return newE;
  });

  console.log(arr2.join(" "));
}
revStr(str2);

// from NG
