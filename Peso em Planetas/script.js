function calcularPeso() {
    const peso = parseFloat(document.getElementById('peso').value);
    const planeta = parseInt(document.getElementById('planeta').value);
    const resultElement = document.getElementById('result');
    let pesoFinal = 0;
    let planetaNome = '';

    if (isNaN(peso)) {
        alert('Por favor, insira um valor válido para o peso.');
        return;
    }

    switch (planeta) {
        case 1:
            pesoFinal = peso * 0.37;
            planetaNome = 'Mercúrio';
            break;
        case 2:
            pesoFinal = peso * 0.88;
            planetaNome = 'Vênus';
            break;
        case 3:
            pesoFinal = peso * 0.38;
            planetaNome = 'Marte';
            break;
        case 4:
            pesoFinal = peso * 2.64;
            planetaNome = 'Júpiter';
            break;
        case 5:
            pesoFinal = peso * 1.15;
            planetaNome = 'Saturno';
            break;
        case 6:
            pesoFinal = peso * 1.17;
            planetaNome = 'Urano';
            break;
        default:
            resultElement.innerHTML = '<p>Planeta inválido!</p>';
            return;
    }

    resultElement.innerHTML = `
        <p>Seu peso em ${planetaNome} é de: <span>${pesoFinal.toFixed(2)} kg</span></p>
    `;
}
