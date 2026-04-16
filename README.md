# 📋 MVP de Tarefas - GDG Londrina

Um aplicativo web simples e responsivo para gerenciar suas tarefas diárias. Desenvolvido com HTML, CSS e JavaScript vanilla.

## ✨ Funcionalidades

### Funcionalidades Core
- ✅ **Adicionar tarefas** - Digite a descrição e clique em "Adicionar Tarefa" ou pressione Enter
- ✔️ **Concluir/Reabrir tarefas** - Marque tarefas como concluídas com um clique
- ✏️ **Editar tarefas** - Modifique a descrição de qualquer tarefa
- 🗑️ **Remover tarefas** - Delete tarefas com confirmação
- 💾 **Persistência** - Suas tarefas são salvas automaticamente no navegador

### Funcionalidades Avançadas (Nível Senior)
- 🎯 **Sistema de Prioridades** - Defina Alta, Média ou Baixa prioridade para cada tarefa
- 📅 **Data de Vencimento** - Adicione datas limite e visualize status de atraso
- 🔍 **Busca em Tempo Real** - Busque tarefas instantaneamente
- 🏷️ **Filtros Avançados** - Filtre por status (Todas, Pendentes, Concluídas) ou prioridade
- 📊 **Estatísticas Completas** - Cards mostrando Pendentes, Concluídas, Taxa de Conclusão (%) e Total
- 🌙/☀️ **Tema Claro/Escuro** - Alterne entre temas conforme preferência
- 📥 **Exportar Dados** - Exporte suas tarefas em JSON
- 🎨 **UI Profissional** - Animações suaves, gradientes, sombras e transições
- 📱 **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
   ```bash
   git clone <seu-repositorio>
   cd prova1
   ```

2. **Abra no navegador**
   - Clique duplo em `index.html` ou
   - Use um servidor local (Python, Node.js, etc.)

3. **Começando**
   - Digite sua tarefa no campo de entrada
   - Escolha a prioridade (Alta, Média, Baixa)
   - Defina uma data de vencimento (opcional)
   - Clique em "+ Adicionar Tarefa" ou pressione Enter

4. **Gerenciando Tarefas**
   - Use os filtros para visualizar tarefas específicas
   - Busque por palavras-chave no campo de busca
   - Alterne entre temas claro e escuro
   - Exporte seus dados em JSON

5. **Acompanhe Progresso**
   - Veja estatísticas em tempo real
   - Monitor a taxa de conclusão
   - Acompanhe tarefas pendentes no badge lateral

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Responsive design com `clamp()`, media queries, gradientes e animações
- **JavaScript (Vanilla)** - Lógica pura sem dependências externas
- **LocalStorage** - Persistência de dados no navegador
- **JSON** - Exportação de dados

## 📐 Arquitetura

- **IIFE Pattern** - Encapsulamento de código
- **Separation of Concerns** - Lógica, UI e dados bem separados
- **Responsive Grid** - Layout moderno com CSS Grid
- **Event Delegation** - Gerenciamento eficiente de eventos
- **State Management** - Gerenciamento simples de estado com arrays

## 📐 Estrutura

```
prova1/
├── index.html      # Estrutura HTML
├── main.css        # Estilos CSS (tema escuro, responsivo)
├── main.js         # Lógica JavaScript
└── README.md       # Este arquivo
```

## 🎨 Variáveis de Cor (CSS Custom Properties)

```css
:root {
  --bg: #0f172a;              /* Fundo escuro */
  --card: #1e293b;            /* Cards */
  --text: #f1f5f9;            /* Texto */
  --accent: #06b6d4;          /* Cor primária */
  --high-priority: #ef4444;   /* Prioridade Alta */
  --medium-priority: #f59e0b; /* Prioridade Média */
  --low-priority: #10b981;    /* Prioridade Baixa */
}
```

## ⚡ Performance

- Renderização otimizada
- Animações suaves com CSS
- Debouncing na busca
- Lazy loading de componentes
- Minificação recomendada para produção

## 🔒 Segurança

- Sem dependências externas (reduz vulnerabilidades)
- Dados armazenados localmente
- Confirmação antes de deletar

## 🌍 Internacionalização

- Suporte a idiomas: Português (Brasil) como padrão
- Datas formatadas para pt-BR
- Ícones universais para melhor compreensão global

## 📱 Responsividade

- **Mobile** (até 480px) - Layout em coluna
- **Tablet** (481px - 768px) - Otimizado
- **Desktop** (769px+) - Layout expandido

## 🔧 Funcionalidades Técnicas

- IIFE (Immediately Invoked Function Expression) para encapsulamento
- Data com timestamp como ID único para tarefas
- Manipulação do DOM sem frameworks
- Event listeners para teclado (Enter) e mouse
- Tratamento de erros no JSON parse

## 💡 Melhorias Futuras

- [ ] Autenticação e sincronização em nuvem
- [ ] Categorias/Tags personalizadas
- [ ] Notificações push para tarefas vencidas
- [ ] Recurso Undo/Redo
- [ ] Gráficos de produtividade
- [ ] Integração com calendário
- [ ] Modo offline com Service Worker
- [ ] Importação de dados
- [ ] Compartilhamento de listas
- [ ] PWA (Progressive Web App)

## 📝 Licença

Este projeto é livre para usar e modificar.

---

**Criado para o GDG Londrina** ❤️