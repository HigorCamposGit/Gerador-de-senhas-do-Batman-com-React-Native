# 🦇 Bat-Pass Generator — Sequenciador de Senhas com React Native

Aplicação mobile desenvolvida em **React Native** com **Expo** e **TypeScript** como entrega do desafio prático da formação React Native da **Digital Innovation One (DIO)**. O projeto consiste em um gerador de senhas fortes inspirado na identidade visual do Batman, evoluído com seletor dinâmico de tamanho de caracteres e interface Dark Mode interativa.

---

## 🚀 Funcionalidades Implementadas

* **Geração de Senhas Fortes:** Algoritmo aleatório combinando letras maiúsculas, minúsculas, números e caracteres especiais.
* **Seletor Dinâmico de Tamanho (Melhoria Extra):** Escolha rápida entre **8**, **12** ou **16 caracteres** antes de gerar a senha.
* **Cópia Instantânea (`Clipboard`):** Integração com `expo-clipboard` para copiar a senha gerada com um toque, exibindo confirmação visual temporária (`COPIED!`).
* **Interface Dark Mode & Micro-interações:** Estilização customizada em fundo preto profundo (`#0A0A0A`), botões em escala de cinza com bordas contrastantes, estados ativos e efeitos de `hover` e clique (`pressed`).

---

## 🎨 Evoluções Visuais e Técnicas Aplicadas

Em relação à versão base do desafio, foram realizadas as seguintes melhorias de engenharia e UI/UX:

1. **Parametrização do Serviço (`passwordService.ts`):** Refatoração da função `generatePass(passwordLength)` para aceitar tamanhos dinâmicos em vez de um valor fixo.
2. **Controle de Estado (`BatButton.tsx`):** Adição dos estados `passLength` (tamanho selecionado) e `copied` (feedback visual de cópia).
3. **Refinamento de Design (`Style.tsx` e `BatButtonStyle.tsx`):** Substituição da paleta cinza padrão por tema escuro de alto contraste (preto absoluto e grafite), mantendo o dourado (`#E5BF3C`) como cor de destaque funcional.

---

## 🛠️ Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Expo Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)

---

## 📂 Estrutura do Projeto

```text
├── assets/                     # Imagens e ícones da aplicação
├── src/
│   ├── components/
│   │   ├── BatButton/          # Botões de ação, seletor de tamanho e lógica de estado
│   │   ├── BatTextInput/       # Visor estilizado para exibição da senha gerada
│   │   └── Logo/               # Cabeçalho e identidade visual do app
│   ├── screens/
│   │   └── Home/               # Tela principal e layout base
│   └── services/
│       └── passwordService.ts  # Lógica de geração aleatória de senhas
├── App.tsx                     # Ponto de entrada da aplicação
└── package.json                # Dependências e scripts do projeto
```
---
> ## 🙏 Créditos e Referências
> 
> * **Projeto Base:** Desenvolvido a partir do repositório original [react-native-bat-pass-generator](https://github.com/felipeAguiarCode/react-native-bat-pass-generator).
> * **Instrutor:** [Felipe Aguiar](https://github.com/felipeAguiarCode) — Tech Educator na [DIO](https://www.dio.me/).

---

## 🤝 Conecte-se Comigo

<p align="center">
  <img src="https://github.com/HigorCamposGit.png" width="100px" style="border-radius: 50%;" alt="Foto de Higor de Campos" /><br />
  <b>Projeto atualizado por:</b> <a href="https://github.com/HigorCamposGit">Higor de Campos</a>
</p>

---

