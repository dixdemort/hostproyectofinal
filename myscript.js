var CIV, nameV, lastnameV, addressV;

function readFom() {
  CIV = document.getElementById("CI").value;
  nameV = document.getElementById("name").value;
  lastnameV = document.getElementById("lastname").value;
  addressV = document.getElementById("address").value;
  console.log(CIV, nameV, addressV, lastnameV);
}

document.getElementById("crear").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("socio/" + CIV)
    .set({
      CINo: CIV,
      name: nameV,
      lastname: lastnameV,
      address: addressV,
    });
  alert("Registro creado");
  document.getElementById("CI").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("buscar").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("socio/" + CIV)
    .on("value", function (snap) {
      document.getElementById("CI").value = snap.val().CINo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("lastname").value = snap.val().lastname;
      document.getElementById("address").value = snap.val().address;
    });

};

document.getElementById("actualizar").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("socio/" + CIV)
    .update({
      //CINo: CIV, COMO ES TIPO BÚSQUEDA, NO VA
      name: nameV,
      lastname: lastnameV,
      address: addressV,
    });
  alert("Registro actualizado");
  document.getElementById("CI").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("eliminar").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("socio/" + CIV)
    .remove();
  alert("Registro eliminado");
  document.getElementById("CI").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
};
