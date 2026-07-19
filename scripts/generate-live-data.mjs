import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const domain='https://nivalisnights.wiki';
const reviewed='2026-07-19';
const steam='https://store.steampowered.com/app/1488490/Nivalis_Nights/';
const officialFaq='https://steamcommunity.com/app/1488490/discussions/0/598530855994991183/';
const devNews='https://steamcommunity.com/app/1488490/allnews/';

const pages=[
  ['first-person-perspective','Is Nivalis Nights First Person?','Official confirmation of the camera perspective, visible body and immersion design.','Nivalis Nights is played from a first-person perspective. The official FAQ says the perspective is intentional so players experience the city at its full scale.',[
    ['What the player sees','The player is placed directly at the center of the experience rather than controlling a visible third-person avatar. Arms and hands are the only body parts currently described as visible during play.'],
    ['Why first person was chosen','ION LANDS links the camera choice to immersion and the immense scale of the city. Official material does not announce a third-person toggle or separate cinematic exploration mode.'],
    ['Related accessibility questions','Field of view controls, camera-bob settings and motion-sickness options have not been detailed. Those settings require verification in the release build instead of assumptions based on other first-person games.']]],
  ['character-customization','Can You Customize Your Character in Nivalis Nights?','Current status of appearance creation, avatar visibility and character customization.','Nivalis Nights does not currently offer player-character appearance customization. The official FAQ says there is no virtual avatar and only the player’s arms and hands are visible.',[
    ['No appearance creator announced','No face, body, hairstyle, clothing or pronoun creator is described in the current official FAQ. Apartment, venue and relationship customization should not be confused with avatar customization.'],
    ['A first-person design','The player experiences the city directly in first person. Traditional character meshes are used for the people met around Nivalis, but that technology does not imply a customizable player model.'],
    ['What remains to verify','The official answer covers visual avatar customization. It does not fully document whether hands, sleeves, accessories or story identity can ever change through gameplay.']]],
  ['photo-mode','Does Nivalis Nights Have Photo Mode?','Confirmed photo-mode status and the details still awaiting release-build verification.','Yes. The official Nivalis Nights FAQ explicitly confirms a photo mode for virtual photography.',[
    ['What is confirmed','Photo mode is part of the announced game scope. This is separate from Steam screenshots and means the game will provide a dedicated photography feature.'],
    ['Controls are not yet published','The developer has not listed camera range, filters, depth of field, pose controls, time-of-day controls or whether NPCs and the interface can be hidden.'],
    ['Release guide plan','The finished guide will document the activation shortcut, camera limits, available effects, output location and whether photo mode pauses schedules, weather or business operations.']]],
  ['offline-play','Can You Play Nivalis Nights Offline?','Internet requirement, platform updates and Steam Cloud behavior explained.','Nivalis Nights does not require an internet connection for normal play beyond platform services used to update the game. Cloud saves require connectivity.',[
    ['Single-player offline design','The official FAQ describes Nivalis Nights as a single-player experience with no multiplayer or co-op features planned, so moment-to-moment play is not built around an online session.'],
    ['When internet is still used','Steam or Epic may need a connection for installation, updates, account checks or cloud synchronization. Those platform functions are different from an always-online gameplay requirement.'],
    ['Save safety','Players using multiple devices should let cloud synchronization finish before changing machines. Exact conflict handling depends on the storefront client rather than an in-game cross-platform account.']]],
  ['ultrawide-support','Does Nivalis Nights Support Ultrawide Monitors?','Official ultrawide confirmation plus aspect-ratio and interface information.','Yes. The official FAQ confirms ultrawide monitor support, and the May 2026 optimization update says the interface is designed for multiple aspect ratios.',[
    ['Ultrawide is confirmed','The developer’s pinned FAQ gives a direct yes to ultrawide support. It does not state exact tested resolutions, horizontal field-of-view behavior or cutscene presentation.'],
    ['Interface scaling work','More than 40 interface windows, panels and elements have been engineered for different displays. The same development update specifically mentions support down to 4:3 layouts.'],
    ['What the launch test should cover','A useful compatibility table should check 21:9 and 32:9 gameplay, menus, subtitles, photo mode and cutscenes separately rather than treating one successful screen as complete support.']]],
  ['vr-support','Does Nivalis Nights Support VR?','Current official VR status and the distinction between first person and virtual reality.','VR support is not currently planned and is not a development priority, according to the official FAQ.',[
    ['First person does not mean VR','Nivalis Nights uses a first-person camera, but that alone does not provide headset tracking, motion controls, stereoscopic rendering or a VR interface.'],
    ['No headset list exists','No official support is announced for Meta Quest, Valve Index, HTC Vive, PlayStation VR2 or Windows mixed-reality headsets.'],
    ['Future status language','The official wording describes the current scope rather than making a permanent promise. This page will change only after ION LANDS or 505 Games announces supported VR hardware.']]],
  ['mod-support','Does Nivalis Nights Support Mods?','Official mod-tool status, Steam Workshop status and safe pre-release expectations.','Official modding tools are not part of the current Nivalis Nights scope. Steam Workshop support is also not listed on the store page.',[
    ['No official toolkit announced','ION LANDS answers that modding tools are not in scope at the moment. Players should not interpret the game’s Unity technology or voxel-style environment as permission or documentation for mods.'],
    ['Workshop is not listed','The current Steam feature list includes achievements, Steam Cloud and Family Sharing, but it does not list Steam Workshop integration.'],
    ['Avoid unsupported promises','File formats, scripting access, save editing and third-party modifications cannot be documented responsibly before release. Any future guide must distinguish official support from unsupported community experiments.']]],
  ['camus-return','Is Camus From Cloudpunk in Nivalis Nights?','Official status of Camus and connections between Cloudpunk and Nivalis Nights.','There are currently no plans for Camus to return in Nivalis Nights. The new game shares the city with Cloudpunk but focuses on new people and a standalone story.',[
    ['The direct character answer','The official FAQ says Camus is not currently planned to visit Nivalis Nights. This should not be converted into an unannounced cameo, quest or hidden collectible claim.'],
    ['Shared city, different experience','Players familiar with Cloudpunk may notice locations, details and small connections. Prior knowledge is not required because Nivalis Nights is designed to stand alone.'],
    ['Confirmed character coverage','Salt Pete is one publicly spotlighted resident, while the wider cast exceeds 130 authored characters. Individual pages require a verified name and meaningful official details.']]],
  ['printed-meat','Can You Print Meat in Nivalis Nights?','How printed meat fits the greenhouse, ingredient and restaurant systems.','Yes. The official greenhouse development update says specialized machinery can print meat alongside growing mushrooms, grains and vegetables.',[
    ['Part of high-tech farming','Printed meat belongs to the greenhouse system rather than a conventional livestock system. Players equip rented spaces with machinery purchased from specialized vendors.'],
    ['Connected to restaurant supply','Harvested or produced ingredients can be sold or sent to restaurants. Exact printed-meat names, recipes, output quantities and profit margins are not publicly listed.'],
    ['No invented item variants','This page records the confirmed production method without creating placeholder pages for beef, poultry or other varieties that have not received official in-game names.']]],
  ['furniture-item-count','How Many Furniture Items Are in Nivalis Nights?','Confirmed furniture count, vendor assortments and responsible database coverage.','ION LANDS reports 620 furniture items in the game’s interface data. Furniture can be used in homes, business venues and paid interior-design jobs.',[
    ['The confirmed total','The May 2026 optimization update cites 620 furniture items while describing the scale and readability requirements of more than 40 interface windows and panels.'],
    ['How furniture is obtained','Different city vendors offer distinct assortments of furniture and accessories. Sets use different materials to create different atmospheres in apartments and venues.'],
    ['Database quality rule','The count is not an official item-name list. Individual item URLs should wait for a verified name, vendor or unlock source, price and placement information.']]],
  ['voiced-characters','How Many Nivalis Nights Characters Are Voiced?','Latest official voice-over scale, language coverage and cast status.','A January 2026 development update says voice-over was being implemented for more than 135 main and secondary characters.',[
    ['Voice production scale','The September 2025 community blog reported more than 6,000 auditions under review. The later January update describes voices being added to 135-plus characters.'],
    ['Audio language','English is the only language currently marked for full audio on Steam. Ten additional languages are listed for interface and subtitles.'],
    ['What is not yet public','The complete actor list, number of voiced lines and whether every optional NPC is fully voiced have not been published. Character pages should not assign actors without an official credit.']]],
  ['demo-status','Is There a Nivalis Nights Demo?','Current Steam demo and playable-preview status checked against official listings.','No public Nivalis Nights demo is currently available or listed on the official Steam store page. The game is scheduled to launch as a full release rather than Early Access.',[
    ['Current storefront status','The Steam page offers wishlisting and release notifications but does not show a Download Demo button. Showcase footage and an early-game preview video are not playable public demos.'],
    ['Full release, not Early Access','The pinned official FAQ says Nivalis Nights will launch as a full release with no Early Access period. This does not by itself rule out a future limited preview, but none is currently announced.'],
    ['How this page is updated','Demo status is checked against the store and official announcements. Community requests, rumors and unattended Steam discussions are not treated as confirmation.']]]
];

const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function render([slug,title,description,answer,sections]){
  const url=`${domain}/${slug}/`;
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:title,description,mainEntityOfPage:url,datePublished:reviewed,dateModified:reviewed,author:{'@type':'Organization',name:'Nivalis Nights Wiki'},publisher:{'@type':'Organization',name:'Nivalis Nights Wiki'}});
  const crumbs=JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${domain}/`},{'@type':'ListItem',position:2,name:title,item:url}]});
  const sectionHtml=sections.map(([h,b])=>`<section class="panel"><h2>${esc(h)}</h2><p>${esc(b)}</p></section>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Confirmed Nivalis Nights Guide</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${url}"><meta property="og:type" content="article"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1488490/header.jpg"><meta name="twitter:card" content="summary_large_image"><link rel="stylesheet" href="/assets/site.css"><script type="application/ld+json">${schema}</script><script type="application/ld+json">${crumbs}</script></head><body><header class="top"><nav class="nav wrap" aria-label="Main navigation"><a href="/">Nivalis Nights Wiki</a><a href="/guides/">Guides</a><a href="/databases/">Databases</a><a href="/businesses/">Businesses</a><a href="/characters/">Characters</a><a href="/quests/">Quests</a><a href="/faq/">FAQ</a></nav></header><main class="wrap"><div class="crumb"><a href="/">Home</a> / <a href="/guides/">Guides</a> / ${esc(title)}</div><h1>${esc(title)}</h1><p class="lede">${esc(description)}</p><div class="answer"><strong>Quick answer:</strong> ${esc(answer)}</div>${sectionHtml}<section><h2>Related confirmed guides</h2><div class="cards"><a class="card" href="/gameplay-systems/"><strong>Gameplay systems</strong><span>Confirmed activities and connected mechanics</span></a><a class="card" href="/characters/"><strong>Characters</strong><span>Named residents and relationship evidence</span></a><a class="card" href="/databases/"><strong>Content databases</strong><span>Verified ingredients, meals, quests and furniture</span></a><a class="card" href="/demo-guide/"><strong>Demo and release status</strong><span>Playable build, full release and storefront checks</span></a></div></section><section class="panel source"><h2>Sources and verification</h2><p>This pre-release page uses the official <a href="${steam}" rel="nofollow">Nivalis Nights Steam listing</a>, <a href="${officialFaq}" rel="nofollow">pinned publisher FAQ</a> and <a href="${devNews}" rel="nofollow">ION LANDS development updates</a>. Exact values and entity names are included only when officially published.</p></section><p class="updated">Last reviewed: July 19, 2026 · Independent, unofficial player guide.</p></main><footer class="footer"><div class="wrap">Nivalis Nights Wiki is an independent fan resource and is not affiliated with ION LANDS or 505 Games.</div></footer></body></html>`;
}

for(const page of pages){const dir=path.join(root,page[0]);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),render(page));}

const moduleByHub={
  guides:['first-person-perspective','photo-mode','offline-play','ultrawide-support','demo-status','vr-support'],
  databases:['furniture-item-count','printed-meat','voiced-characters','ultrawide-support','offline-play','mod-support'],
  businesses:['printed-meat','furniture-item-count','offline-play','photo-mode','demo-status','first-person-perspective'],
  characters:['character-customization','camus-return','voiced-characters','first-person-perspective','photo-mode','demo-status'],
  quests:['first-person-perspective','offline-play','character-customization','camus-return','photo-mode','demo-status']
};
const bySlug=new Map(pages.map(p=>[p[0],p]));
for(const [hub,slugs] of Object.entries(moduleByHub)){
  const file=path.join(root,hub,'index.html');let html=fs.readFileSync(file,'utf8');
  const module=`<section class="live-data"><h2>Latest Confirmed Game Data</h2><p>Newly verified character, item, special-feature and playable-build answers from official sources.</p><div class="cards">${slugs.map(slug=>{const p=bySlug.get(slug);return `<a class="card" href="/${slug}/"><strong>${esc(p[1])}</strong><span>${esc(p[3])}</span></a>`}).join('')}</div></section>`;
  html=html.replace(/<section class="live-data">[\s\S]*?<\/section>/g,'');
  html=html.replace('<section class="related-faq">',`${module}<section class="related-faq">`);
  fs.writeFileSync(file,html);
}

// Keep the established /demo-guide/ URL current and link it to the focused status page.
const demoFile=path.join(root,'demo-guide','index.html');
let demo=fs.readFileSync(demoFile,'utf8');
demo=demo.replace(/<section class="live-demo-status">[\s\S]*?<\/section>/g,'');
demo=demo.replace('<section><h2>Related Nivalis Nights guides</h2>',`<section class="panel live-demo-status"><h2>Current demo status</h2><p>No public demo is listed on Steam as of July 19, 2026. Nivalis Nights is scheduled for a full release on September 29, 2026, with no Early Access period. <a href="/demo-status/">Open the source-checked demo status page</a>.</p></section><section><h2>Related Nivalis Nights guides</h2>`);
fs.writeFileSync(demoFile,demo);

let sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const existing=new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]));
const added=pages.filter(p=>!existing.has(`${domain}/${p[0]}/`)).map(p=>`  <url><loc>${domain}/${p[0]}/</loc><lastmod>${reviewed}</lastmod></url>`).join('\n');
if(added)sitemap=sitemap.replace('\n</urlset>',`\n${added}\n</urlset>`);
fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
console.log(`Generated ${pages.length} current-data pages and linked them from ${Object.keys(moduleByHub).length} hubs.`);
