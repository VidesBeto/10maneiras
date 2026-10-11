import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Heart, Sparkles, BookOpen } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const buyUrl = "https://sun.eduzz.com/89AXX2180D";
const pains = [
  "Você quer incentivar a participação do seu filho, mas nem sempre sabe por onde começar?",
  "Tarefas simples da rotina acabam exigindo ajuda do começo ao fim?",
  "Você tem dúvidas sobre como oferecer apoio sem fazer tudo pela criança?",
  "Na correria do dia a dia, fica difícil transformar as pequenas tarefas em oportunidades de aprendizagem?",
];

const strategies = [
  ["01", "Encontre pequenos espaços de participação", "Convide a criança a escolher, iniciar ou concluir uma parte de uma tarefa real."],
  ["02", "Monte o caminho passo a passo", "Divida uma atividade em etapas simples e possíveis."],
  ["03", "Troque a pressa pela espera ativa", "Dê tempo para tentar e ofereça uma pista gentil quando necessário."],
  ["04", "Ajuste o nível de apoio", "Mude a ajuda aos poucos, de acordo com a habilidade e o bem-estar."],
  ["05", "Crie pontes para pedir ajuda", "Aceite diferentes formas de comunicação, como fala, gesto ou imagens."],
  ["06", "Organize o dia com previsibilidade", "Use sequências visuais e avise mudanças importantes."],
  ["07", "Dê espaço para processar", "Faça instruções curtas e aguarde antes de ajudar."],
  ["08", "Enxergue o progresso", "Reconheça escolhas, tentativas e pequenas conquistas."],
  ["09", "Pratique em outros contextos", "Leve a habilidade para outro ambiente seguro, aos poucos."],
  ["10", "Respeite o tempo de cada criança", "Revise a estratégia e priorize segurança e bem-estar."],
];

function ChildrenIllustration() {
  return (
    <img
      className="soft-illustration"
      src="/images/autonomia-hero.jpg"
      alt="Criança participando de uma atividade com apoio acolhedor de um adulto"
      loading="eager"
      fetchPriority="high"
    />
  );
}

function BookIllustration() {
  return (
    <img
      className="book-illustration"
      src="/images/participar-da-rotina.jpg"
      alt="Criança ajudando a organizar a mesa com a presença acolhedora de um adulto"
      loading="lazy"
    />
  );
}

function Index() {
  const goToBuy = () => {
    if (buyUrl !== "#") window.location.href = buyUrl;
    else document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="sales-page">
      <header className="site-header">
        <a className="brand" href="#" aria-label="10 dicas para desenvolver a autonomia">10 <span>dicas</span><small>autonomia com acolhimento</small></a>
        <nav aria-label="Navegação principal"><a href="#conteudo">O que você vai encontrar</a><a href="#para-quem">Para quem é</a><a className="nav-cta" href="#oferta">Conhecer o e-book <ArrowRight size={16}/></a></nav>
      </header>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16} /> GUIA PRÁTICO PARA FAMÍLIAS E CUIDADORES</span>
            <h1><span>10 dicas</span> para desenvolver a autonomia de crianças autistas</h1>
            <p className="hero-lead">Um guia prático para transformar momentos do cotidiano em oportunidades de participação, escolha e aprendizagem — com respeito, acolhimento e passos possíveis.</p>
            <button className="cta" onClick={goToBuy}>Quero conhecer o e-book <ArrowRight size={19} /></button>
            <p className="microcopy"><Heart size={15} /> Pequenos passos também contam. Cada criança tem seu próprio ritmo.</p>
          </div>
          <div className="hero-art"><div className="art-glow" /><ChildrenIllustration /><div className="floating-note"><Heart size={17} /> Aprender com apoio e respeito.</div></div>
        </div>
      </section>
      <section className="pain-section"><div className="container narrow"><p className="section-kicker">A ROTINA TAMBÉM PODE ENSINAR</p><h2>Você não precisa fazer tudo por ela. Pode começar com <em>um passo possível.</em></h2><div className="pain-grid">{pains.map((pain, i)=><div className="pain-card" key={pain}><span>0{i+1}</span><p>{pain}</p></div>)}</div></div></section>
      <section className="solution"><div className="container solution-grid"><div><span className="eyebrow warm">A PROPOSTA DO E-BOOK</span><h2>Autonomia não é fazer tudo sozinho. É ampliar a participação aos poucos.</h2><p>Uma tarefa cotidiana pode reunir várias etapas: compreender uma instrução, escolher, iniciar um movimento, comunicar uma necessidade e concluir uma ação. O guia ajuda a olhar para essas etapas com mais clareza.</p><p>A proposta não é cobrar rapidez nem retirar todo o apoio. É observar o que a criança já consegue fazer, escolher um próximo passo acessível e oferecer a ajuda necessária, sempre priorizando segurança e bem-estar.</p><div className="principles">{["Escolha uma habilidade funcional por vez.","Divida tarefas em etapas simples.","Use instruções claras e pistas acessíveis.","Dê tempo para a criança tentar.","Reconheça pequenas conquistas.","Ajuste o apoio ao que a criança precisa."].map(x=><div key={x}><Check size={18}/>{x}</div>)}</div></div><div className="quote-card"><BookIllustration/><div className="quote">“Pequenos passos hoje podem abrir espaço para novas possibilidades amanhã.”</div></div></div></section>
      <section className="life-scenes" aria-label="Exemplos de autonomia no cotidiano">
        <div className="container">
          <div className="center-head">
            <span className="eyebrow">AUTONOMIA NO DIA A DIA</span>
            <h2>Aprendizagens que começam nas pequenas coisas</h2>
            <p>Guardar os próprios objetos, brincar com apoio e fazer escolhas são oportunidades para participar da rotina no próprio ritmo.</p>
          </div>
          <div className="life-scenes-grid">
            <article className="life-scene">
              <img src="/images/guardar-calcados.jpg" alt="Criança guardando os calçados em uma prateleira" loading="lazy" />
              <h3>Participar da organização</h3>
            </article>
            <article className="life-scene">
              <img src="/images/brincar-com-apoio.jpg" alt="Criança explorando brinquedos com o apoio de um adulto" loading="lazy" />
              <h3>Aprender brincando</h3>
            </article>
            <article className="life-scene">
              <img src="/images/escolher-roupas.jpg" alt="Criança escolhendo entre duas peças de roupa com um adulto por perto" loading="lazy" />
              <h3>Fazer escolhas possíveis</h3>
            </article>
          </div>
        </div>
      </section>
      <section className="strategies" id="conteudo"><div className="container"><div className="center-head"><span className="eyebrow">O QUE VOCÊ VAI ENCONTRAR</span><h2>10 dicas para trabalhar a autonomia no cotidiano</h2><p>Ideias para observar, ensinar, ajustar o suporte e praticar em situações reais — sem tentar fazer tudo de uma vez.</p></div><div className="strategy-grid">{strategies.map(([n,title,description])=><article className="strategy-card" key={n}><div className="number">{n}</div><h3>{title}</h3><p>{description}</p></article>)}</div><div className="bonus-row"><div><BookOpen/><span><strong>Plano de prática de 30 dias</strong><small>Um roteiro de acompanhamento, sem prazo obrigatório de aprendizagem.</small></span></div><div><Check/><span><strong>Checklist da família</strong><small>Perguntas para observar a rotina e ajustar as estratégias.</small></span></div></div></div></section>
      <section className="audience" id="para-quem"><div className="container audience-box"><div><span className="eyebrow warm">PARA QUEM É</span><h2>Para famílias e cuidadores que querem apoiar a participação no dia a dia.</h2><p>O e-book oferece ideias para refletir sobre a rotina, escolher prioridades e experimentar passos possíveis com acolhimento. Use o material como ponto de partida e adapte as sugestões às necessidades de cada criança.</p></div><ul><li><Check size={18}/> Pais e responsáveis</li><li><Check size={18}/> Cuidadores e familiares</li><li><Check size={18}/> Quem está começando a trabalhar autonomia</li><li><Check size={18}/> Quem procura ideias para tarefas do cotidiano</li></ul></div></section>
      <section className="offer" id="oferta"><div className="container offer-inner"><span className="eyebrow"><Sparkles size={16}/> COMECE PELO PRÓXIMO PASSO</span><h2>Pequenos passos constroem grandes caminhos.</h2><p>Conheça o e-book <strong>10 Dicas para Desenvolver a Autonomia de Crianças Autistas</strong>, um material educativo para famílias e cuidadores com estratégias, exemplos de rotina, plano de prática e checklist.</p><button className="cta cta-light" onClick={goToBuy}>Quero conhecer o e-book <ArrowRight size={19}/></button><small>Você será direcionado para a página de compra do e-book na Eduzz.</small></div></section>
      <footer><p>Conteúdo educativo e geral. Não substitui avaliação, diagnóstico, tratamento ou acompanhamento individual por profissionais habilitados.</p><span>10 Dicas para Desenvolver a Autonomia de Crianças Autistas · Edição 2026</span></footer>
    </main>
  );
}
