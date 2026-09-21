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

  const menuTs = fs.readFileSync(path.join(process.cwd(), 'src/config/menu.ts'), 'utf8');

  console.log('\n--- 1. CATEGORIAS REAIS DO CARDÁPIO ---');
  assert(html.includes('id="cardapio"'), 'Seção #cardapio presente');
  assert(html.includes('Docinhos'), 'Aba Docinhos presente');
  assert(html.includes('Bolos Recheados'), 'Aba Bolos Recheados presente');
  assert(html.includes('Salgados'), 'Aba Salgados presente');
  assert(html.includes('Baguetes Recheadas'), 'Aba Baguetes Recheadas presente');

  console.log('\n--- 2. PRODUTOS REAIS & PREÇOS NO CONFIG ---');
  assert(menuTs.includes('Brigadeiro Tradicional') && menuTs.includes('110'), 'Brigadeiro (R$ 110,00 / cento)');
  assert(menuTs.includes('Carolina de Limão') && menuTs.includes('74.99'), 'Carolina de Limão (R$ 74,99 / kg)');
  assert(menuTs.includes('Bolo Gustmann') && menuTs.includes('77.9'), 'Bolo Gustmann (R$ 77,90 / kg)');
  assert(menuTs.includes('Bolo Alpino') && menuTs.includes('79.9'), 'Bolo Alpino (R$ 79,90 / kg)');
  assert(menuTs.includes('Bolo Leite Ninho c/ Morango') && menuTs.includes('84.9'), 'Bolo Ninho com Morango (R$ 84,90 / kg)');
  assert(menuTs.includes('Coxinha de Frango') && menuTs.includes('100'), 'Coxinha de Frango (R$ 100,00 / cento)');
  assert(menuTs.includes('Esfihinha de Carne') && menuTs.includes('110'), 'Esfihinha de Carne (R$ 110,00 / cento)');
  assert(menuTs.includes('Baguete Fria de Presunto e Queijo') && menuTs.includes('57.9'), 'Baguete Fria Presunto e Queijo (R$ 57,90)');
  assert(menuTs.includes('Baguete Quente de Salame') && menuTs.includes('40'), 'Baguete Quente de Salame (R$ 40,00)');
  assert(menuTs.includes('Baguete Fria Quatro Queijos') && menuTs.includes('price: null'), 'Baguete Quatro Queijos sob consulta');

  console.log('\n--- 3. BOTÃO VER MAIS & COMPACTAÇÃO INICIAL ---');
  assert(html.includes('Ver cardápio completo'), 'Botão "Ver cardápio completo" presente no HTML inicial');
  assert(html.includes('opções'), 'Contador de opções restantes visível');

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
