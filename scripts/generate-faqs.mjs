import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const domain='https://nivalisnights.wiki';
const reviewed='2026-07-19';
const steam='https://store.steampowered.com/app/1488490/Nivalis_Nights/';
const news='https://steamcommunity.com/app/1488490/allnews/';

// Every answer below is limited to information published by the developer,
// publisher or current storefront. Unannounced features are labelled clearly.
const groups=[
  ['Release and editions','guides',[
    ['release-date','When does Nivalis Nights release?','The Steam version is scheduled for September 29, 2026. Epic Games Store also lists a Windows release in 2026, but its exact date is not currently stated.','/release-date/'],
    ['same-game-new-name','Is Nivalis Nights the same game as Nivalis?','Yes. ION LANDS says the project formerly called Nivalis was renamed Nivalis Nights after a legal matter was resolved; the game itself remains the same project.','/guides/'],
    ['developer-publisher','Who develops and publishes Nivalis Nights?','ION LANDS develops Nivalis Nights and 505 Games publishes it. This wiki is an independent fan resource and is not affiliated with either company.','/guides/'],
    ['early-access','Is Nivalis Nights launching in Early Access?','The current Steam listing presents September 29, 2026 as the release date and does not label the game as Early Access. Any future change should be confirmed on the official store page.','/release-date/'],
    ['price','How much will Nivalis Nights cost?','An official launch price has not yet been published on the current Steam page. Regional pricing and discounts should not be assumed before the store enables purchasing.','/release-date/'],
    ['demo','Is there a Nivalis Nights demo?','No public demo is currently listed on the Steam store page. A showcase or festival appearance does not by itself confirm that a playable demo will be released.','/guides/'],
    ['cloudpunk-required','Do I need to play Cloudpunk first?','No. Nivalis Nights shares the city setting with Cloudpunk, but ION LANDS describes it as a standalone experience that does not require prior Cloudpunk knowledge.','/story/'],
    ['post-launch-support','Will Nivalis Nights receive post-launch updates?','ION LANDS has said it intends to support the game after launch. A detailed update schedule, expansion list or season pass has not been announced.','/guides/']
  ]],
  ['Platforms and PC requirements','guides',[
    ['confirmed-platforms','Which platforms are confirmed for Nivalis Nights?','Windows PC is confirmed through Steam and Epic Games Store. Official listings do not currently confirm PlayStation, Xbox, Nintendo Switch, native macOS or native Linux versions.','/platforms/'],
    ['steam-release','Is Nivalis Nights coming to Steam?','Yes. The Windows Steam release is scheduled for September 29, 2026, and the store lists achievements, Steam Cloud and Family Sharing.','/release-date/'],
    ['epic-release','Is Nivalis Nights coming to Epic Games Store?','Yes. Epic Games Store lists a Windows version for 2026, but its listing does not currently provide the same September 29 date shown by Steam.','/epic-games-store/'],
    ['console-release','Is Nivalis Nights coming to PS5, Xbox or Switch?','No console version is currently announced in the official platform listings. This means console support is unconfirmed, not that a later port is impossible.','/platforms/'],
    ['windows-version','Which version of Windows is required?','Steam lists a 64-bit processor and operating system with Windows 10 or Windows 11 for both minimum and recommended configurations.','/windows-requirement/'],
    ['ram','How much RAM does Nivalis Nights require?','The current minimum and recommended Steam specifications both list 16 GB of RAM.','/ram-requirement/'],
    ['storage','How much storage space does Nivalis Nights need?','Steam currently lists 30 GB of available storage. An SSD is recommended, but it is not listed as a minimum requirement.','/storage-size/'],
    ['gpu-vram','What GPU and VRAM does Nivalis Nights require?','The minimum asks for a dedicated GPU with at least 6 GB VRAM. The recommended tier asks for 8 GB VRAM and gives an RTX 2070 or newer as an example.','/vram-requirement/']
  ]],
  ['Languages and controls','guides',[
    ['languages','Which languages does Nivalis Nights support?','Steam lists English, French, German, Spanish, Japanese, Korean, Brazilian Portuguese, Russian, Simplified Chinese, Traditional Chinese and Turkish for interface and subtitles.','/languages/'],
    ['full-audio','Which language has full voice audio?','English is the only language currently marked for full audio on Steam. The other ten listed languages are marked for interface and subtitles.','/languages/'],
    ['controller','Does Nivalis Nights support controllers?','The Steam page lists controller support as well as keyboard and mouse input. Exact controller layouts and device-specific behavior should be checked in the release build.','/steam-deck-controller/'],
    ['single-player','Is Nivalis Nights single-player or multiplayer?','Nivalis Nights is listed as a single-player game. Online co-op, local co-op and competitive multiplayer are not currently announced.','/guides/']
  ]],
  ['City, travel and activities','guides',[
    ['open-world','Is Nivalis Nights an open-world game?','The city is divided into large, detailed districts that can be freely explored. Loading screens occur when moving between districts.','/open-world/'],
    ['interiors','Can you enter buildings and businesses?','ION LANDS says most business interiors can be explored within a district. Exact access may still depend on the venue, story state or opening hours.','/locations/'],
    ['drive-cars','Can you drive cars in Nivalis Nights?','No. Cars are not player-drivable. HOVA taxis and trains handle district travel, while the player can directly control a boat.','/can-you-drive-cars/'],
    ['boat','Can you own and drive a boat?','The player can pilot a personal boat through city waterways, reach areas away from roads and access additional fishing locations.','/boat-guide/'],
    ['district-loading','Are there loading screens between districts?','Yes. ION LANDS describes loading screens during district changes, even though exploration within each large district is free.','/loading-screens/'],
    ['fishing','How does fishing work?','Fish are visible physical entities rather than hidden random rolls. They can form shoals and react to bait, and the simulation can support more than 1,000 fish.','/fishing-guide/'],
    ['day-night','Does the day and night cycle affect gameplay?','Yes. The developer says day and night create different opportunities, and curfew is one factor affecting after-dark activity. Exact schedules are not yet public.','/day-night-opportunities/'],
    ['minigames','What side activities are confirmed?','Official descriptions mention fishing, boating, apartment decoration, arcade games, bowling, dancing, sightseeing and photography among the city activities.','/guides/']
  ]],
  ['Businesses, homes and databases','businesses',[
    ['business-types','What businesses can players run?','Confirmed examples include food stalls, noodle stands, stim stores, bars, restaurants and nightclubs. The game supports hiring, upgrades and expansion into new districts.','/business-guide/'],
    ['multiple-properties','Can you own multiple businesses and homes?','Yes. ION LANDS says players can own multiple venues, apartments and houses across the city. Exact ownership limits have not been published.','/multiple-properties/'],
    ['staff','Can you hire employees?','Yes. Players can hire and manage staff so venues can continue operating while the player spends time elsewhere. Detailed staff roles and limits remain unconfirmed.','/businesses/'],
    ['greenhouses','Can you grow crops?','Yes. Players can rent multiple greenhouses and grow mushrooms, grains and vegetables using temperature, humidity and light controls.','/greenhouses/'],
    ['automation','Can greenhouses be automated?','Machines and advanced modules can automate processes such as irrigation. The final costs, unlock requirements and full automation limits are not yet published.','/greenhouse-automation/'],
    ['interior-jobs','Can decorating apartments earn money?','Yes. Players can accept paid interior-design jobs and must follow client instructions, taste and furnishing requirements.','/interior-design-jobs/'],
    ['vendor-discounts','Can vendor relationships change prices?','The developer says buying regularly from certain vendors might produce better prices. This is conditional and should not be treated as a universal discount rule.','/vendor-discounts/'],
    ['content-counts','How much database content has been confirmed?','A May 2026 update reports more than 240 ingredients, 190 meals, 100 quests and 620 furniture items. These totals do not reveal every individual name or recipe.','/databases/'],
    ['inventory','Are there separate inventories?','Official development material describes personal, kitchen, greenhouse and home storage contexts. Exact capacities and transfer rules should be verified in the release build.','/inventory-guide/']
  ]],
  ['Characters, relationships and quests','characters',[
    ['character-count','How many characters are in Nivalis Nights?','ION LANDS says more than 130 authored characters have their own goals, backgrounds and personalities, separate from the thousands of ambient city NPCs.','/characters/'],
    ['relationship-types','What relationship types are confirmed?','Friendship, rivalry, business partnership and romance are the four relationship paths named by the developer. Not every character is confirmed to support every path.','/relationship-types/'],
    ['romance','Can you romance characters?','Yes. Romance is confirmed as one relationship type, but no complete romance-candidate list, gift table or universal romance process has been officially published.','/relationships/'],
    ['npc-schedules','Do characters follow daily schedules?','Yes. The Ghost simulation system preserves NPC schedules across districts at different levels of detail, including when characters are not visible.','/characters/'],
    ['side-quest-outcomes','Can side quests have different outcomes?','Yes. The developer says interactions and choices can lead to different dialogue and side-quest outcomes for the authored cast.','/side-quests/'],
    ['relationship-story','Do relationships affect the main story?','Relationships can change the route a player takes toward the intended story ending and can also affect side-quest outcomes and economic opportunities.','/relationship-story-effects/'],
    ['salt-pete','Who is Salt Pete?','Salt Pete is a robot ferryman at the docks who wears a straw hat and operates a makeshift ferry across the bay. No full quest chain or schedule is public yet.','/salt-pete/']
  ]],
  ['Story and quest structure','quests',[
    ['defined-ending','Does Nivalis Nights have a story ending?','Yes. ION LANDS says the game has a beginning, an end and a specific intended ending, even though choices can change the path taken to reach it.','/main-story-ending/'],
    ['multiple-endings','Does Nivalis Nights have multiple endings?','The developer confirms different routes and outcomes but has not published an exact number of endings. Claims about multiple final endings remain unconfirmed.','/story/'],
    ['quest-count','How many quests are in Nivalis Nights?','A May 2026 development update reports more than 100 quests. Exact names, prerequisites, rewards and branches have not all been published.','/quests/'],
    ['quest-rewards','Do story quests unlock gameplay rewards?','The developer says major story beats connect to gameplay systems and provide rewards. Specific reward lists must wait for official details or verified release play.','/quests/'],
    ['choices','Do player choices matter?','Yes. Choices can affect dialogue, character relationships, side-quest results and the route through the story, while the game still has an authored destination.','/story/'],
    ['corpsec-curfew','What is the role of CorpSec and the curfew?','Official story descriptions place CorpSec enforcement and a curfew among the pressures shaping life in the city. Exact curfew rules and penalties are not yet public.','/story/']
  ]]
];

const faqs=groups.flatMap(([group,tab,items])=>items.map(([id,question,answer,url])=>({group,tab,id,question,answer,url})));
if(faqs.length!==50)throw new Error(`Expected 50 FAQs, found ${faqs.length}`);
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

function renderFaqPage(previous){
  const head=previous.match(/<head>[\s\S]*?<\/head>/)?.[0];
  const nav=previous.match(/<header class="top">[\s\S]*?<\/header>/)?.[0];
  const footer=previous.match(/<footer class="footer">[\s\S]*?<\/footer>/)?.[0];
  const newsModule=previous.match(/<section class="tab-news">[\s\S]*?<\/section>/)?.[0]||'';
  if(!head||!nav||!footer)throw new Error('Could not preserve FAQ page shell');
  const title='50 Nivalis Nights FAQs: Release, Gameplay, Businesses & Story';
  const description='50 verified Nivalis Nights answers covering release date, PC requirements, languages, businesses, travel, relationships, quests and confirmed features.';
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))});
  let nextHead=head
    .replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(description)}">`)
    .replace(/<meta property="og:title" content="[^"]*">/,`<meta property="og:title" content="${esc(title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/,`<meta property="og:description" content="${esc(description)}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/,`<meta name="twitter:title" content="${esc(title)}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/,`<meta name="twitter:description" content="${esc(description)}">`)
    .replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@type":"FAQPage"[\s\S]*?<\/script>/,`<script type="application/ld+json">${schema}</script>`);
  const toc=groups.map(([name,,items])=>`<a class="card" href="#${items[0][0]}"><strong>${esc(name)}</strong><span>${items.length} verified answers</span></a>`).join('');
  const sections=groups.map(([name,,items])=>`<section class="faq-group"><h2>${esc(name)}</h2>${items.map(([id,q,a,url])=>`<article class="panel faq-item" id="${id}"><h3>${esc(q)}</h3><p>${esc(a)}</p><p class="faq-more"><a href="${url}">Read the related guide</a> · <a href="#faq-top">Back to FAQ topics</a></p></article>`).join('')}</section>`).join('');
  return `<!doctype html>\n<html lang="en">${nextHead}<body>${nav}<main class="wrap" id="faq-top"><div class="crumb"><a href="/">Home</a> / Nivalis Nights FAQ</div><h1>50 Nivalis Nights FAQs</h1><p class="lede">Verified answers about release, platforms, requirements, languages, city systems, businesses, relationships and quests.</p><div class="answer"><strong>Quick answer:</strong> This hub contains 50 evidence-checked answers based on the official storefront and ION LANDS updates; unannounced prices, platforms, candidates, quest details and mechanics are clearly marked unconfirmed.</div><nav class="cards faq-toc" aria-label="FAQ topics">${toc}</nav>${sections}<section class="panel source"><h2>Official sources and review policy</h2><p>Facts are checked against the <a href="${steam}" rel="nofollow">official Steam store page</a> and <a href="${news}" rel="nofollow">ION LANDS development news and Q&amp;A</a>. Store metadata may change before release, so platform, language and system-requirement answers are reviewed after major announcements.</p></section><p class="updated">Last reviewed: July 19, 2026 · 50 questions · Independent, unofficial player guide.</p>${newsModule}</main>${footer}</body></html>`;
}

const faqFile=path.join(root,'faq','index.html');
fs.writeFileSync(faqFile,renderFaqPage(fs.readFileSync(faqFile,'utf8')));

const tabMap={
  guides:['release-date','confirmed-platforms','languages','open-world','single-player','controller'],
  databases:['content-counts','quest-count','business-types','greenhouses','character-count','inventory'],
  businesses:['business-types','multiple-properties','staff','greenhouses','automation','vendor-discounts'],
  characters:['character-count','relationship-types','romance','npc-schedules','relationship-story','salt-pete'],
  quests:['quest-count','defined-ending','multiple-endings','side-quest-outcomes','quest-rewards','choices']
};
for(const [tab,ids] of Object.entries(tabMap)){
  const file=path.join(root,tab,'index.html');
  let html=fs.readFileSync(file,'utf8');
  const selected=ids.map(id=>faqs.find(f=>f.id===id));
  const module=`<section class="related-faq"><h2>Related Nivalis Nights FAQ</h2><p>Open a verified answer, then follow its detailed guide for more context.</p><div class="cards">${selected.map(f=>`<a class="card" href="/faq/#${f.id}"><strong>${esc(f.question)}</strong><span>${esc(f.answer)}</span></a>`).join('')}</div><p><a href="/faq/">Browse all 50 Nivalis Nights FAQs</a></p></section>`;
  html=html.replace(/<section class="related-faq">[\s\S]*?<\/section>/g,'');
  html=html.replace('<section class="tab-news">',`${module}<section class="tab-news">`);
  fs.writeFileSync(file,html);
}

console.log(`Generated ${faqs.length} verified FAQ answers and related FAQ entry modules on ${Object.keys(tabMap).length} tab pages.`);
