const fs = require('fs');
const path = require('path');

function run() {
  console.log('🔍 Executando verificação: logo exclusivo no header, footer e favicon limpos...');

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

  console.log('\n--- 1. TESTE DE LOGO EXCLUSIVO NO HEADER ---');
  const headerHtml = html.split('<header')[1].split('</header>')[0];
  const footerHtml = html.split('<footer')[1].split('</footer>')[0];
  assert(headerHtml.includes('/images/logo.png'), 'Logo oficial presente no Header');
  assert(!footerHtml.includes('/images/logo.png'), 'Logo removido do Footer');
  assert(!html.includes('href="/favicon.png"'), 'Favicon não usa mais a imagem do logo');
  assert(html.includes('href="/favicon.svg"'), 'Favicon SVG sutil ativo');

  console.log('\n--- 2. TESTE DE HORÁRIOS & CONTATOS ---');
  assert(html.includes('(19) 3645-7977'), 'Telefone presente');
  assert(html.includes('06:00') && html.includes('19:00'), 'Horários confirmados presentes');

  console.log('\n========================================');
  if (failures === 0) {
    console.log('🎉 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO!');
  } else {
    console.error(`⚠️ TOTAL DE TESTES COM FALHA: ${failures}`);
    process.exitCode = 1;
  }
}

run();
