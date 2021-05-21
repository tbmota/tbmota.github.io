$(document).ready(function () {

    $("#content2").hide();
    /*Jquery : utilizar um scroll que a partir de  400px do topo do body apareça uma seta ao lado direito da pagina que funciona como retorno suave para o inicio da pagina , aplicar essa função na pagina inicial do projeto. Da linha 15 à 34 do home.js*/
    $("#content1").click(function () {
      $("#content2").show().scrollTop();
      $("#content1").hide();
    });

    $(document).ready(function () { //scroll que a partir de 400px do topo do body apareça uma seta ao lado direito
      $(window).scroll(function () {
        if ($(document).scrollTop() > 400) { //A propriedade Element.scrollTop obtém ou define o número de pixels quando o conteúdo de um elemento é rolado para baixo
          $(".img_topo").show();
        } else {
          $(".img_topo").hide();
        }
      });
   });

    $(function() { // retorno suave para o inicio da pagina 
      $('#topo').click(function() { //evento de clique
        var target = $(this.hash); //this.hash retorna somente a hash da URL contida em um atributo href;
        if (target.length) { //Retorna o lenght dos elementos. Caso retorne 0, ou seja, nenhum elemento encontrado com este id, não faz nenhuma ação;
          $('html, body').animate({ scrollTop: target.offset().top }, 'slow'); //Anima o scrollTop do html e body até o offset().top do elemento, ou seja, faz o html ir até o elemento passado como href.
          return false;
        }
      });
    });
});
document.documentElement.style.setProperty('--animate-duration', '2s'); //animação da logo
document.documentElement.style.setProperty('--navbar-duration', '2s'); //animação navbar

