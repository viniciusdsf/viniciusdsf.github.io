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

alert('2');
$(document).ready(function(){

	alert('TESTE');
	$('#btn-iniciar-jogo').click( function(){
		

		alert('1');
		if ($('#colocar-nome-jogador-1').val() == '') {
			alert('o nome do primeiro jogador não foi preenchido');
			return false;
		}

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
		martriz[lugar_marcado[0]][lugar_marcado[1]] = ponto;
	}
	
	function verifica(){

		var pontos=0;
		for (var i = 1; i <= 3; i++) {
			pontos += matriz['a'][i];
		}
		ganhador(pontos);

		var pontos=0;
		for (var i = 1; i <= 3; i++) {
			pontos += matriz['b'][i];
		}
		ganhador(pontos);

		var pontos=0;
		for (var i = 1; i <= 3; i++) {
			pontos += matriz['c'][i];
		}
		ganhador(pontos);

		for(l=1;l<=3;l++){
			pontos=0;
			pontos+= matriz['a'][l];
			pontos+= matriz['b'][l];
			pontos+= matriz['c'][l];
		}
		ganhador(pontos);

		pontos=0;
		pontos = matriz['a'][1]+matriz['b'][2]+matriz['c'][3];
		ganhador(pontos);

		pontos=0;
		pontos = matriz['c'][1]+matriz['b'][2]+matriz['a'][3];
		ganhador(pontos);
		
	}		
	function ganhador(pontos){
		if (pontos == -3) {
			var vencedor_1 = $('#nome-jogador-1').val();
			alert(vencedor_1 + 'foi o ganhador');
			$('.jogada').off();
		}if else ( pontos == 3){
			var vencedor_2 = $('#nome-jogador-2').val();
			alert(vencedor_2 + 'foi o ganhador');
			$('.jogada').off();
		}
	}
});