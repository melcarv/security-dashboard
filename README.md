# 🛡️ CyberSecurity Dashboard

## 📖 Sobre o Projeto  
O **CyberSecurity Dashboard** é uma aplicação web desenvolvida em **Angular** para monitoramento de ameaças cibernéticas. Ele permite visualizar estatísticas de segurança, analisar URLs/IPs suspeitos, verificar vazamento de dados e acompanhar ataques cibernéticos em tempo real através de gráficos interativos com **D3.js**.

---

## 🚀 Funcionalidades  
✅ **Painel de Controle** – Exibe estatísticas de ameaças cibernéticas.  
✅ **Analisador de URLs/IPs** – Verifica se um site ou IP está comprometido.  
✅ **Consulta de Vazamento de Dados** – Checa se um e-mail foi exposto em vazamentos.  
✅ **Mapa de Ataques Cibernéticos** – Mostra ataques em tempo real globalmente.  
✅ **Gráficos Interativos** – Utiliza **D3.js** para exibir visualizações dinâmicas.  

---

## 🖥️ Tecnologias Utilizadas  
- **Angular** – Framework frontend.  
- **D3.js** – Visualização de dados interativos.  
- **Angular Material** – UI moderna e responsiva.  
- **SCSS** – Estilização avançada.  

---

## 🔗 APIs Utilizadas  
- 🔍 [VirusTotal API](https://developers.virustotal.com/reference/overview) – Para análise de URLs/IPs.  
- 🔎 [Have I Been Pwned API](https://haveibeenpwned.com/API/v3) – Para consulta de vazamentos de credenciais.  
- 🌍 [Shodan API](https://developer.shodan.io/) – Para busca de dispositivos vulneráveis.  
- 🔥 [AbuseIPDB API](https://www.abuseipdb.com/api.html) – Para relatórios de IPs maliciosos.  
- 🛑 [Google Safe Browsing API](https://developers.google.com/safe-browsing/) – Para análise de links suspeitos.  

---

## 📂 Estrutura do Projeto  
```plaintext
📂 security-dashboard/
 ├── 📂 src/
 │   ├── 📂 app/
 │   │   ├── 📂 components/       # Componentes reutilizáveis
 │   │   │   ├── card-info/       # Card com informações de ameaças
 │   │   │   ├── threat-map/      # Mapa interativo de ataques
 │   │   │   ├── chart-graph/     # Gráficos D3.js para estatísticas
 │   │   ├── 📂 pages/            # Páginas principais
 │   │   │   ├── dashboard/       # Tela principal
 │   │   │   ├── threat-check/    # Verificação de URLs/IPs
 │   │   │   ├── data-leaks/      # Consulta de vazamentos
 │   │   │   ├── attack-map/      # Visualização de ataques
 │   │   ├── 📂 services/         # Consumo de APIs
 │   │   ├── 📂 models/           # Interfaces de tipagem
 │   │   ├── app.module.ts
 │   │   ├── app.component.ts
 │   ├── 📂 assets/               # Ícones, imagens e estilos globais
 │   ├── 📂 environments/         # Configuração de API keys
 │   ├── index.html
 │   ├── styles.scss
