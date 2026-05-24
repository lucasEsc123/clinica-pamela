let saldo = 0;
let entradas = 0;
let saidas = 0;

const ctx = document.getElementById('graficoPizza');

const grafico = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Entradas', 'Saídas'],
        datasets: [{
            data: [0, 0]
        }]
    }
});

function adicionarMovimento(){

    let descricao = document.getElementById("descricao").value;
    let valor = Number(document.getElementById("valor").value);
    let tipo = document.getElementById("tipo").value;

    if(descricao === "" || valor <= 0){
        alert("Preencha os campos corretamente");
        return;
    }

    let tabela = document.getElementById("tabela-financeiro");

    if(tipo === "entrada"){
        saldo += valor;
        entradas += valor;
    } else {
        saldo -= valor;
        saidas += valor;
    }

    document.getElementById("saldo").innerText =
        "R$ " + saldo;

    let linha = `
        <tr>
            <td>${descricao}</td>
            <td>${tipo}</td>
            <td>R$ ${valor}</td>
        </tr>
    `;

    tabela.innerHTML += linha;

    grafico.data.datasets[0].data = [entradas, saidas];
    grafico.update();

    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
}
