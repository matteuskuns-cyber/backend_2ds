# Plano de Levantamento de Requisitos - Website Institucional

Este documento apresenta o planejamento estrutural e de conteúdo para as páginas do website, seguindo as especificações de identidade visual e navegação global.

## 🎨 Identidade Visual & Estrutura Global (Comum a Todas as Páginas)
*   **Paleta de Cores:** Primária (`#008000` verde), Secundária (`#FF8C00` laranja), Fundo (`#FFFFFF` branco), Texto (`#000000` preto).
*   **Navegação (Cabeçalho Fixo):** Logo/Nome da marca à esquerda e menu à direita com links para `/` (Início), `/produtos`, `/sobre` e `/contato`.
*   **Rodapé:** Direitos autorais atualizados (© 2026) e links para redes sociais fictícias (Facebook, Instagram, LinkedIn).
*   **Tecnologia:** HTML5 semântico e CSS3 puro (Flexbox/Grid), totalmente responsivo e sem frameworks externos.

---

## 🏠 1. Página Inicial (Home) - [PÁGINA INICIAL]
*   **Objetivo:** Causar um forte impacto visual, apresentar a proposta de valor da marca e direcionar o usuário para as seções internas.
*   **Seções de Conteúdo:**
    1.  **Hero Section (Destaque):** Um grande banner com um título chamativo (H1), um subtítulo explicativo e um botão principal (CTA - *Call to Action*) em laranja com fundo verde ou vice-versa, convidando a conhecer os produtos.
    2.  **Destaques/Benefícios:** Linha com 3 cards (Grid) mostrando os principais diferenciais da empresa (ícone fictício, título e breve descrição).
    3.  **Chamada Secundária:** Seção com fundo contrastante convidando o usuário a ler a história da empresa (link para `/sobre`).

## 📦 2. Página de Produtos (`/produtos`)
*   **Objetivo:** Exibir o catálogo de soluções ou produtos de forma organizada, limpa e de fácil navegação.
*   **Seções de Conteúdo:**
    1.  **Introdução:** Título da página (H1) com uma breve descrição do padrão de qualidade dos produtos.
    2.  **Grade de Produtos (Grid Layout):** Exibição de pelo menos 4 a 6 cards de produtos contendo:
        *   Imagem ilustrativa (placeholder).
        *   Nome do produto (H3) e preço fictício.
        *   Botão "Ver Detalhes" ou "Comprar" aplicando a cor secundária (laranja).
    3.  **Filtro Simples (Visual):** Uma barra superior simulando filtros por categoria.

## 🏢 3. Página Sobre Nós (`/sobre`)
*   **Objetivo:** Construir credibilidade, contar a história da marca, sua missão, visão e apresentar a equipe.
*   **Seções de Conteúdo:**
    1.  **Nossa História:** Layout em duas colunas (Flexbox) com um texto institucional detalhado de um lado e uma imagem corporativa do outro.
    2.  **Valores Fundamentais:** Lista estilizada ou blocos destacando Missão, Visão e Valores utilizando detalhes na cor verde primária.
    3.  **Seção da Equipe:** Uma linha de avatares com fotos fictícias, nomes e cargos dos fundadores ou principais colaboradores.

## ✉️ 4. Página de Contato (`/contato`)
*   **Objetivo:** Oferecer canais diretos de comunicação e capturar leads através de um formulário funcional.
*   **Seções de Conteúdo:**
    1.  **Informações de Contato:** Bloco com endereço físico fictício, e-mail de suporte e telefone.
    2.  **Formulário de Mensagem:** Layout centralizado e limpo contendo campos para:
        *   Nome Completo (input text).
        *   E-mail (input email).
        *   Assunto (select ou input text).
        *   Mensagem (textarea).
        *   Botão "Enviar Mensagem" estilizado em laranja com efeito hover.
    3.  **Mapa Integrado:** Espaço reservado (placeholder) para a simulação de um mapa de localização.
