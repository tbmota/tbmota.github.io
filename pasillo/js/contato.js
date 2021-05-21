// Ocultando e mostrando div  cpf e cnpj
$(document).ready(
    function(){
        $('#cadastro_cpf').hide();
        $('#cadastro_cnpj').hide();

        $('#fisica').click(
            function(){
                $('#cadastro_cnpj').hide();
                $('#cadastro_cpf').show();
        });
        $('#juridica').click(
            function(){
                    $('#cadastro_cpf').hide();
                    $('#cadastro_cnpj').show();
                }
        );
    }
);

$(document).ready(  //colocando um foco no email
    function(){
        $("input").focus(
            function(){
            $("#emailFocus").css('background','#babac5');
            }
        )
    }
);

function validarCPF(cpf) { //JavaScript: validação de cpf.
    var Soma;
    var Resto;
    Soma = 0;
  if (cpf == "00000000000") return false;  

  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i); 
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
};

function validarCNPJ(cnpj) { //JavaScript: validação de cnpj
 
    cnpj = cnpj.replace(/[^\d]+/g,''); //O método replace() percorre toda a string em busca da sequência de caracteres a ser substituída. Caso essa sequência de caracteres não seja encontrada, nenhuma substituição é realizada; caso seja encontrada, uma nova string, com a substituição feita, é devolvida pelo método.
    //^corresponde ao início do texto
    //\d Encontra correspondência com um número. Equivalente a [0-9]. Por exemplo,  /\d/ ou /[0-9]/ encontra correspondente '8' em "Dróide BB8".
    // /g expressão regular do javascript que significa até achar a correspondência
 //remove tudo que não é número
    if(cnpj == '') return false;  //se não for número retorna falso
     
    if (cnpj.length != 14) //se a quantidade de número for menor ou maior que 14 retorna falso
        return false;
 
    // Elimina CNPJs inválidos conhecidos. se digitar números iguais o retorno é falso
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // a partir daqui checam os dois dígitos verificadores, verificando sua validade de acordo com o algoritmo do CNPJ. Caso negativo, a validação retorna false encerrando a função.
    tamanho = cnpj.length - 2  //checa os primeiros números (-2)
    numeros = cnpj.substring(0,tamanho);  //O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string.
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true; //se passou por tudo acima o retorno é verdadeiro
    
};


