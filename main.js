// main.js - Sistema de Gerenciamento de Tarefas Senior
(() => {
  // ============ ELEMENTOS DO DOM ============
  const lista = document.getElementById('lista-tarefas');
  const input = document.getElementById('nova-tarefa');
  const btnAdicionar = document.getElementById('btn-adicionar');
  const contPendentes = document.getElementById('contador-pendentes');
  const contConcluidas = document.getElementById('contador-concluidas');
  const badgeNumber = document.getElementById('badge-number');
  const busca = document.getElementById('busca');
  const prioridade = document.getElementById('prioridade');
  const dataVencimento = document.getElementById('data-vencimento');
  const modalAjuda = document.getElementById('modal-ajuda');
  const btnAjuda = document.getElementById('btn-ajuda');
  const btnFecharAjuda = document.getElementById('btn-fechar-ajuda');
  const btnTema = document.getElementById('btn-tema');
  const btnExportar = document.getElementById('btn-exportar');
  const listaVazia = document.getElementById('lista-vazia');

  // ============ DADOS ============
  let tarefas = [];
  let filtroAtual = 'todas';
  let buscaAtual = '';

  // ============ LOCALSTORAGE ============
  const salvar = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage.setItem('tema', document.documentElement.classList.contains('light-theme') ? 'light' : 'dark');
  };

  const carregar = () => {
    const data = localStorage.getItem('tarefas');
    const tema = localStorage.getItem('tema');
    
    if (data) {
      try {
        tarefas = JSON.parse(data);
      } catch {
        tarefas = [];
      }
    }

    if (tema === 'light') {
      document.documentElement.classList.add('light-theme');
      btnTema.textContent = '☀️';
    }
  };

  // ============ CRIAÇÃO DE ITENS ============
  const criarItem = (tarefa) => {
    const li = document.createElement('li');
    li.className = 'tarefa-item ' + tarefa.prioridade;
    li.dataset.id = tarefa.id;
    li.draggable = true;

    // Conteúdo
    const conteudo = document.createElement('div');
    conteudo.className = 'tarefa-conteudo';

    const texto = document.createElement('p');
    texto.className = 'tarefa-texto';
    texto.textContent = tarefa.texto;

    // Meta (data + prioridade)
    const meta = document.createElement('div');
    meta.className = 'tarefa-meta';

    if (tarefa.dataVencimento) {
      const dataElement = document.createElement('span');
      const hoje = new Date().toISOString().split('T')[0];
      const dataClass = tarefa.dataVencimento < hoje && !tarefa.concluida ? 'atrasada' : '';
      dataElement.textContent = `📅 ${new Date(tarefa.dataVencimento).toLocaleDateString('pt-BR')}`;
      dataElement.style.color = dataClass ? '#ef4444' : 'var(--muted)';
      meta.appendChild(dataElement);
    }

    const prioridadeBadge = document.createElement('span');
    prioridadeBadge.className = 'prioridade-badge';
    const priorityIcons = { alta: '🔴', media: '🟡', baixa: '🟢' };
    prioridadeBadge.textContent = `${priorityIcons[tarefa.prioridade]} ${tarefa.prioridade.charAt(0).toUpperCase() + tarefa.prioridade.slice(1)}`;
    meta.appendChild(prioridadeBadge);

    conteudo.appendChild(texto);
    conteudo.appendChild(meta);

    if (tarefa.concluida) {
      li.classList.add('concluida');
    }

    // Ações
    const divAcoes = document.createElement('div');
    divAcoes.className = 'acoes';

    // Concluir/Reabrir
    const btnConcluir = document.createElement('button');
    btnConcluir.className = 'btn-concluir';
    btnConcluir.textContent = tarefa.concluida ? '↩️ Reabrir' : '✓ Concluir';
    btnConcluir.addEventListener('click', () => {
      tarefa.concluida = !tarefa.concluida;
      render();
      salvar();
    });

    // Editar
    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn-editar';
    btnEditar.textContent = '✏️ Editar';
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
    btnRemover.textContent = '🗑️ Remover';
    btnRemover.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja remover esta tarefa?')) {
        tarefas = tarefas.filter(t => t.id !== tarefa.id);
        render();
        salvar();
      }
    });

    divAcoes.appendChild(btnConcluir);
    divAcoes.appendChild(btnEditar);
    divAcoes.appendChild(btnRemover);

    li.appendChild(conteudo);
    li.appendChild(divAcoes);

    // Drag & Drop
    li.addEventListener('dragstart', () => {
      li.style.opacity = '0.5';
    });
    li.addEventListener('dragend', () => {
      li.style.opacity = '1';
    });

    return li;
  };

  // ============ FILTROS E BUSCA ============
  const filtrarTarefas = () => {
    let tarefasFiltradas = tarefas;

    // Filtro por status
    if (filtroAtual === 'pendentes') {
      tarefasFiltradas = tarefasFiltradas.filter(t => !t.concluida);
    } else if (filtroAtual === 'concluidas') {
      tarefasFiltradas = tarefasFiltradas.filter(t => t.concluida);
    } else if (['alta', 'media', 'baixa'].includes(filtroAtual)) {
      tarefasFiltradas = tarefasFiltradas.filter(t => t.prioridade === filtroAtual);
    }

    // Filtro de busca
    if (buscaAtual) {
      tarefasFiltradas = tarefasFiltradas.filter(t =>
        t.texto.toLowerCase().includes(buscaAtual.toLowerCase())
      );
    }

    return tarefasFiltradas;
  };

  // ============ RENDERIZAÇÃO ============
  const render = () => {
    const tarefasFiltradas = filtrarTarefas();
    lista.innerHTML = '';

    if (tarefasFiltradas.length === 0 && tarefas.length > 0) {
      listaVazia.style.display = 'block';
    } else if (tarefasFiltradas.length === 0) {
      listaVazia.style.display = 'block';
    } else {
      listaVazia.style.display = 'none';
    }

    tarefasFiltradas.forEach((t, index) => {
      const item = criarItem(t);
      item.style.animationDelay = `${index * 0.05}s`;
      lista.appendChild(item);
    });

    atualizarContadores();
  };

  // ============ CONTADORES ============
  const atualizarContadores = () => {
    const pendentes = tarefas.filter(t => !t.concluida).length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    const total = tarefas.length;
    const taxa = total === 0 ? 0 : Math.round((concluidas / total) * 100);

    contPendentes.textContent = pendentes;
    contConcluidas.textContent = concluidas;
    badgeNumber.textContent = pendentes;

    // Estatísticas
    document.getElementById('stat-pendentes').textContent = pendentes;
    document.getElementById('stat-concluidas').textContent = concluidas;
    document.getElementById('stat-taxa').textContent = taxa + '%';
    document.getElementById('stat-total').textContent = total;
  };

  // ============ ADICIONAR TAREFA ============
  const adicionar = () => {
    const texto = input.value.trim();
    if (texto.length === 0) return;

    const tarefa = {
      id: Date.now().toString(),
      texto,
      prioridade: prioridade.value,
      dataVencimento: dataVencimento.value,
      concluida: false,
      dataCriacao: new Date().toISOString()
    };

    tarefas.push(tarefa);
    input.value = '';
    dataVencimento.value = '';
    prioridade.value = 'media';
    render();
    salvar();
    input.focus();
  };

  // ============ EVENTOS - ADICIONAR TAREFA ============
  btnAdicionar.addEventListener('click', adicionar);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') adicionar();
  });

  // ============ EVENTOS - FILTROS ============
  busca.addEventListener('input', (e) => {
    buscaAtual = e.target.value;
    render();
  });

  const botoesFiltros = document.querySelectorAll('.btn-filtro');
  botoesFiltros.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesFiltros.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      filtroAtual = btn.dataset.filtro;
      render();
    });
  });

  // ============ EVENTOS - MODAL AJUDA ============
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

  // ============ EVENTOS - TEMA ============
  btnTema.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    btnTema.textContent = document.documentElement.classList.contains('light-theme') ? '☀️' : '🌙';
    salvar();
  });

  // ============ EVENTOS - EXPORTAR ============
  btnExportar.addEventListener('click', () => {
    const dataStr = JSON.stringify(tarefas, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tarefas_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  // ============ INICIALIZAÇÃO ============
  const iniciar = () => {
    carregar();
    render();
  };

  iniciar();
})();