    function GerenciadorInterface() {
    this.inicializar = function() {
        console.log('Script 2 carregado!');
        this.configurarEventos();
        this.carregarDadosIniciais();
    };
    
    this.configurarEventos = function() {
        const debouncedClick = utils.debounce(this.handleClick.bind(this), 300);
        
        document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn')) {
            debouncedClick(e);
        }
        });
        
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
        form.addEventListener('submit', this.handleSubmit.bind(this));
        });
    };
    
    this.handleClick = function(e) {
        e.preventDefault();
        const button = e.target;
        
        console.log('Botão clicado:', button.textContent);
        
        button.style.opacity = '0.8';
        setTimeout(() => {
        button.style.opacity = '1';
        }, 150);
        
        if (button.classList.contains('btn-success')) {
        this.mostrarMensagem('Operação realizada com sucesso!', 'success');
        } else {
        this.mostrarMensagem('Ação executada!', 'info');
        }
    };
    
    this.handleSubmit = function(e) {
        e.preventDefault();
        console.log('Formulário submetido');
        this.mostrarMensagem('Formulário enviado com sucesso!', 'success');
    };
    
    this.mostrarMensagem = function(mensagem, tipo) {
        const mensagemEl = document.createElement('div');
        mensagemEl.textContent = mensagem;
        mensagemEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        `;
        
        if (tipo === 'success') {
        mensagemEl.style.background = '#2ecc71';
        } else {
        mensagemEl.style.background = '#3498db';
        }
        
        document.body.appendChild(mensagemEl);
        
        setTimeout(() => {
        mensagemEl.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
        mensagemEl.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(mensagemEl);
        }, 300);
        }, 3000);
    };
    
    this.carregarDadosIniciais = function() {
        console.log('Carregando dados iniciais...');
        
        setTimeout(() => {
        this.mostrarMensagem('Página carregada com sucesso!', 'success');
        }, 1000);
    };
    }

    document.addEventListener('DOMContentLoaded', function() {
    const app = new GerenciadorInterface();
    app.inicializar();
});