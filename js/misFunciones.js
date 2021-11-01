function traerInfoCar(){
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaCar){
            console.log(respuestaCar);
            mostrarListaCar(respuestaCar.items)
        }
    });

}

function mostrarListaCar(items){
    let myTableCar="<table>";
    for(i=0;i<items.length;i++){
        myTableCar+="<tr>";
        myTableCar+="<td>" +items[i].id+"</td>";
        myTableCar+="<td>" +items[i].brand+"</td>";
        myTableCar+="<td>" +items[i].model+"</td>";
        myTableCar+="<td>" +items[i].category_id+"</td>";
        myTableCar+="<td> <button onclick='borrarInfoCar("+items[i].id+")'>Borrar</button>";
        myTableCar+="</tr>";
    }
    myTableCar+="</table>";
    $("#resultadoCar").append(myTableCar);

}

function agregarInfoCar(){
    let myDataCar={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };
    let dataToSend=JSON.stringify(myDataCar);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car",
        type:"POST",
        data:myDataCar,
        datatype:"JSON",
        success:function(respuestaCar){
            $("#resultadoCar").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInfoCar();
            alert("se ha guardado el dato")
        }
    });
}

function actualizarInfoCar(){
    let myDataCar={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };
    console.log(myDataCar);
    let dataToSend=JSON.stringify(myDataCar);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaCar){
            $("#resultadoCar").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInfoCar();
            alert("se ha Actualizado")
        }
    });
}

function borrarInfoCar(idCar){
    let myDataCar={
        id:idCar
    };
    let dataToSend=JSON.stringify(myDataCar);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaCar){
            $("#resultadoCar").empty();
            traerInfoCar();
            alert("Se ha Eliminado.")
        }
    });
}
//Funcionalidad para Clientes
function traerInfoClient(){
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaClient){
            console.log(respuestaClient);
            mostrarListaClient(respuestaClient.items)
        }
    });
}

function mostrarListaClient(items){
    let myTableClient="<table>";
    for(i=0;i<items.length;i++){
        myTableClient+="<tr>";
        myTableClient+="<td>" +items[i].id+"</td>";
        myTableClient+="<td>" +items[i].name+"</td>";
        myTableClient+="<td>" +items[i].email+"</td>";
        myTableClient+="<td>" +items[i].age+"</td>";
        myTableClient+="<td> <button onclick='borrarInfoClient("+items[i].id+")'>Borrar</button>";
        myTableClient+="</tr>";
    }
    myTableClient+="</table>";
    $("#resultadoClient").append(myTableClient);

}

function agregarInfoClient(){
    let myDataClient={
        id:$("#idClient").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myDataClient);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myDataClient,
        datatype:"JSON",
        success:function(respuestaClient){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInfoClient();
            alert("se ha guardado el dato")
        }
    });
}

function actualizarInfoClient(){
    let myDataClient={
        id:$("#idClient").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myDataClient);
    let dataToSend=JSON.stringify(myDataClient);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaClient){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInfoClient();
            alert("se ha Actualizado")
        }
    });
}

function borrarInfoClient(idClient){
    let myDataClient={
        id:idClient
    };
    let dataToSend=JSON.stringify(myDataClient);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaClient){
            $("#resultadoClient").empty();
            traerInfoClient();
            alert("Se ha Eliminado.")
        }
    });
}
//Funcionalidad para Mensajes
function traerInfoMessage(){
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaMessage){
            console.log(respuestaMessage);
            mostrarListaMessage(respuestaMessage.items)
        }
    });

}

function mostrarListaMessage(items){
    let myTableMessage="<table>";
    for(i=0;i<items.length;i++){
        myTableMessage+="<tr>";
        myTableMessage+="<td>" +items[i].id+"</td>";
        myTableMessage+="<td>" +items[i].messagetext+"</td>";
        myTableMessage+="<td> <button onclick='borrarInfoMessage("+items[i].id+")'>Borrar</button>";
        myTableMessage+="</tr>";
    }
    myTableMessage+="</table>";
    $("#resultadoMessage").append(myTableMessage);

}

function agregarInfoMessage(){
    let myDataMessage={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myDataMessage);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myDataMessage,
        datatype:"JSON",
        success:function(respuestaMessage){
            $("#resultadoMessage").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
            traerInfoMessage();
            alert("se ha guardado el dato")
        }
    });
}

function actualizarInfoMessage(){
    let myDataMessage={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myDataMessage);
    let dataToSend=JSON.stringify(myDataMessage);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMessage){
            $("#resultadoMessage").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
            traerInfoMessage();
            alert("se ha Actualizado")
        }
    });
}

function borrarInfoMessage(idMessage){
    let myDataMessage={
        id:idMessage
    };
    let dataToSend=JSON.stringify(myDataMessage);
    $.ajax({
        url:"https://gd4ca2954740faf-db202109261545.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMessage){
            $("#resultadoMessage").empty();
            traerInfoMessage();
            alert("Se ha Eliminado.")
        }
    });
}