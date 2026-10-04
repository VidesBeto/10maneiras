import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const buyUrl = "#"; // Substituir pela URL da página de venda quando estiver definida.

const pains = [
  "Você acaba fazendo pela criança aquilo que ela poderia começar a aprender a fazer?",
  "A rotina fica cansativa porque cada tarefa parece exigir ajuda do começo ao fim?",
  "Você quer estimular a independência, mas não sabe qual pequeno passo ensinar primeiro?",
  "Quando você tenta esperar, parece mais fácil simplesmente terminar a tarefa por ela?",
];

const strategies = [
  ["1", "Transformar tarefas do cotidiano em oportunidades de aprendizagem"],
  ["2", "Dividir tarefas grandes em pequenos passos"],
  ["3", "Dar espaço para a criança tentar antes de fazer por ela"],
  ["4", "Reduzir a ajuda aos poucos para favorecer independência"],
  ["5", "Ensinar formas funcionais de pedir ajuda"],
  ["6", "Usar rotinas previsíveis e ensinar flexibilidade gradualmente"],
  ["7", "Dar tempo para a criança processar e tentar"],
  ["8", "Reforçar pequenas conquistas sem comparar com outras crianças"],
  ["9", "Trabalhar uma habilidade por vez e ajustar o desafio"],
  ["10", "Levar as habilidades para contextos reais e seguros"],
];

function ChildrenIllustration() {
  return (
    <svg className="soft-illustration" viewBox="0 0 620 520" role="img" aria-label="Duas crianças participando juntas de uma atividade de aprendizagem">
      <ellipse cx="310" cy="455" rx="245" ry="34" fill="#dfe7d2"/>
      <rect x="200" y="310" width="220" height="125" rx="18" fill="#7d6d61"/>
      <rect x="214" y="326" width="192" height="94" rx="14" fill="#b5c78f"/>
      <circle cx="270" cy="365" r="35" fill="#516f5a"/><circle cx="340" cy="372" r="30" fill="#43556b"/><circle cx="385" cy="350" r="25" fill="#839f7b"/>
      <g transform="translate(70 65)">
        <ellipse cx="115" cy="102" rx="72" ry="68" fill="#7b4930"/><circle cx="115" cy="120" r="57" fill="#f0c29d"/>
        <path d="M57 111 Q65 35 127 40 Q188 43 178 105 Q154 84 137 92 Q113 54 91 88 Q75 104 57 111" fill="#70432f"/>
        <circle cx="94" cy="122" r="5" fill="#4d3428"/><circle cx="137" cy="122" r="5" fill="#4d3428"/>
        <path d="M105 144 Q116 154 128 144" fill="none" stroke="#9d5d4c" strokeWidth="4" strokeLinecap="round"/>
        <path d="M72 170 Q116 150 160 172 L183 286 L42 286Z" fill="#8ca77a"/>
        <path d="M67 278 L44 395 Q42 420 67 422 L123 422 L135 280Z" fill="#445060"/>
        <path d="M145 278 L145 422 L205 422 Q220 415 211 395 L183 280Z" fill="#34475a"/>
        <path d="M154 188 Q199 205 216 256" fill="none" stroke="#f0c29d" strokeWidth="26" strokeLinecap="round"/>
      </g>
      <g transform="translate(335 80)">
        <ellipse cx="105" cy="92" rx="69" ry="65" fill="#7b4930"/><circle cx="105" cy="112" r="54" fill="#f0c29d"/>
        <path d="M50 102 Q50 35 112 36 Q170 42 166 103 Q142 78 123 91 Q99 58 78 91 Q63 101 50 102" fill="#75472e"/>
        <circle cx="86" cy="115" r="5" fill="#4d3428"/><circle cx="128" cy="115" r="5" fill="#4d3428"/>
        <path d="M97 136 Q107 146 119 136" fill="none" stroke="#9d5d4c" strokeWidth="4" strokeLinecap="round"/>
        <path d="M66 165 Q107 147 150 168 L174 278 L34 278Z" fill="#789766"/>
        <path d="M63 270 L45 392 Q42 418 68 420 L116 420 L126 274Z" fill="#405466"/>
        <path d="M138 270 L140 420 L198 420 Q214 414 204 392 L174 270Z" fill="#304457"/>
        <path d="M58 185 Q18 222 4 270" fill="none" stroke="#f0c29d" strokeWidth="24" strokeLinecap="round"/>
      </g>
      <path d="M244 325 Q310 285 374 326" fill="none" stroke="#66554a" strokeWidth="9" strokeLinecap="round"/>
    </svg>
  );
}

function BookIllustration() {
  return (
    <svg className="book-illustration" viewBox="0 0 560 420" role="img" aria-label="Crianças explorando um livro de atividades">
      <ellipse cx="280" cy="365" rx="225" ry="24" fill="#dfe7d2"/>
      <path d="M88 290 Q280 250 472 290 L446 355 Q280 320 114 355Z" fill="#617b62"/>
      <path d="M108 280 Q280 242 452 280 L430 330 Q280 298 130 330Z" fill="#eef0df"/>
      <path d="M280 260 L280 325" stroke="#b9b08e" strokeWidth="4"/>
      <g transform="translate(86 45)">
        <circle cx="105" cy="82" r="48" fill="#f0c29d"/><path d="M58 80 Q55 20 112 24 Q158 30 153 82 Q133 61 113 70 Q95 45 76 72Z" fill="#70432f"/>
        <path d="M67 125 Q106 105 143 126 L166 247 L40 247Z" fill="#6e8c66"/>
        <circle cx="90" cy="86" r="4" fill="#4d3428"/><circle cx="122" cy="86" r="4" fill="#4d3428"/>
        <path d="M101 106 Q108 112 116 106" fill="none" stroke="#9d5d4c" strokeWidth="3"/>
        <path d="M137 158 Q185 182 205 219" fill="none" stroke="#f0c29d" strokeWidth="22" strokeLinecap="round"/>
      </g>
      <g transform="translate(300 72)">
        <circle cx="100" cy="75" r="47" fill="#f0c29d"/><path d="M56 75 Q55 17 108 20 Q153 26 149 78 Q131 57 111 66 Q95 40 75 68Z" fill="#75472e"/>
        <path d="M62 119 Q100 100 138 120 L163 245 L34 245Z" fill="#8ca77a"/>
        <circle cx="85" cy="80" r="4" fill="#4d3428"/><circle cx="117" cy="80" r="4" fill="#4d3428"/>
        <path d="M96 99 Q103 105 111 99" fill="none" stroke="#9d5d4c" strokeWidth="3"/>
        <path d="M65 157 Q32 183 9 217" fill="none" stroke="#f0c29d" strokeWidth="22" strokeLinecap="round"/>
      </g>
      <circle cx="200" cy="293" r="13" fill="#d7a35f"/><circle cx="240" cy="286" r="11" fill="#8ba66f"/><circle cx="327" cy="291" r="12" fill="#8a6a8d"/>
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
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16} /> GUIA PRÁTICO PARA FAMÍLIAS E CUIDADORES</span>
            <h1>Seu filho pode participar mais da própria rotina.</h1>
            <p className="hero-lead">Descubra como transformar tarefas simples do dia a dia em oportunidades de aprendizagem, comunicação e autonomia — respeitando o ritmo individual da criança.</p>
            <button className="cta" onClick={goToBuy}>Quero conhecer o e-book <ArrowRight size={19} /></button>
            <p className="microcopy"><Clock3 size={14} /> Acesse o material e comece pelo próximo pequeno passo.</p>
          </div>
          <div className="hero-art"><div className="art-glow" /><ChildrenIllustration /><div className="floating-note"><Heart size={17} /> Pequenas conquistas também contam.</div></div>
        </div>
      </section>
      <section className="pain-section"><div className="container narrow"><p className="section-kicker">SE ISSO FAZ PARTE DA SUA ROTINA...</p><h2>Talvez você não precise fazer mais. Precise <em>ensinar de outro jeito.</em></h2><div className="pain-grid">{pains.map((pain)=><div className="pain-card" key={pain}><span>“</span><p>{pain}</p></div>)}</div></div></section>
      <section className="solution"><div className="container solution-grid"><div><span className="eyebrow warm">A PROPOSTA DO E-BOOK</span><h2>Autonomia não acontece de uma vez. Ela é construída em pequenos passos.</h2><p>O material parte de uma ideia simples: uma atividade que parece fácil para um adulto pode envolver várias habilidades para uma criança — compreender uma instrução, iniciar a tarefa, organizar movimentos, comunicar necessidades e concluir uma sequência.</p><p>Por isso, o foco não é cobrar rapidez. É observar o que a criança já consegue fazer, escolher o próximo passo possível e oferecer apenas a ajuda necessária.</p><div className="principles">{["Escolha uma habilidade por vez.","Divida tarefas grandes em passos pequenos.","Comece pelo que a criança já consegue fazer.","Reduza a ajuda gradualmente.","Pratique na rotina real.","Valorize pequenas conquistas."].map(x=><div key={x}><Check size={18}/>{x}</div>)}</div></div><div className="quote-card"><BookIllustration/><div className="quote">“Não existe receita milagrosa. Existe ensino, repetição, adaptação, paciência e oportunidade.”</div></div></div></section>
      <section className="strategies"><div className="container"><div className="center-head"><span className="eyebrow">DENTRO DO E-BOOK</span><h2>10 maneiras para transformar a rotina em oportunidades de autonomia</h2><p>Um caminho prático para observar, ensinar, ajustar e continuar — sem tentar aplicar tudo de uma vez.</p></div><div className="strategy-grid">{strategies.map(([n,title])=><article className="strategy-card" key={n}><div className="number">{n}</div><h3>{title}</h3><p>Uma ideia simples para adaptar ao contexto e ao ritmo da criança.</p></article>)}</div></div></section>
      <section className="audience"><div className="container audience-box"><div><span className="eyebrow warm">PARA QUEM É</span><h2>Para famílias e cuidadores que querem favorecer mais participação no dia a dia.</h2><p>O e-book é educativo e foi pensado como um ponto de partida para observar habilidades, escolher prioridades e praticar de forma respeitosa e segura.</p></div><ul><li><Check size={18}/> Pais e responsáveis</li><li><Check size={18}/> Cuidadores</li><li><Check size={18}/> Famílias começando a trabalhar autonomia</li><li><Check size={18}/> Quem precisa de ideias para a rotina real</li></ul></div></section>
      <section className="offer" id="oferta"><div className="container offer-inner"><span className="eyebrow"><Sparkles size={16}/> COMEÇE PELO PRÓXIMO PASSO</span><h2>Mais participação. Mais oportunidades de aprender. Um passo de cada vez.</h2><p>Conheça o e-book <strong>10 Maneiras de Desenvolver a Autonomia de Crianças Autistas</strong> e veja como aplicar as ideias à rotina da sua família.</p><button className="cta cta-light" onClick={goToBuy}>Quero acessar o e-book <ArrowRight size={19}/></button><small>O link de compra será conectado quando você me enviar a URL.</small></div></section>
      <footer>Material educativo. Não substitui avaliação ou orientação individualizada de profissionais.</footer>
    </main>
  );
}
