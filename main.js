// main.js
(() => {
  // Elementos do DOM (IDs exigidos)
  const lista = document.getElementById('lista-tarefas');
  const input = document.getElementById('nova-tarefa');
  const btnAdicionar = document.getElementById('btn-adicionar');
  const contPendentes = document.getElementById('contador-pendentes');
  const contConcluidas = document.getElementById('contador-concluidas');
  const badgeNumber = document.getElementById('badge-number');

  // Dados
  let tarefas = [];

  // Carrega do localStorage (se houver)
  const salvar = () => localStorage.setItem('tarefas', JSON.stringify(tarefas));
  const carregar = () => {
    const data = localStorage.getItem('tarefas');
    if (data) {
      try {
        tarefas = JSON.parse(data);
      } catch {
        tarefas = [];
      }
    }
  };

  // Cria o elemento <li> da tarefa
  const criarItem = (tarefa) => {
    const li = document.createElement('li');
    li.className = 'tarefa-item';
    li.dataset.id = tarefa.id;

    const spanTexto = document.createElement('span');
    spanTexto.textContent = tarefa.texto;

    if (tarefa.concluida) {
      li.classList.add('concluida');
      spanTexto.style.textDecoration = 'line-through';
    }

    // Grupo de ações
    const divAcoes = document.createElement('div');
    divAcoes.className = 'acoes';

    // Concluir / Reabrir
    const btnConcluir = document.createElement('button');
    btnConcluir.className = 'btn-concluir';
    btnConcluir.textContent = tarefa.concluida ? 'Reabrir' : 'Concluir';
    btnConcluir.addEventListener('click', () => {
      tarefa.concluida = !tarefa.concluida;
      render();
      salvar();
    });

    // Editar
    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn-editar';
    btnEditar.textContent = 'Editar';
    btnEditar.addEventListener('click', () => {
      const novo = prompt('Editar tarefa:', tarefa.texto);
      if (novo !== null) {
        const textoNovo = novo.trim();
        if (textoNovo.length > 0) {
          tarefa.texto = textoNovo;
          render();
          salvar();
        }
      }
    });

    // Remover
    const btnRemover = document.createElement('button');
    btnRemover.className = 'btn-remover';
    btnRemover.textContent = 'Remover';
    btnRemover.addEventListener('click', () => {
      tarefas = tarefas.filter(t => t.id !== tarefa.id);
      render();
      salvar();
    });

    divAcoes.appendChild(btnConcluir);
    divAcoes.appendChild(btnEditar);
    divAcoes.appendChild(btnRemover);

    li.appendChild(spanTexto);
    li.appendChild(divAcoes);

    return li;
  };

  // Renderiza a lista
  const render = () => {
    lista.innerHTML = '';
    tarefas.forEach(t => {
      const item = criarItem(t);
      lista.appendChild(item);
    });
    atualizarContadores();
  };

  // Atualiza contadores
  const atualizarContadores = () => {
    const pendentes = tarefas.filter(t => !t.concluida).length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    contPendentes.textContent = pendentes;
    contConcluidas.textContent = concluidas;
    badgeNumber.textContent = pendentes;
  };

  // Adiciona nova tarefa
  const adicionar = () => {
    const texto = input.value.trim();
    if (texto.length === 0) return;
    const tarefa = {
      id: Date.now().toString(),
      texto,
      concluida: false
    };
    tarefas.push(tarefa);
    input.value = '';
    render();
    salvar();
    input.focus();
  };

  // Eventos de UI
  btnAdicionar.addEventListener('click', adicionar);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') adicionar();
  });

  // Modal de Ajuda
  const modalAjuda = document.getElementById('modal-ajuda');
  const btnAjuda = document.getElementById('btn-ajuda');
  const btnFecharAjuda = document.getElementById('btn-fechar-ajuda');

  btnAjuda.addEventListener('click', () => {
    modalAjuda.classList.add('ativo');
  });

  btnFecharAjuda.addEventListener('click', () => {
    modalAjuda.classList.remove('ativo');
  });

  modalAjuda.addEventListener('click', (e) => {
    if (e.target === modalAjuda) {
      modalAjuda.classList.remove('ativo');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalAjuda.classList.remove('ativo');
    }
  });

  // Fluxo de inicialização
  const iniciar = () => {
    carregar();
    render();
  };

  iniciar();
})();