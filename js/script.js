import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import TabFaq from './modules/tab-faq.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import iniDropdownMenu from './modules/dropdown-menu.js';
import iniMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const tabFaq = new TabFaq('[data-faq="faq"] dt');
tabFaq.init();

const tabNav = new TabNav('[data-menu="menu"] li', '[data-conteudo="conteudo"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimacaoScroll();

iniDropdownMenu();
iniMenuMobile();
initFuncionamento();
initFetchAnimais();