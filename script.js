function calcularEnergia() {
    const nucleoInput = document.getElementById('nucleo-input').value;
    const resultado = document.getElementById('resultado');
    const nucleo = parseFloat(nucleoInput);

    if (isNaN(nucleo) || nucleo < 1) {
        resultado.textContent = 'Insira um número válido de núcleos de deutério (maior que 0).';
        return;
    }

    const energiaPorNucleoJoules = 3.2 * Math.pow(10, -19); // Joules por núcleo
    const totalEnergiaJoules = nucleo * energiaPorNucleoJoules;

    resultado.textContent = `Energia liberada: ${totalEnergiaJoules.toExponential(4)} J`;
}
