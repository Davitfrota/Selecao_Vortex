
var N = parseInt(prompt("Quantidade de treinos ?"));

   for(i = 0; i < N;i++){

        /*Ex --> T=3, Q=3, X=2*/ 
        var T = parseInt(prompt("Quantos segundos restantes até o fim da jogada ?"));/* 0 < 24 (Tempo do treino) */
        var Q = parseInt(prompt("Qual a quantidade de jogadores em quadra ?"));/* 2 < Q <= 5 | (Quantidade de jogadores) */
        var X = parseInt(prompt("Tempo de reposicionamento dos jogadores após o passe ?"));/* 0 < x <= Q - 1 | (Tempo de reposicionamento) */
        
       
        var JogadoresDisponiveis = ((Q-X)*(T-(X-1)));/*JogadoresDisponiveis = 2 */
       
        var JogadoresReposicionamento = 0;
        /*Soma dos jogadores se reposicionando inicialmente*/
        for(k = 0; k < X-1; k++){
          JogadoresReposicionamento += Q-(k+1);  
        }
        
       var Result = JogadoresReposicionamento + JogadoresDisponiveis;
       alert("A soma de jogadores livres para cada passe no treino é ");
      
    }
   

