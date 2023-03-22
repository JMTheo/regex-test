const cnae_list = '47.44-0-05 - Comércio varejista de mat9999eriais de construção não especificados anteriormente,47.44-0-04 - Comér44433cio varejista de cal, areia, pedra britada, tijolos e telhas,47.44-0-03 - Comércio var44444ejista de materiais hidráulicos,47.44-0-01 - Comércio varejista de ferragens e ferramentas,47.42-3-00 - Comércio varejista de material elétrico,47.41-5-00 - Comércio varejista de tintas e materiais para pintura,47.32-6-00 - Comércio var12ejista de lubrifican339900777333tes';

const expected_result = "4744005|4744004|4744003|4744001|4742300|4741500|4732600"

function getNumebrsCNAE(rawInput) {
  // Extrai apenas os números de acordo com o padrão da RegEx
  const filtered_list = rawInput.match(/(\d{2}\.\d{2}-\d-\d{2})/g);

  // Remove a pontuação dos números e concatena os números do CNAE
  // Usando .map nesse contexto por ser mais livre, mas poderia ser um for
  const final_list = filtered_list.map(number => number.replace(/[^\d]/g, '')).join('|');

  return final_list;
}

var result = getNumebrsCNAE(cnae_list);

console.log(result === expected_result ? "Teste OK\n" + result : "Teste Falhou");
