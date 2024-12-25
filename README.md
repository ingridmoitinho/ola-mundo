# Olá Mundo 🌎

Olá mundo é um projeto criado com o objetivo de **aprender e aplicar conceitos fundamentais do React Router** e boas práticas no desenvolvimento de aplicações React. Foi desenvolvido no curso **"React: Desenvolvendo em React Router com JavaScript"** da **Especialização Front-End React** oferecida pela Oracle One e Alura.  

- [Olá mundo - Figma](https://www.figma.com/design/svxB0KZaJIuqJdIaC7c7CF).
  
## 💡 Sobre o Projeto  
Este é um projeto introdutório para explorar o funcionamento de rotas em aplicações React. O foco principal foi compreender e implementar navegação entre páginas, tratamento de erros e reutilização de componentes, utilizando o React Router.

## 📚 Tecnologias Utilizadas  
- **React**  
- **React Router DOM**  
- **JavaScript (ES6+)**  
- **CSS Modules**  

## 🚀 Funcionalidades  
- Navegação entre diferentes páginas utilizando **React Router**.  
- Utilização de **rotas aninhadas** para reaproveitar componentes.  
- Implementação de boas práticas, como o uso de **componentes reutilizáveis** e o hook `useNavigate`.  
- Tratamento de páginas não encontradas (404).  
- Adição de um botão customizado (componente `BotaoPrincipal`).

## 🚀 Aprendizados  

### Diferenciar o comportamento de sites tradicionais e de SPAs  
- **Sites Tradicionais:** Compostos por várias páginas HTML, onde cada navegação realiza uma requisição ao servidor para carregar uma nova página.  
- **SPAs (Single Page Applications):** Compostas por uma única página HTML, onde o conteúdo é alterado dinamicamente por JavaScript, sem a necessidade de recarregar a página.

---

### Utilizar o componente Link do react-router-dom  
- **Comportamento SPA:** O `Link` evita o recarregamento completo da página ao navegar, mantendo a fluidez da aplicação.

---

### Utilizar o hook useLocation  
- Permite obter informações detalhadas sobre a rota atual, como o caminho, estado e parâmetros.

---

### Utilizar o componente NavLink do react-router-dom  
- Proporciona acesso direto ao estado do link (ativo ou inativo), permitindo estilização condicional.

---

### Identificar quando utilizar rotas aninhadas  
- **Exemplo:** As páginas `Inicio` e `SobreMim` foram configuradas como filhas de `PaginaPadrao` para reutilizar a estrutura de layout.  
- **Caso Especial:** Excluímos o `Banner` na página `404`, mostrando que nem todas as páginas herdam o layout padrão.

---

### Utilizar o componente Outlet  
- Um `Outlet` indica onde os componentes filhos serão renderizados dentro de uma rota pai.

---

### Utilizar o atributo index do Route  
- O atributo `index` define que a rota é igual ao caminho da rota pai, sendo útil para rotas padrão dentro de um grupo.

---



