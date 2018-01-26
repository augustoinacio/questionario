var questao = {
    texto: "Possui Conta Corrente",
    id: 1,
    size: 100,
    pattern: 'dd/MM/aaaa',
    tipo: "radio",
    obrigatorio: true,
    pattern: "Informe o Nome do Cliente ou Empresa",
    mensagem: "Informe da data",
    opcoes: {
        items : ["Sim", "Não", "Talvez"],
        default : 0
    }
}
inicia();

function inicia() {
    if (questao.tipo === 'text') {
        constroiTexto();
    } else if (questao.tipo === 'date') {
        constroiInputDate();
    }else if (questao.tipo === 'radio') {
        constroiRadio();
    }else{
        constroiSelect();
    }
}

function constroiTexto() {
    var divPrincipal = document.getElementById("teste");
    var texto = '<label>' + questao.texto + '</label>';
    if (questao.obrigatorio === true) {
        texto += '<span>*</span>'
    }
    if (questao.tipo === 'text') {
        var type = 'type = ' + questao.tipo,
            id = ' id="' + questao.id + '" ';
        size = 0;
        if (questao.size) {
            size = ' size="' + questao.size + '" ';
        }
        var input = '<input ';
        input += type;
        input += id;
        if (size) {
            input += size;
        }
        input += ' placeholder="' + questao.pattern + '" ';
        input += '/>';
        texto += input;
    }
    divPrincipal.innerHTML += texto;
}

function constroiInputDate() {
    var divPrincipal = document.getElementById("teste");
    var date = '<label>' + questao.texto + '</label>';
    if (questao.obrigatorio === true) {
        date += '<span class="required">*</span>'
    }
    console.log(date);
    if (questao.tipo === 'date') {
        var type = 'type="' + questao.tipo + '" ' ,
        id = ' id=' + questao.id;
        
        size = 0;
        if (questao.size) {
            size = ' size="' + questao.size + '" ';
        }
        var input = '<input ';
        input += id;
        if(size){
            input += size;
        }
        input += ' placeholder="' +questao.pattern + '" ';
        input += '/>' 
        date += input;       
    }
    divPrincipal.innerHTML += date;
}

function constroiSelect(){

}

function constroiRadio(){
    var divPrincipal = document.getElementById("teste");
    var radio = '<label>' + questao.texto + '</label>';
    if (questao.obrigatorio === true) {
        radio += '<span class="required">*</span>'
    }
    console.log(radio);
    if(questao.tipo === 'radio'){
        var type = 'type="'+ questao.tipo + '" ',
            id = 'id="' + questao.id + '" ';
            
            var inputs = '';
            console.log(questao.opcoes.items);
            questao.opcoes.items.forEach(function(item){                
                var i = 0;
                var input = '<input type="radio" name="' + questao.id + '_'
                            + item + ' value="'+ item + '">' + item;
                inputs += input;
            });            
            console.log(inputs);
            radio += inputs;
    }
    divPrincipal.innerHTML += radio;
}