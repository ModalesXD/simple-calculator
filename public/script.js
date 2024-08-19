const resultPanel = document.getElementById('result');
const buttonsContainer = document.getElementById('buttons');
const buttonsOptions = [
    { id: 'sum', text: '+' },
    { id: 'sub', text: '-' },
    { id: 'mult', text: '*' },
    { id: 'div', text: '/' },
    { id: 'c', text: 'C' },
    { id: 'equal', text: '=' },
    { id: 'decimal', text: '.' },
    { id: '0', text: '0' },
    { id: '1', text: '1' },
    { id: '2', text: '2' },
    { id: '3', text: '3' },
    { id: '4', text: '4' },
    { id: '5', text: '5' },
    { id: '6', text: '6' },
    { id: '7', text: '7' },
    { id: '8', text: '8' },
    { id: '9', text: '9' }
];

// Función para agregar los botones al panel de botones
buttonsOptions.forEach(({ id, text }) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.id = id;
    button.addEventListener('click', () => {
        handleButtonClick(text);
    });
    buttonsContainer.appendChild(button);
});

// Maneja los clicks de los botones
function handleButtonClick(value) {
    if (value === 'C') {
        resultPanel.textContent = '0'; // Limpiar pantalla
    } else if (value === '=') {
        calculate(resultPanel.textContent); // Calcular el resultado
    } else {
        resultPanel.textContent += value; // Agregar valor al panel de resultados
    }
}

// Función para calcular el resultado
function calculate(data) {
    try {
        const result = eval(data); // Usar eval para calcular (ten cuidado con la seguridad)
        resultPanel.textContent = result;
    } catch (error) {
        resultPanel.textContent = '-0';
    }
}
