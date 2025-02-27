# 🛡️ Security Dashboard

> Dashboard interativo para monitoramento de ameaças cibernéticas, análise de URLs e IPs suspeitos, e consulta de vazamento de dados. Construído com **Angular** e **D3.js**, consumindo APIs públicas de segurança.

## 🔥 Demonstração
📌 Em breve...

---

## 🚀 Funcionalidades
✅ **Visão Geral de Ameaças** – Estatísticas e gráficos sobre segurança cibernética.  
✅ **Consulta de URLs/IPs Suspeitos** – Verificação de domínios e endereços IPs maliciosos.  
✅ **Verificação de Vazamento de Dados** – Pesquisa se um e-mail foi comprometido.  
✅ **Mapa de Ataques Cibernéticos** – Exibição de eventos de ataque em tempo real.  
✅ **Gráficos Dinâmicos** – Uso de **D3.js** para visualizações interativas.  

---

## 🛠️ Tecnologias Utilizadas
- **Angular** – Framework frontend.  
- **D3.js** – Gráficos interativos e visualização de dados.  
- **Angular Material** – UI moderna e responsiva.  
- **APIs de Segurança** – Consumo de serviços externos para análise de ameaças.  

---

## 🔗 APIs Utilizadas
🔹 [VirusTotal API](https://developers.virustotal.com/reference/overview) – Análise de URLs/IPs/arquivos maliciosos.  
🔹 [Have I Been Pwned API](https://haveibeenpwned.com/API/v3) – Verificação de vazamento de credenciais.  
🔹 [Shodan API](https://developer.shodan.io/) – Busca por dispositivos vulneráveis.  
🔹 [AbuseIPDB API](https://www.abuseipdb.com/api.html) – Relatórios de IPs maliciosos.  
🔹 [Google Safe Browsing API](https://developers.google.com/safe-browsing/) – Verificação de links suspeitos.  

---

## 📂 Estrutura do Projeto

```plaintext
📂 security-dashboard/
 ├── 📂 src/
 │   ├── 📂 app/
 │   │   ├── 📂 components/       # Componentes reutilizáveis
 │   │   │   ├── card-info/       # Cards de estatísticas
 │   │   │   ├── threat-map/      # Mapa interativo de ataques
 │   │   │   ├── chart-graph/     # Gráficos D3.js
 │   │   ├── 📂 pages/            # Páginas principais do app
 │   │   │   ├── dashboard/       # Tela principal com overview
 │   │   │   ├── threat-check/    # Verificação de URLs/IPs
 │   │   │   ├── data-leaks/      # Consulta de vazamento de dados
 │   │   │   ├── attack-map/      # Mapa de ameaças
 │   │   ├── 📂 services/         # Serviços de API
 │   │   ├── 📂 models/           # Interfaces para tipagem de dados
 │   │   ├── app.module.ts
 │   │   ├── app.component.ts
 │   ├── 📂 assets/               # Ícones, imagens e estilos globais
 │   ├── 📂 environments/         # Configuração de API keys
 │   ├── index.html
 │   ├── styles.scss
