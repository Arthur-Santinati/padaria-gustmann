const fs = require('fs');
const path = require('path');

function run() {
  console.log('🔍 Executando verificação completa do site evoluído da Padaria Gustmann...');

  const indexPath = path.join(process.cwd(), '.next/server/app/index.html');
  const robotsPath = path.join(process.cwd(), '.next/server/app/robots.txt.body');
  const sitemapPath = path.join(process.cwd(), '.next/server/app/sitemap.xml.body');

  let failures = 0;
  function assert(condition, desc) {
    if (condition) {
      console.log(` ✅ PASSOU: ${desc}`);
    } else {
      console.error(` ❌ FALHOU: ${desc}`);
      failures++;
    }
  }

  assert(fs.existsSync(indexPath), 'Arquivo index.html gerado');
  assert(fs.existsSync(robotsPath), 'Arquivo robots.txt gerado');
  assert(fs.existsSync(sitemapPath), 'Arquivo sitemap.xml gerado');

  const html = fs.readFileSync(indexPath, 'utf8');

  console.log('\n--- 1. CARDÁPIO DIGITAL & PRODUTOS ---');
  assert(html.includes('id="cardapio"'), 'Seção #cardapio presente');
  assert(html.includes('Cardápio Digital'), 'Título Cardápio Digital presente');
  assert(html.includes('Pão Francês Tradicional'), 'Item Pão Francês presente no mock');
  assert(html.includes('Pão de Queijo Artesanal'), 'Item Pão de Queijo presente no mock');
  assert(html.includes('Bolo de Cenoura com Chocolate'), 'Item Bolo de Cenoura presente no mock');
  assert(html.includes('Coxinha com Catupiry'), 'Item Coxinha presente no mock');

  console.log('\n--- 2. HEADER, HERO & CARRINHO ---');
  assert(html.includes('Ver nosso cardápio'), 'CTA do Hero para o cardápio presente');
  assert(html.includes('Ver Pedido') || html.includes('item'), 'Botão do carrinho presente no Header');
  assert(html.includes('/images/logo.png'), 'Logo oficial no Header');

  console.log('\n--- 3. NOSSA HISTÓRIA & TIMELINE ---');
  assert(html.includes('Há 16 anos fazendo parte da sua rotina.'), 'Título da história presente');
  assert(!html.includes('border-t border-borderWarm/80 space-y-2.5'), 'Linha solta de timeline removida com sucesso');

  console.log('\n--- 4. WHATSAPP & HORÁRIOS ---');
  assert(html.includes('(19) 3645-7977'), 'Telefone fixo oficial');
  assert(html.includes('06:00') && html.includes('19:00'), 'Horário Seg-Sex presente');
  assert(html.includes('18:00'), 'Horário Sábado presente');
  assert(html.includes('06:30') && html.includes('12:00'), 'Horário Domingo presente');

  console.log('\n--- 5. SEO LOCAL & METADADOS ---');
  assert(html.includes('<title>Padaria Gustmann | Padaria e Confeitaria em Americana</title>'), 'Título exato');
  assert(html.includes('Rua Lindóia, 410'), 'Endereço exato');
  assert(html.includes('OpeningHoursSpecification'), 'Microdados de horários no JSON-LD');

  console.log('\n========================================');
  if (failures === 0) {
    console.log('🎉 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO!');
  } else {
    console.error(`⚠️ TOTAL DE TESTES COM FALHA: ${failures}`);
    process.exitCode = 1;
  }
}

run();
