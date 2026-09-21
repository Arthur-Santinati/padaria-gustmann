const fs = require('fs');
const path = require('path');

function run() {
  console.log('🔍 Executando verificação completa do build estático da Padaria Gustmann...');

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

  console.log('\n--- 1. TESTE DE SEO LOCAL & METADADOS ---');
  assert(html.includes('<title>Padaria Gustmann | Padaria e Confeitaria em Americana</title>'), 'Título da página exato');
  assert(html.includes('content="Padaria Gustmann em Americana - SP. Pães fresquinhos, confeitaria e sabores feitos com tradição e qualidade."'), 'Meta description exata');
  assert(html.includes('property="og:title"'), 'Tag Open Graph title presente');
  assert(html.includes('property="og:description"'), 'Tag Open Graph description presente');
  assert(html.includes('property="og:site_name"'), 'Tag Open Graph site_name presente');
  assert(html.includes('type="application/ld+json"'), 'Script JSON-LD estruturado presente');
  assert(html.includes('&quot;@type&quot;:[&quot;Bakery&quot;,&quot;LocalBusiness&quot;]') || html.includes('"@type":["Bakery","LocalBusiness"]'), 'Schema.org Bakery & LocalBusiness');
  assert(html.includes('Americana') && html.includes('SP'), 'Localidade Americana - SP nos metadados');

  console.log('\n--- 2. TESTE DE CANAIS & LINKS REAIS ---');
  assert(html.includes('https://wa.me/551936457977'), 'Link direto do WhatsApp wa.me/551936457977');
  assert(html.includes('https://www.instagram.com/padariagustmann/'), 'Link oficial do Instagram @padariagustmann');
  assert(html.includes('mailto:padariagustmann@hotmail.com'), 'Link mailto do e-mail padariagustmann@hotmail.com');
  assert(html.includes('tel:+551936457977'), 'Link tel:+551936457977 para discagem rápida');
  assert(html.includes('maps.google.com') || html.includes('google.com/maps'), 'Link de rota para o Google Maps');

  console.log('\n--- 3. TESTE DE CONTEÚDO E FIDELIDADE DA MARCA ---');
  assert(html.includes('16 anos de tradição'), 'Menção aos 16 anos de tradição');
  assert(html.includes('Fresquinho todos os dias, do jeito que você gosta.'), 'Headline principal do Hero');
  assert(html.includes('Há 16 anos levando pães, doces e sabores que fazem parte da rotina de Americana.'), 'Subheadline do Hero');
  assert(html.includes('Feito para todos os momentos do dia.'), 'Título da seção de produtos');
  assert(html.includes('Pães') && html.includes('Bolos') && html.includes('Doces e Sobremesas') && html.includes('Salgados') && html.includes('Café / Lanches'), 'Todas as 5 categorias de produtos confirmadas presentes');
  assert(html.includes('16 anos fazendo parte da sua rotina.'), 'Título da seção sobre nós');
  assert(html.includes('A Padaria Gustmann reúne tradição, produtos fresquinhos e o cuidado de quem acredita que qualidade e sabor fazem a diferença.'), 'Texto institucional fiel');
  assert(html.includes('Rua Lindóia, 410') && html.includes('Parque Novo Mundo') && html.includes('13467-640'), 'Endereço completo exato');
  assert(html.includes('Deu vontade? Fale com a gente.'), 'CTA Final');

  console.log('\n--- 4. TESTE DE PLACEHOLDERS PREPARADOS ---');
  assert(html.includes('Horário de Atendimento') || html.includes('A confirmar com o estabelecimento'), 'Área de horário de funcionamento como placeholder explícito');

  console.log('\n--- 5. TESTE DE ROBOTS E SITEMAP ---');
  assert(robots.includes('sitemap.xml'), 'robots.txt referencia sitemap');
  assert(sitemap.includes('https://www.padariagustmann.com.br'), 'sitemap.xml possui URL canônica');

  console.log('\n========================================');
  if (failures === 0) {
    console.log('🎉 TODOS OS 21 TESTES PASSARAM COM 100% DE SUCESSO!');
  } else {
    console.error(`⚠️ TOTAL DE TESTES COM FALHA: ${failures}`);
    process.exitCode = 1;
  }
}

run();
