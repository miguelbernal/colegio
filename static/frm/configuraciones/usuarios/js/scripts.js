listar();

function listar() {
    var url = 'api/usuarios';
    var parametros = {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    };
    fetch(url, parametros)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) { // recupera los datos del servidor
            console.log(myJson);
            let registros = '';
            $.each(myJson, function( index, value ) {
                registros +=    `<tr>
                                    <td>${value.id_usuario}</td>
                                    <td>${value.nombre_usuario}</td>
                                    <td>${value.usuario_usuario}</td>
                                    <td>${value.clave_usuario}</td>
                                    <td style="text-align: center;">
                                        <button type="button" class="btn btn-warning btn-sm" onclick="modificar($(this))" >
                                            <i class="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button" class="btn btn-warning btn-sm" onclick="eliminar($(this))" >
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>`;
            });
            $('#tbody_datos').html(registros);
        });

}

function agregar(){
    console.log('agregar');
    $('#myModalOperaciones').modal('show');
    $('#myModalOperaciones').on('shown.bs.modal', function (e) {
        $('#id_usuario').val("");
        $('#nombre_usuario').val("");
        $('#usuario_usuario').val("");
        $('#clave_usuario').val("");

        $('#nombre_usuario').select();
        $('#exampleModalLabel').html('Agregar');
        $('#boton_operacion').html('Agregar');
        $('#boton_operacion').on('click', function(){
            agregar_registro()
        });
    })
}

function modificar($this){
    console.log('modificar');
    $('#myModalOperaciones').modal('show');
    $('#myModalOperaciones').on('shown.bs.modal', function (e) {
        let id = $this.parent().parent().find('td').eq(0).text();
        let nombre = $this.parent().parent().find('td').eq(1).text();
        let usuario = $this.parent().parent().find('td').eq(2).text();
        let clave = $this.parent().parent().find('td').eq(3).text();

        $('#id_usuario').val(id);
        $('#nombre_usuario').val(nombre);
        $('#usuario_usuario').val(usuario);
        $('#clave_usuario').val(clave);

        $('#nombre_usuario').select();
        $('#exampleModalLabel').html('Modificar');
        $('#boton_operacion').html('Modificar');
        $('#boton_operacion').on('click', function(){
            console.log('modificar registro');
            $('#myModalOperaciones').modal('hide');
        });
    })
}

function eliminar($this){
    console.log('eliminar');
    $('#myModalOperaciones').modal('show');
    $('#myModalOperaciones').on('shown.bs.modal', function (e) {
        let id = $this.parent().parent().find('td').eq(0).text();
        let nombre = $this.parent().parent().find('td').eq(1).text();
        let usuario = $this.parent().parent().find('td').eq(2).text();
        let clave = $this.parent().parent().find('td').eq(3).text();

        $('#id_usuario').val(id);
        $('#nombre_usuario').val(nombre);
        $('#usuario_usuario').val(usuario);
        $('#clave_usuario').val(clave);
        
        $('#nombre_usuario').select();
        $('#exampleModalLabel').html('Eliminar');
        $('#boton_operacion').html('Eliminar');
        $('#boton_operacion').on('click', function(){
            console.log('eliminar registro');
            $('#myModalOperaciones').modal('hide');
        });
    })
}

function agregar_registro(){
    console.log('agregar registro');
    let nombre = $('#nombre_usuario').val();
    let usuario = $('#usuario_usuario').val();
    let clave = $('#clave_usuario').val();

    var url = 'api/usuarios';
    var data = { nombre_usuario: nombre ,usuario_usuario: usuario, clave_usuario: clave };
    var parametros = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    };
    fetch(url, parametros)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) { // recupera los datos del servidor
            console.log(myJson);
            $('#myModalOperaciones').modal('hide');
            listar();
        });
    
}