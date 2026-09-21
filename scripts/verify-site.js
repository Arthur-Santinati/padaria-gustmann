const fs = require('fs');
const path = require('path');

function run() {
  console.log('🔍 Executando verificação completa do site com Cardápio Real da Padaria Gustmann...');

  const indexPath = path.join(process.cwd(), 'out/index.html');
  const robotsPath = path.join(process.cwd(), 'out/robots.txt');
  const sitemapPath = path.join(process.cwd(), 'out/sitemap.xml');

  let failures = 0;
  function assert(condition, desc) {
    if (condition) {
      console.log(` ✅ PASSOU: ${desc}`);
    } else {
      console.error(` ❌ FALHOU: ${desc}`);
      failures++;
    }
  }

  assert(fs.existsSync(indexPath), 'Arquivo out/index.html gerado');
  assert(fs.existsSync(robotsPath), 'Arquivo out/robots.txt gerado');
  assert(fs.existsSync(sitemapPath), 'Arquivo out/sitemap.xml gerado');

  const html = fs.readFileSync(indexPath, 'utf8');

  console.log('\n--- 1. CATEGORIAS REAIS DO CARDÁPIO ---');
  assert(html.includes('id="cardapio"'), 'Seção #cardapio presente');
  assert(html.includes('Docinhos'), 'Aba Docinhos presente');
  assert(html.includes('Bolos Recheados'), 'Aba Bolos Recheados presente');
  assert(html.includes('Salgados'), 'Aba Salgados presente');
  assert(html.includes('Baguetes Recheadas'), 'Aba Baguetes Recheadas presente');

  console.log('\n--- 2. PRODUTOS REAIS & PREÇOS EXATOS ---');
  assert(html.includes('Brigadeiro Tradicional') && html.includes('110,00'), 'Brigadeiro (R$ 110,00 / cento)');
  assert(html.includes('Carolina de Limão') && html.includes('74,99'), 'Carolina de Limão (R$ 74,99 / kg)');
  assert(html.includes('Bolo Gustmann') && html.includes('77,90'), 'Bolo Gustmann (R$ 77,90 / kg)');
  assert(html.includes('Bolo Alpino') && html.includes('79,90'), 'Bolo Alpino (R$ 79,90 / kg)');
  assert(html.includes('Bolo Ferrero Rocher') && html.includes('84,90'), 'Bolo Ferrero Rocher (R$ 84,90 / kg)');
  assert(html.includes('Coxinha de Frango') && html.includes('100,00'), 'Coxinha de Frango (R$ 100,00 / cento)');
  assert(html.includes('Esfihinha de Carne') && html.includes('110,00'), 'Esfihinha de Carne (R$ 110,00 / cento)');
  assert(html.includes('Baguete Fria de Presunto e Queijo') && html.includes('57,90'), 'Baguete Fria Presunto e Queijo (R$ 57,90)');
  assert(html.includes('Baguete Quente de Salame') && html.includes('40,00'), 'Baguete Quente de Salame (R$ 40,00)');
  assert(html.includes('Baguete Fria Quatro Queijos') && html.includes('Consultar preço'), 'Baguete Quatro Queijos com preço sob consulta');

  console.log('\n--- 3. UNIDADES DE MEDIDA E EXIBIÇÃO ---');
  assert(html.includes('por kg'), 'Exibição de unidade por kg');
  assert(html.includes('por cento'), 'Exibição de unidade por cento');
  assert(html.includes('por unidade'), 'Exibição de unidade por unidade');

  console.log('\n--- 4. CONTATOS OFICIAIS & HORÁRIOS ---');
  assert(html.includes('(19) 3645-7977'), 'Telefone fixo oficial');
  assert(html.includes('06:00') && html.includes('19:00'), 'Horário Seg-Sex presente');
  assert(html.includes('18:00'), 'Horário Sábado presente');
  assert(html.includes('06:30') && html.includes('12:00'), 'Horário Domingo presente');

  console.log('\n--- 5. HEADER, SPLASH & FAVICON ---');
  const splashCode = fs.readFileSync(path.join(process.cwd(), 'src/components/SplashScreen.tsx'), 'utf8');
  assert(fs.existsSync(path.join(process.cwd(), 'out/images/preloader-logo.png')) && splashCode.includes('/images/preloader-logo.png'), 'Preloader com imagem nova');
  assert(html.includes('/favicon.png'), 'Favicon com logo oficial');
  assert(html.includes('/images/logo.png'), 'Header com logo oficial');

  console.log('\n========================================');
  if (failures === 0) {
    console.log('🎉 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO!');
  } else {
    console.error(`⚠️ TOTAL DE TESTES COM FALHA: ${failures}`);
    process.exitCode = 1;
  }
}

run();
