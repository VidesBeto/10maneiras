import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Heart, Sparkles, BookOpen, MessageCircle, Sprout, Clock3 } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const buyUrl = "#"; // Conectar à URL da Eduzz quando ela estiver definida.
const ebookUrl = "/10-Dicas-para-Desenvolver-a-Autonomia-de-Criancas-Autistas.pdf";

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
    <svg className="soft-illustration" viewBox="0 0 620 520" role="img" aria-label="Ilustração acolhedora de duas crianças explorando uma atividade juntas">
      <ellipse cx="310" cy="455" rx="245" ry="34" fill="#d8e5d5"/>
      <path d="M110 360 Q310 315 510 360 L480 430 Q310 395 140 430Z" fill="#24553a"/>
      <path d="M130 350 Q310 305 490 350 L465 407 Q310 375 155 407Z" fill="#9db9b0"/>
      <rect x="192" y="318" width="236" height="110" rx="16" fill="#e5a52b"/>
      <rect x="205" y="330" width="210" height="82" rx="12" fill="#b8d1d4"/>
      <circle cx="260" cy="367" r="22" fill="#e5a52b"/><circle cx="326" cy="374" r="20" fill="#24553a"/><circle cx="375" cy="354" r="17" fill="#d7a18a"/>
      <g transform="translate(70 62)">
        <ellipse cx="115" cy="102" rx="72" ry="68" fill="#74452f"/><circle cx="115" cy="120" r="57" fill="#f1c8a8"/>
        <path d="M57 111 Q65 35 127 40 Q188 43 178 105 Q154 84 137 92 Q113 54 91 88 Q75 104 57 111" fill="#70432f"/>
        <circle cx="94" cy="122" r="5" fill="#4d3428"/><circle cx="137" cy="122" r="5" fill="#4d3428"/>
        <path d="M105 144 Q116 154 128 144" fill="none" stroke="#a85f4b" strokeWidth="4" strokeLinecap="round"/>
        <path d="M72 170 Q116 150 160 172 L183 286 L42 286Z" fill="#102746"/>
        <path d="M67 278 L44 395 Q42 420 67 422 L123 422 L135 280Z" fill="#24553a"/>
        <path d="M145 278 L145 422 L205 422 Q220 415 211 395 L183 280Z" fill="#173d2a"/>
        <path d="M154 188 Q199 205 216 256" fill="none" stroke="#f1c8a8" strokeWidth="26" strokeLinecap="round"/>
      </g>
      <g transform="translate(335 80)">
        <ellipse cx="105" cy="92" rx="69" ry="65" fill="#74452f"/><circle cx="105" cy="112" r="54" fill="#f1c8a8"/>
        <path d="M50 102 Q50 35 112 36 Q170 42 166 103 Q142 78 123 91 Q99 58 78 91 Q63 101 50 102" fill="#75472e"/>
        <circle cx="86" cy="115" r="5" fill="#4d3428"/><circle cx="128" cy="115" r="5" fill="#4d3428"/>
        <path d="M97 136 Q107 146 119 136" fill="none" stroke="#a85f4b" strokeWidth="4" strokeLinecap="round"/>
        <path d="M66 165 Q107 147 150 168 L174 278 L34 278Z" fill="#4e8063"/>
        <path d="M63 270 L45 392 Q42 418 68 420 L116 420 L126 274Z" fill="#e5a52b"/>
        <path d="M138 270 L140 420 L198 420 Q214 414 204 392 L174 270Z" fill="#e5a52b"/>
        <path d="M58 185 Q18 222 4 270" fill="none" stroke="#f1c8a8" strokeWidth="24" strokeLinecap="round"/>
      </g>
      <path d="M244 325 Q310 285 374 326" fill="none" stroke="#74452f" strokeWidth="9" strokeLinecap="round"/>
    </svg>
  );
}

function BookIllustration() {
  return (
    <svg className="book-illustration" viewBox="0 0 560 420" role="img" aria-label="Livro de atividades com formas coloridas para aprender brincando">
      <ellipse cx="280" cy="365" rx="225" ry="24" fill="#d8e5d5"/>
      <path d="M88 290 Q280 250 472 290 L446 355 Q280 320 114 355Z" fill="#24553a"/>
      <path d="M108 280 Q280 242 452 280 L430 330 Q280 298 130 330Z" fill="#fff9f2"/>
      <path d="M280 260 L280 325" stroke="#d9bda6" strokeWidth="4"/>
      <circle cx="185" cy="285" r="24" fill="#e5a52b"/><circle cx="235" cy="278" r="17" fill="#4e8063"/><circle cx="330" cy="291" r="20" fill="#d7a18a"/><circle cx="375" cy="280" r="15" fill="#102746"/>
      <path d="M170 220 Q280 190 390 220 L380 280 Q280 250 180 280Z" fill="#b8d1d4"/>
      <path d="M280 215 L280 270" stroke="#8da7a5" strokeWidth="4"/>
      <path d="M210 238 Q225 215 240 238 Q225 255 210 238Z" fill="#24553a"/>
      <path d="M320 238 Q335 215 350 238 Q335 255 320 238Z" fill="#e5a52b"/>
    </svg>
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
      <section className="strategies" id="conteudo"><div className="container"><div className="center-head"><span className="eyebrow">O QUE VOCÊ VAI ENCONTRAR</span><h2>10 dicas para trabalhar a autonomia no cotidiano</h2><p>Ideias para observar, ensinar, ajustar o suporte e praticar em situações reais — sem tentar fazer tudo de uma vez.</p></div><div className="strategy-grid">{strategies.map(([n,title,description])=><article className="strategy-card" key={n}><div className="number">{n}</div><h3>{title}</h3><p>{description}</p></article>)}</div><div className="bonus-row"><div><BookOpen/><span><strong>Plano de prática de 30 dias</strong><small>Um roteiro de acompanhamento, sem prazo obrigatório de aprendizagem.</small></span></div><div><Check/><span><strong>Checklist da família</strong><small>Perguntas para observar a rotina e ajustar as estratégias.</small></span></div></div></div></section>
      <section className="audience" id="para-quem"><div className="container audience-box"><div><span className="eyebrow warm">PARA QUEM É</span><h2>Para famílias e cuidadores que querem apoiar a participação no dia a dia.</h2><p>O e-book oferece ideias para refletir sobre a rotina, escolher prioridades e experimentar passos possíveis com acolhimento. Use o material como ponto de partida e adapte as sugestões às necessidades de cada criança.</p></div><ul><li><Check size={18}/> Pais e responsáveis</li><li><Check size={18}/> Cuidadores e familiares</li><li><Check size={18}/> Quem está começando a trabalhar autonomia</li><li><Check size={18}/> Quem procura ideias para tarefas do cotidiano</li></ul></div></section>
      <section className="offer" id="oferta"><div className="container offer-inner"><span className="eyebrow"><Sparkles size={16}/> COMECE PELO PRÓXIMO PASSO</span><h2>Pequenos passos constroem grandes caminhos.</h2><p>Conheça o e-book <strong>10 Dicas para Desenvolver a Autonomia de Crianças Autistas</strong>, um material educativo para famílias e cuidadores com estratégias, exemplos de rotina, plano de prática e checklist.</p><button className="cta cta-light" onClick={goToBuy}>Quero conhecer o e-book <ArrowRight size={19}/></button><small>O botão poderá direcionar para a página de compra da Eduzz assim que a URL for configurada.</small></div></section>
      <footer><p>Conteúdo educativo e geral. Não substitui avaliação, diagnóstico, tratamento ou acompanhamento individual por profissionais habilitados.</p><span>10 Dicas para Desenvolver a Autonomia de Crianças Autistas · Edição 2026</span></footer>
    </main>
  );
}
