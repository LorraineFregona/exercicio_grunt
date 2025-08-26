    function Utilitarios() {
    console.log('Script 1 carregado!');
    }

    Utilitarios.prototype = {

    formatarData: function(data) {
        return new Date(data).toLocaleDateString('pt-BR');
    },
    

    validarEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    

    mascararCPF: function(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },

    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        };
    }
};

const utils = new Utilitarios();