# 📋 MVP de Tarefas - GDG Londrina

Um aplicativo web simples e responsivo para gerenciar suas tarefas diárias. Desenvolvido com HTML, CSS e JavaScript vanilla.

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** - Digite a descrição e clique em "Adicionar Tarefa" ou pressione Enter
- ✔️ **Concluir/Reabrir tarefas** - Marque tarefas como concluídas
- ✏️ **Editar tarefas** - Modifique a descrição de qualquer tarefa
- 🗑️ **Remover tarefas** - Delete tarefas não desejadas
- 📊 **Contador dinâmico** - Acompanhe tarefas pendentes e concluídas
- 💾 **Persistência** - Suas tarefas são salvas localmente
- 📱 **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- 🌙 **Tema escuro moderno** - Interface agradável aos olhos

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
   ```bash
   git clone <seu-repositorio>
   cd prova1
   ```

2. **Abra no navegador**
   - Clique duplo em `index.html` ou
   - Use um servidor local (Python, Node.js, etc.)

3. **Comece a usar!**
   - Digite sua tarefa no campo de entrada
   - Clique em "Adicionar Tarefa" ou pressione Enter
   - Use os botões para gerenciar suas tarefas

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Responsive design com `clamp()` e media queries
- **JavaScript (Vanilla)** - Lógica sem dependências
- **LocalStorage** - Persistência de dados

## 📐 Estrutura

```
prova1/
├── index.html      # Estrutura HTML
├── main.css        # Estilos CSS (tema escuro, responsivo)
├── main.js         # Lógica JavaScript
└── README.md       # Este arquivo
```

## 🎨 Paleta de Cores

- **Fundo**: `#0f172a` (Azul escuro profundo)
- **Cards**: `#1e293b` (Cinza azulado)
- **Accent**: `#06b6d4` (Ciano vibrante)
- **Sucesso**: `#10b981` (Verde)
- **Editar**: `#3b82f6` (Azul)
- **Remover**: `#f43f5e` (Rosa/Vermelho)

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

- [ ] Edição em linha sem prompt
- [ ] Categorias ou tags
- [ ] Temas customizáveis
- [ ] Sincronização em nuvem
- [ ] Notificações push

## 📝 Licença

Este projeto é livre para usar e modificar.

---

**Criado para o GDG Londrina** ❤️