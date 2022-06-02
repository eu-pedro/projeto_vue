const app = Vue.createApp({
    data(){
        return{
            bloco:{
                inicio: true,
                idade: false,
                cambio:false,
                diaSemana:false,
                desconto:false,
            },
            mensagem: {
                idade : "Cálculo da idade a partir do ano de nascimento inserido pelo usuário",
                cambio: "Cálculo do valor em reais a partir de um valor em dólar e cotação inserida pelo usuário",
                diaSemana : "Exibir o dia da semana a partir de uma data inserida pelo usuário",
                desconto : "Calcular  o  resultado  a  partir  de  um  valor  base  e  o percentual de desconto indicados pelo usuário"
            },
            textoInicial: 'Olá, Seja Bem Vindo ao Nosso Sistema',
            campoIdade: ''
    
            
            
        }
    
        },
        methods:{
            verificarLink(classe){
                // console.log(classe[1])
                let itens = classe[1] // CLASSE É UM PARÂMETRO QUE IRÁ CONTER UM VETOR COM AS CLASSES DA TAG NA QUAL A FUNÇÃO ESTÁ SENDO CHAMADA
                //FOR IN = PERCORRE OBJETOS
                //FOR OF = PERCORRE VETORES
                for(elementos in this.bloco){
                    // console.log(elementos)
                    if(itens == elementos){
                    //  console.log(`Você clicou em ${itens}`)
                    this.bloco[elementos] = true
                    this.textoInicial = this.mensagem[elementos]
                    }
                    else{
                        this.bloco[elementos] = false
                    }
                }
            },
            calcularIdade(){
                let anoAtual = new Date().getFullYear() // ESTOU PEGANDO O ANO ATUAL COM JAVASCRIPT
                let resposta = anoAtual - this.campoIdade
                console.log(resposta)
            }
        }
        
    
})  

app.mount('#app')