function readvalue() {
  let a = document.querySelector("inp1").value;
  console.log(a);

  let b = document.querySelector("inp2").value
  console.log(b);


  let c = document.querySelector("op1");

  c.innerHTML = a + " " + b;

  document.querySelector("inp1").value = "";
  document.querySelector("inp2").value = "";


}