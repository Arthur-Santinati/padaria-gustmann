const fs = require('fs');
const path = require('path');

function run() {
  console.log('🔍 Executando verificação completa com horários e logo oficiais...');

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
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');

  console.log('\n--- 1. TESTE DE LOGO OFICIAL ---');
  assert(html.includes('/images/logo.jpg'), 'Logo oficial inserido no HTML');

  console.log('\n--- 2. TESTE DE HORÁRIOS CONFIRMADOS ---');
  assert(html.includes('06:00') && html.includes('19:00'), 'Horário de Segunda a Sexta (06h às 19h) presente');
  assert(html.includes('18:00'), 'Horário de Sábado (até 18h) presente');
  assert(html.includes('06:30') && html.includes('12:00'), 'Horário de Domingo (06h30 às 12h) presente');
  assert(html.includes('OpeningHoursSpecification'), 'JSON-LD com OpeningHoursSpecification');

  console.log('\n--- 3. TESTE DE TELEFONE E CANAIS ---');
  assert(html.includes('(19) 3645-7977'), 'Telefone formatado presente');
  assert(html.includes('tel:+551936457977'), 'Discagem rápida para fixo configurada');
  assert(html.includes('https://wa.me/551936457977'), 'WhatsApp oficial configurado');

  console.log('\n--- 4. TESTE DE SEO LOCAL & METADADOS ---');
  assert(html.includes('<title>Padaria Gustmann | Padaria e Confeitaria em Americana</title>'), 'Título da página exato');
  assert(html.includes('content="Padaria Gustmann em Americana - SP. Pães fresquinhos, confeitaria e sabores feitos com tradição e qualidade'), 'Meta description presente');
  assert(html.includes('Rua Lindóia, 410') && html.includes('13467-640'), 'Endereço completo exato');

  console.log('\n========================================');
  if (failures === 0) {
    console.log('🎉 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO!');
  } else {
    console.error(`⚠️ TOTAL DE TESTES COM FALHA: ${failures}`);
    process.exitCode = 1;
  }
}

run();
