//criação da matriz 3x3 que respresentará o tabuleiro 

var rodada=1;
var matriz= Array(3);

matriz['a'] = Array(3);
matriz['b'] = Array(3);
matriz['c'] = Array(3);

matriz['a'][1]=0;
matriz['a'][2]=0;
matriz['a'][3]=0;

matriz['b'][1]=0;
matriz['b'][2]=0;
matriz['b'][3]=0;

matriz['c'][1]=0;
matriz['c'][2]=0;
matriz['c'][3]=0;


$(document).ready(function(){

	
	$('#btn-iniciar-jogo').click( function(){
		

		//tratamento de excessão para caso o jogador nao coloque seu nome no primeiro campo
		if ($('#colocar-nome-jogador-1').val() == '') {
			alert('o nome do primeiro jogador não foi preenchido');
			return false;
		}
		//tratamento de excessão para caso o jogador nao coloque seu nome no segundo campo
		if ($('#colocar-nome-jogador-2').val() == '') {
			alert('o nome do segundo jogador não foi preenchido');
			return false;
		}

		$('#nome-jogador-1').html($('#colocar-nome-jogador-1').val());
		$('#nome-jogador-2').html($('#colocar-nome-jogador-2').val());

		$('#inicio').hide();
		$('#jogo').show();
			
	})

	$('.jogada').click( function(){

		var id_campo_clicado=this.id;
		$('#'+id_campo_clicado).off();
		jogada(id_campo_clicado);

	});

	function jogada(id){
		var icone = '';
		var ponto = '0';

		if ((rodada%2) == 1) {
			icone='url(imagens/marcacao_1.png)'
			ponto=-1;
		}else{
			icone='url(imagens/marcacao_2.png)'
			ponto=1;
		}
		rodada++;
		$('#'+ id).css('background-image',icone);

		var lugar_marcado = id.split('-');
		matriz[lugar_marcado[0]][lugar_marcado[1]] = ponto;
		
		verifica();
	}
	
	function verifica(){

		
		var pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz['a'][i];
			
		}
		ganhador(pontos);

		var pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz['b'][i];
		}
		ganhador(pontos);

		pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz['c'][i];
		}
		ganhador(pontos);

		//verifica na vertical
		for(var l = 1; l <= 3; l++){
			pontos = 0;
			pontos += matriz['a'][l];
			pontos += matriz['b'][l];
			pontos += matriz['c'][l];

			ganhador(pontos);
		}

		//verificar na diagonal
		pontos = 0;
		pontos = matriz['a'][1] + matriz['b'][2] + matriz['c'][3];
		ganhador(pontos);

		pontos = 0;
		pontos = matriz['a'][3] + matriz['b'][2] + matriz['c'][1];
		ganhador(pontos);

	}		
	function ganhador(pontos){
		if (pontos == -3) {
			var vencedor_1 = $('#colocar-nome-jogador-1').val();
			alert(vencedor_1 + ' foi o ganhador');
			$('.jogada').off();
		} else if ( pontos == 3){
			var vencedor_2 = $('#colocar-nome-jogador-2').val();
			alert(vencedor_2 + 'foi o ganhador');
			$('.jogada').off();
		}
	}
});