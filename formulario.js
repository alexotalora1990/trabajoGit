let registro = [];
let op = null
let indice = null

function registrar() {

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  let correo = document.getElementById("correo").value;
  let celular = document.getElementById("celular").value;
  let tipo_documento = document.getElementById("tipo_documento").value;
  let numero_documento = document.getElementById("numero_documento").value;
  let masculino = document.getElementById("masculino").checked;
  let femenino = document.getElementById("femenino").checked;
  let otro = document.getElementById("otro").checked;
  let genero = 0;
  if (masculino) {
    genero = "masculino";
  } else if (femenino) {
    genero = "femenino";
  } else if (otro) {
    genero = "otro";
  }
  if (op === true) {
    registro[indice].nombre = document.getElementById("nombre").value
    registro[indice].apellido = document.getElementById("apellido").value
    registro[indice].tipo_documento = document.getElementById("tipo_documento").value
    registro[indice].numero_documento = document.getElementById("numero_documento").value
    registro[indice].fecha_nacimiento = document.getElementById("fecha_nacimiento").value
    registro[indice].correo = document.getElementById("correo").value
    registro[indice].celular= document.getElementById("celular").value


  }
  else {
    let user = {
      nombre: nombre,
      apellido: apellido,
      tipo_documento: tipo_documento,
      fecha_nacimiento: fecha_nacimiento,
      correo: correo,
      celular: celular,
      genero: genero,
      numero_documento: numero_documento,
    };
    registro.push(user);
  }
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fecha_nacimiento").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("tipo_documento").value = "";
  document.getElementById("numero_documento").value = "";
  document.getElementById("masculino").checked = false;
  document.getElementById("femenino").checked = false;
  document.getElementById("otro").checked = false;

  console.log(registro);
  document.getElementById("tabla").innerHTML = ""
  op = false

}

function validar() {

  if (document.getElementById("nombre").value == "") {
    document.getElementById("alert").textContent = "El nombre no debe estar vacio"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
  } else if (document.getElementById("apellido").value == "") {
    document.getElementById("alert").textContent = "El apellido no debe estar vacio"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
  }
  else if (document.getElementById("fecha_nacimiento").value == "") {
    document.getElementById("alert").textContent = "seleccione un fecha de nacimiento"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
  }
  else if (document.getElementById("correo").value == "") {
    document.getElementById("alert").textContent = "El correo no debe estar vacio"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
  }
  else if (document.getElementById("celular").value == "") {
    document.getElementById("alert").textContent = "El telefono no debe estar vacio"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
  }
  else if (document.getElementById("numero_documento").value == "") {
    document.getElementById("alert").textContent = "El numero de identificacion no debe estar vacio"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
  }
  else if (document.getElementById("tipo_documento").value == "") {
    document.getElementById("alert").textContent = "seleccione un tipo de identificacion valido"
    setTimeout(() => {
      document.getElementById("alert").textContent = ""
    }, 2000);
  }
  // else if (document.getElementById("numero").value == "") {
  //   document.getElementById("alert").textContent = "seleccione su genero"
  //   setTimeout(() => {
  //       document.getElementById("alert").textContent = ""
  //   }, 2000);
  // }

  else {
    registrar()

    tabla()
  }
}

function tabla() {
  let frag = document.createDocumentFragment()

  registro.forEach((item, index) => {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")
    let editar = document.createElement("button")
    let eliminar = document.createElement("button")
    editar.textContent = "📝"
    editar.addEventListener("click", () => {
      edita(item, index)
    })
    eliminar.textContent = "❌"
    eliminar.addEventListener("click", ()=>{
     event.target.parentNode.parentNode.remove()
    })
    td1.textContent = item.nombre
    td2.textContent = item.apellido
    td3.textContent = item.tipo_documento
    td4.textContent = item.numero_documento
    td5.textContent = item.genero
    td6.textContent = item.fecha_nacimiento
    td7.textContent = item.correo
    td8.textContent = item.celular
    td9.appendChild(editar)
    td9.appendChild(eliminar)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tr.appendChild(td8)
    tr.appendChild(td9)
    frag.appendChild(tr)
    document.getElementById("tabla").appendChild(frag)
  })
}

function edita(r, i) {
  op = true
  indice = i
  console.log(r);
  document.getElementById("nombre").value = r.nombre
  document.getElementById("apellido").value = r.apellido
  document.getElementById("fecha_nacimiento").value = r.fecha_nacimiento
  document.getElementById("correo").value = r.correo
  document.getElementById("celular").value = r.celular
  document.getElementById("tipo_documento").value = r.tipo_documento
  document.getElementById("numero_documento").value = r.numero_documento
  document.getElementById("masculino").checked = false;
  document.getElementById("femenino").checked = false;
  document.getElementById("otro").checked = false;
}



