<placemark>inicio</placemark>
<clear></clear>
<sleep>1000</sleep>

<!-- login do TRT2 -->
<open>https://pje.trt2.jus.br/primeirograu/login.seam</open>
<sleep until="!${loading}">300</sleep>
<sleep>2000</sleep>


<set name="dados" type="json">
    ${request.body}
    <mock>
        {
        "login":"xxxxx",
        "senha":"xxxx",
        "pesquisa":"sentença",
        "numero_processo":"1000242-24.2025.5.0xxx.xxxx",
        "anexos":[
            {
                "nome":"documento.pdf",
                "tipo":"5",
                "path":"C:/Users/xxxxx/Documents/documento/xxxxx.pdf";
            }
        ]
        }
    </mock>
</set>

<!-- Clicar no botão SSO de forma humanizada -->
<script return-to="botao_existe" return-type="number">
    document.querySelector("#btnSsoPdpj") != null ? 1 : 0
</script>
<sleep until="${botao_existe}==1">300</sleep>

<script return-to="$btn_coords" return-type="json">
    var rect = document.querySelector("#btnSsoPdpj").getBoundingClientRect();
    JSON.stringify({ x: Math.round(rect.x) + 10, y: Math.round(rect.y) + 10 })
</script>

<mouse-move x="${$btn_coords.x}" y="${$btn_coords.y}">Mover ao botão login</mouse-move>
<sleep>500</sleep>
<mouse-click x="${$btn_coords.x}" y="${$btn_coords.y}">Clique no botão login</mouse-click>

<!-- Aguardar nova aba de login do SSO -->
<browser change>1</browser>
<sleep>3000</sleep>

<script return-to="campo_login_existe" return-type="number">
    document.querySelector("#username") != null ? 1 : 0
</script>
<sleep until="${campo_login_existe}==1">300</sleep>

<send-keys delay="130~250">10538268859</send-keys>
<send-keys>{TAB}</send-keys>
<sleep>1000</sleep>
<send-keys delay="130~250">Ra241216</send-keys>
<sleep>1000</sleep>

<!-- Obter coordenadas do botão de login -->
<script return-to="$kc_coords" return-type="json">
    var btn = document.querySelector("#kc-login");
    if (!btn) throw new Error("Botão de login não encontrado");
    var rect = btn.getBoundingClientRect();
    JSON.stringify({ x: Math.round(rect.left) + 10, y: Math.round(rect.top) + 10 });
</script>

<mouse-move x="${$kc_coords.x}" y="${$kc_coords.y}">Mover até botão Entrar</mouse-move>
<sleep>500</sleep>
<mouse-click x="${$kc_coords.x}" y="${$kc_coords.y}">Clique no botão Entrar</mouse-click>
<sleep>3000</sleep>

<sleep>4000</sleep>
<script return-to="campo_proc_existe" return-type="number">
    document.querySelector("#inputNumeroProcesso") != null ? 1 : 0
</script>
<sleep until="${campo_proc_existe}==1">300</sleep>

<script return-to="$campo_proc_coords" return-type="json">
    var campo = document.querySelector("#inputNumeroProcesso");
    var rect = campo.getBoundingClientRect();
    JSON.stringify({ x: Math.round(rect.left) + 10, y: Math.round(rect.top) + 10 });
</script>

<mouse-move x="${$campo_proc_coords.x}" y="${$campo_proc_coords.y}">Mover até campo do processo</mouse-move>
<sleep>400</sleep>
<mouse-click x="${$campo_proc_coords.x}" y="${$campo_proc_coords.y}">Clique no campo do processo</mouse-click>
<sleep>500</sleep>

<send-keys delay="120~200">${dados.numero_processo}</send-keys>
<sleep>1000</sleep>

<!-- Abrir a URL de detalhes do processo -->
<open>https://pje.trt2.jus.br/pjekz/processo/6997511/detalhe</open>
<sleep until="!${loading}">300</sleep>
<sleep>2000</sleep>

<script return-to="$retang" return-type="json">
    var btn = document.querySelector('button#botao-menu');
  
    if (btn) {
      var rect = btn.getBoundingClientRect();
      JSON.stringify({
        x: Math.round(rect.left + rect.width / 2),
        y: Math.round(rect.top + rect.height / 2)
      });
    } else {
      console.error("Botão 'Menu do processo' não encontrado.");
      JSON.stringify({ x: 0, y: 0 });
    }
  </script>
  
  <mouse-move x="${$retang.x}" y="${$retang.y}">Mover até botão Menu do processo</mouse-move>
  <sleep>300</sleep>
  <mouse-click x="${$retang.x}" y="${$retang.y}">Clicar em Menu do processo</mouse-click>
  <sleep>1000</sleep>

  <script return-to="$retang_peticionar" return-type="json">
    var btnPeticionar = document.querySelector("body > pje-root > mat-sidenav-container > mat-sidenav-content > div > div > pje-historico > div > pje-resumo-processo > mat-card > section.secao-acoes-processo > pje-menu-processo > mat-card > ul > li:nth-child(22) > pje-icone-peticionar-documento > li > button");
  
    if (btnPeticionar) {
      var rect = btnPeticionar.getBoundingClientRect();
      JSON.stringify({
        x: Math.round(rect.left + rect.width / 2),
        y: Math.round(rect.top + rect.height / 2)
      });
    } else {
      console.error("Botão 'Peticionar Documento' não encontrado.");
      JSON.stringify({ x: 0, y: 0 });
    }
  </script>
  
  <sleep>500</sleep>
  <mouse-move x="${$retang_peticionar.x}" y="${$retang_peticionar.y}">Mover até botão Peticionar</mouse-move>
  <sleep>300</sleep>
  <mouse-click x="${$retang_peticionar.x}" y="${$retang_peticionar.y}">Clicar no botão Peticionar</mouse-click>
  <sleep>1000</sleep>

  <!-- Abrir a URL de anexar petição -->
<open>https://pje.trt2.jus.br/pjekz/processo/6997511/documento/anexar</open>
<sleep until="!${loading}">300</sleep>
<sleep>2000</sleep>
<sleep>1000</sleep>

<sleep>1000</sleep>
<sleep>1000</sleep>

<script return-to="$lista_tipos" return-type="json">
    var lista_tipos = [];
    document.querySelectorAll('#mat-autocomplete-0 mat-option .mat-option-text')
        .forEach(p => lista_tipos.push(p.textContent.trim()));
    console.log(lista_tipos);
    JSON.stringify(lista_tipos);
</script>

<sleep>1000</sleep>

<sleep>500</sleep>

<sleep>1000</sleep>

<!-- Clicar no input usando coordenadas -->
<script return-to="$coord_input" return-type="json">
    var input = document.getElementById("mat-input-1");
    if (input) {
        var rect = input.getBoundingClientRect();
        JSON.stringify({
            x: Math.round(rect.left + rect.width / 2),
            y: Math.round(rect.top + rect.height / 2)
        });
    } else {
        console.error("Campo de input não encontrado.");
        JSON.stringify({ x: 0, y: 0 });
    }
</script>

<sleep>300</sleep>
<mouse-move x="${$coord_input.x}" y="${$coord_input.y}">Mover até o campo de input</mouse-move>
<sleep>200</sleep>
<mouse-click x="${$coord_input.x}" y="${$coord_input.y}">Clicar no campo de input</mouse-click>

<sleep>500</sleep>

<!-- Simular digitação no input -->
<script>
    var input = document.getElementById("mat-input-1");
    if (input) {
        input.focus();
        input.value = "Agravo de Petição";
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }
</script>

<sleep>1000</sleep>

<!-- Obter coordenadas da opção correspondente -->
<script return-to="$coord_opcao_agravo" return-type="json">
    var opcoes = document.querySelectorAll('#mat-autocomplete-0 mat-option');
    var alvo = Array.from(opcoes).find(opt => opt.innerText.includes("Agravo de Petição"));
    if (alvo) {
        var rect = alvo.getBoundingClientRect();
        JSON.stringify({
            x: Math.round(rect.left + rect.width / 2),
            y: Math.round(rect.top + rect.height / 2)
        });
    } else {
        console.error("Opção 'Agravo de Petição' não encontrada.");
        JSON.stringify({ x: 0, y: 0 });
    }
</script>

<sleep>300</sleep>
<mouse-move x="${$coord_opcao_agravo.x}" y="${$coord_opcao_agravo.y}">Mover até opção 'Agravo de Petição'</mouse-move>
<sleep>200</sleep>
<mouse-click x="${$coord_opcao_agravo.x}" y="${$coord_opcao_agravo.y}">Selecionar 'Agravo de Petição'</mouse-click>

<sleep>1000</sleep>
<sleep>1000</sleep>

<script return-to="$coord_input_arquivo" return-type="json">
    //Adicionar o anexo
var inputArquivo = document.querySelector("input[type='file']#upload-anexo-0");
if (inputArquivo) {
    var rect = inputArquivo.getBoundingClientRect();
    JSON.stringify({
        x: Math.round(rect.left + rect.width / 2),
        y: Math.round(rect.top + rect.height / 2)
    });
} else {
    console.error("Campo de upload de arquivo não encontrado.");
    JSON.stringify({ x: 0, y: 0 });
}
</script>

<mouse-move x="${$coord_input_arquivo.x}" y="${$coord_input_arquivo.y}">Mover até o campo de upload</mouse-move>
<sleep>300</sleep>
<mouse-click x="${$coord_input_arquivo.x}" y="${$coord_input_arquivo.y}">Clicar no campo de upload</mouse-click>
<sleep>500</sleep>

<script file-dialog="${dados.anexos[0].path}">
    console.log("${dados.anexos[0].tipo}");
</script>
<sleep>1000</sleep>

<script return-to="$retang" return-type="json">
    // Obter as coordenadas do campo de upload de arquivo
    var retang = document.getElementById("upload-anexo-0").getBoundingClientRect(); // ID correto para o input de tipo 'file'
    JSON.stringify({ x: Math.round(retang.x) + 10, y: Math.round(retang.y) + 3 });
</script>

<sleep>200</sleep>

<mouse-move x="${$retang.x}" y="${$retang.y}">Mover até o botão de upload</mouse-move>
<sleep>300</sleep>

<mouse-click x="${$retang.x}" y="${$retang.y}">Clique no botão de upload</mouse-click>

<script file-dialog="${dados.anexos[0].path}">
    console.log("${dados.anexos[0].tipo}");
</script>
<sleep>1000</sleep>

<script return-to="$retang" return-type="json">
    // Capturar as coordenadas do campo de upload de arquivo
    var retang = document.getElementById("upload-anexo-0").getBoundingClientRect(); // Certifique-se de que o ID está correto
    JSON.stringify({ x: Math.round(retang.x) + 10, y: Math.round(retang.y) + 3 });
    <sleep>200</sleep>
    </script>

<!-- Simulando movimento do mouse de forma mais humanizada -->
<mouse-move x="${$retang.x}" y="${$retang.y}">selecione um arquivo</mouse-move>
<sleep>500</sleep> <!-- Pausa para o movimento parecer mais realista -->

<!-- Simulando o clique no botão -->
<mouse-click x="${$retang.x}" y="${$retang.y}">selecione um arquivo</mouse-click>

<script>
    // Caminho do arquivo a ser anexado
    var caminhoArquivo // Caminho do arquivo PDF

    // Selecionar o campo de input do tipo 'file'
    var inputArquivo = document.querySelector("input[type='file']#upload-anexo-0");
    if (inputArquivo) {
        // Preencher o campo de input com o caminho do arquivo
        inputArquivo.value = caminhoArquivo; // Caminho do arquivo local

        // Disparar o evento 'change' para simular a seleção do arquivo
        inputArquivo.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
        console.error("Campo de upload de arquivo não encontrado.");
    }
</script>

<sleep>1000</sleep>
<sleep>1000</sleep>

<screenshot></screenshot>
<sleep>1000</sleep>


<script return-to="$retang_salvar" return-type="json">
    // Captura as coordenadas do botão de "Salvar"
    var btnSalvar = document.querySelector("body > pje-root > mat-sidenav-container > mat-sidenav-content > div > div > ng-component > div > pje-anexar-documento > div > pje-duas-colunas > div > div.coluna.esquerda > form > div > div.metadados > button");
    if (btnSalvar) {
        var retang = btnSalvar.getBoundingClientRect();
        JSON.stringify({ x: Math.round(retang.x) + 10, y: Math.round(retang.y) + 3 });
    } else {
        console.error("Botão 'Salvar' não encontrado.");
        JSON.stringify({ x: 0, y: 0 });
    }
</script>

<sleep>200</sleep>

<!-- Simulando o movimento do mouse até o botão -->
<mouse-move x="${$retang_salvar.x}" y="${$retang_salvar.y}">Mover até o botão 'Salvar'</mouse-move>
<sleep>500</sleep> <!-- Pausa para um movimento mais realista -->

<!-- Simulando o clique no botão -->
<mouse-click x="${$retang_salvar.x}" y="${$retang_salvar.y}">Clique no botão 'Salvar'</mouse-click>


<script return-to="$retang_assinar" return-type="json">
    // Captura as coordenadas do botão de "Assinar documento"
    var btnAssinar = document.querySelector("button[aria-label='Assinar documento e juntar ao processo']");
    if (btnAssinar) {
        var retang = btnAssinar.getBoundingClientRect();
        JSON.stringify({ x: Math.round(retang.x) + 10, y: Math.round(retang.y) + 3 });
    } else {
        console.error("Botão 'Assinar documento' não encontrado.");
        JSON.stringify({ x: 0, y: 0 });
    }
</script>

<sleep>200</sleep>

<!-- Simulando o movimento do mouse até o botão -->
<mouse-move x="${$retang_assinar.x}" y="${$retang_assinar.y}">Mover até o botão 'Assinar documento'</mouse-move>
<sleep>500</sleep> <!-- Pausa para um movimento mais realista -->

<!-- Simulando o clique no botão -->
<mouse-click x="${$retang_assinar.x}" y="${$retang_assinar.y}">Clique no botão 'Assinar documento'</mouse-click>
<sleep>3000</sleep>

<!-- Aguardar o botão de download aparecer -->
<script return-to="$retang_download" return-type="json">
    var btnDownload = document.querySelector("button[mattooltip='Baixar documento com capa (sem assinatura digital válida)']");
    if (btnDownload) {
        var rect = btnDownload.getBoundingClientRect();
        JSON.stringify({ x: Math.round(rect.x + rect.width / 2), y: Math.round(rect.y + rect.height / 2) });
    } else {
        console.error("Botão de download não encontrado.");
        JSON.stringify({ x: 0, y: 0 });
    }
</script>

<sleep>200</sleep>

<!-- Simulando o movimento do mouse até o botão de download -->
<mouse-move x="${$retang_download.x}" y="${$retang_download.y}">Mover até o botão de download</mouse-move>
<sleep>500</sleep>

<!-- Simulando o clique no botão de download -->
<mouse-click x="${$retang_download.x}" y="${$retang_download.y}">Clique no botão de download</mouse-click>
<sleep>3000</sleep>

<!-- Salvar o arquivo no caminho especificado -->
<script>
    const downloadPath = "C:/Users/vnek/Documents";
    console.log(`Documento baixado e salvo em: ${downloadPath}`);
</script>

<sleep>1000</sleep>
<sleep>1000</sleep>

<sleep>1000</sleep>
<sleep>1000</sleep>

<screenshot></screenshot>
<sleep>1000</sleep>    
</script>


