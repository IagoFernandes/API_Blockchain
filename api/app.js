
var incluirRegistro = document.getElementById('incluirRegistro');
var recuperarRegistro = document.getElementById('recuperarRegistro');
var mudarProprietario = document.getElementById('mudarProprietario');

incluirRegistro.addEventListener('submit', function(e){
    e.preventDefault();
    var dados = new FormData(incluirRegistro);
    console.log(dados.get('id'));
    $("#botaoRegistro").prop("disabled",true);
    $(".load").append('<div class="loader"></div>');
    $.ajax({
        url: 'http://localhost:3004/incluirRegistro',
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify({
            id: dados.get('id'),
            receitaId: dados.get('receitaId'),
            pacienteId: dados.get('pacienteId'),
            medicoId: dados.get('medicoId'),
            dhc: dados.get('dhc'),
            posologia: dados.get('posologia')
        }),
        success: function(data) {
            console.log(data);
            alert('Dado adicionado com sucesso!')
            $("#botaoRegistro").prop("disabled",false);
            $('.loader').remove();
        }, 
        error: function (request, status, error) {
            alert('Erro ao enviar requisição!');
            $("#botaoRegistro").prop("disabled",false);
            $('.loader').remove();
        }
    });

});

recuperarRegistro.addEventListener('submit', async function(e){
    e.preventDefault();
    var dados = new FormData(recuperarRegistro);
    console.log(dados.get('id'));

    $.ajax({
        url: 'http://localhost:3004/recuperarRegistro',
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify({
            id: dados.get('id')
        }),
        success: function(data) {
            console.log(data.registro);
        }
    });

});

mudarProprietario.addEventListener('submit', function(e){
    e.preventDefault();
    var dados = new FormData(mudarProprietario);
    console.log(dados.get('address'));

});