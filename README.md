# TRT2_CONSULTA_ASSINATURA.abml
# PJe Automation - TRT2

Este projeto automatiza o login, peticionamento e download de documentos no PJe TRT2, utilizando scripts baseados em XML, JavaScript e JSON.

## Estrutura

- `script/login-peticionar.xml`: script principal
- `script/config.json`: dados de entrada
- `utils/`: funções auxiliares DOM

## Como usar

Este projeto é compatível com [seu engine/script runner]. Para executar:

```bash
runner --script script/login-peticionar.xml --data script/config.json
