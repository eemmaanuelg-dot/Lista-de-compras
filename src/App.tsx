import { useEffect, useState } from "react";
import { Search, Plus, Minus, Trash2, Copy, Printer, ArrowLeft } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "./data";
import type { Base, Client, House, Item, ShoppingList, Unit } from "./types";

const KEY = "lista-compras-v1";
const uid = () => crypto.randomUUID();
const empty = { clients: [], houses: [], bases: [], lists: [] as ShoppingList[] };
type Store = { clients: Client[]; houses: House[]; bases: Base[]; lists: ShoppingList[] };
function load(): Store { try { return JSON.parse(localStorage.getItem(KEY) || "null") || empty; } catch { return empty; } }
function cloneItems(items: Item[]) { return items.map(i => ({ ...i, id: uid() })); }

export function App() {
  const [store, setStore] = useState<Store>(load);
  const [page, setPage] = useState("home");
  const [editing, setEditing] = useState<ShoppingList | null>(null);
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [notice, setNotice] = useState("");

  useEffect(() => localStorage.setItem(KEY, JSON.stringify(store)), [store]);
  const go = (p: string) => { setPage(p); setNotice(""); };
  const start = (list?: ShoppingList) => {
    setEditing(list ? { ...list, items: cloneItems(list.items) } : { id: uid(), clientId: "", houseId: "", checkIn: "", checkOut: "", notes: "", items: [], createdAt: new Date().toISOString(), menus: [] });
    setStep(1); go("new");
  };
  const saveList = (list: ShoppingList) => {
    setStore(s => ({ ...s, lists: s.lists.some(x => x.id === list.id) ? s.lists.map(x => x.id === list.id ? list : x) : [list, ...s.lists] }));
    setNotice("Lista salva."); setPage("list");
  };
  const filtered = PRODUCTS.filter(p => (category === "Todos" || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()));

  return <div className="app">
    <aside><div className="side-title">Lista de Compras</div>
      {[
        ["home","Início"],["new","Nova lista"],["lists","Listas"],["clients","Clientes"],["houses","Casas"],["bases","Listas-base"],["catalog","Catálogo"]
      ].map(([id,label]) => <button className={page === id ? "nav active" : "nav"} key={id} onClick={() => id === "new" ? start() : go(id)}>{label}</button>)}
    </aside>
    <main>
      <header><button className="mobile-menu" onClick={() => go("home")}>☰</button><span>{page === "new" ? "Nova lista" : page === "list" ? "Lista" : ({"home":"Início",lists:"Listas",clients:"Clientes",houses:"Casas",bases:"Listas-base",catalog:"Catálogo"} as Record<string,string>)[page] || "Lista de Compras"}</span></header>
      {notice && <div className="notice">{notice}</div>}
      {page === "home" && <Home store={store} start={start} go={go} />}
      {page === "clients" && <SimpleClients store={store} setStore={setStore} />}
      {page === "houses" && <SimpleHouses store={store} setStore={setStore} />}
      {page === "bases" && <Bases store={store} setStore={setStore} />}
      {page === "catalog" && <Catalog search={search} setSearch={setSearch} />}
      {page === "lists" && <Lists store={store} open={(l: ShoppingList) => { setEditing(l); go("list"); }} start={start} setStore={setStore} />}
      {page === "new" && editing && <NewList editing={editing} setEditing={setEditing} step={step} setStep={setStep} store={store} search={search} setSearch={setSearch} category={category} setCategory={setCategory} filtered={filtered} onSave={saveList} />}
      {page === "list" && editing && <ListView list={editing} store={store} onBack={() => go("lists")} onEdit={() => start(editing)} />}
    </main>
  </div>;
}

function Home({ store, start, go }: { store: Store; start: (l?: ShoppingList) => void; go: (p:string)=>void }) {
  return <section><button className="primary big" onClick={() => start()}>+ Nova lista de compras</button>
    <div className="quick">{[["clients","Clientes"],["houses","Casas"],["bases","Listas-base"],["catalog","Catálogo"]].map(([id,l]) => <button key={id} onClick={() => go(id)}>{l}</button>)}</div>
    <h2>Listas recentes</h2><div className="list-stack">{store.lists.slice(0,8).map(l => <div className="row-card" key={l.id}><div><b>{store.clients.find(c=>c.id===l.clientId)?.name || "Sem cliente"}</b><span>{store.houses.find(h=>h.id===l.houseId)?.name || "Sem casa"} · {l.items.length} itens</span></div><button onClick={() => {}} aria-label="abrir">›</button></div>)}</div>
    {!store.lists.length && <p className="muted">Nenhuma lista criada ainda.</p>}</section>;
}

function NewList({ editing, setEditing, step, setStep, store, search, setSearch, category, setCategory, filtered, onSave }: any) {
  const total = editing.items.reduce((n:number,i:Item) => n+i.quantity,0);
  const addClient = () => { const name=prompt("Nome do cliente"); if(!name)return; const c={id:uid(),name,contact:prompt("WhatsApp/contato")||"",notes:""}; setStoreSafe(setEditing, c, "client"); };
  const addHouse = () => { const name=prompt("Nome da casa"); if(!name)return; const h={id:uid(),name,address:prompt("Endereço")||"",capacity:Number(prompt("Capacidade máxima")||0),notes:""}; setStoreSafe(setEditing,h,"house"); };
  function changeProduct(p:any, delta:number) {
    setEditing((x:ShoppingList) => {
      const found=x.items.find(i=>i.name===p.name && i.category===p.category);
      if(found){const q=Math.max(0,found.quantity+delta); return {...x,items:q?x.items.map(i=>i.id===found.id?{...i,quantity:q}:i):x.items.filter(i=>i.id!==found.id)}}
      return delta>0?{...x,items:[...x.items,{id:uid(),name:p.name,category:p.category,unit:p.units[0],quantity:delta}]}:x;
    });
  }
  function chooseBase(id:string){const b=store.bases.find((x:Base)=>x.id===id);setEditing((x:ShoppingList)=>({...x,items:b?cloneItems(b.items):[]}));}
  return <section><div className="steps"><span className={step>=1?"on":""}>1 Identificação</span><span className={step>=2?"on":""}>2 Base</span><span className={step>=3?"on":""}>3 Montagem</span></div>
    {step===1 && <div className="panel"><h2>Identificação</h2>
      <label>Cliente<select value={editing.clientId} onChange={e=>setEditing({...editing,clientId:e.target.value})}><option value="">Selecionar</option>{store.clients.map((c:Client)=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
      <button className="link" onClick={addClient}>+ Novo cliente</button>
      <label>Casa<select value={editing.houseId} onChange={e=>setEditing({...editing,houseId:e.target.value})}><option value="">Selecionar</option>{store.houses.map((h:House)=><option key={h.id} value={h.id}>{h.name}</option>)}</select></label>
      <button className="link" onClick={addHouse}>+ Nova casa</button>
      <div className="grid2"><label>Check-in<input type="date" value={editing.checkIn} onChange={e=>setEditing({...editing,checkIn:e.target.value})}/></label><label>Check-out<input type="date" value={editing.checkOut} onChange={e=>setEditing({...editing,checkOut:e.target.value})}/></label></div>
      <label>Observações<textarea value={editing.notes} onChange={e=>setEditing({...editing,notes:e.target.value})}/></label><button className="primary" onClick={()=>setStep(2)}>Continuar</button>
    </div>}
    {step===2 && <div className="panel"><h2>Lista-base</h2><button className="base-choice" onClick={()=>{chooseBase("");setStep(3)}}><b>Começar vazia</b><span>Montar a lista manualmente</span></button>{store.bases.map((b:Base)=><button className="base-choice" key={b.id} onClick={()=>{chooseBase(b.id);setStep(3)}}><b>{b.name}</b><span>{b.items.length} itens</span></button>)}</div>}
    {step===3 && <><div className="summarybar"><span>{store.clients.find((c:Client)=>c.id===editing.clientId)?.name||"Cliente não definido"} · {store.houses.find((h:House)=>h.id===editing.houseId)?.name||"Casa não definida"}</span><b>{total} itens</b></div>
      <div className="toolbar"><div className="search"><Search size={17}/><input placeholder="Buscar produto" value={search} onChange={e=>setSearch(e.target.value)}/></div><select value={category} onChange={e=>setCategory(e.target.value)}><option>Todos</option>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select></div>
      <div className="product-grid">{filtered.map((p:any)=>{const item=editing.items.find((i:Item)=>i.name===p.name&&i.category===p.category);return <div className="product-row" key={p.id}><div><b>{p.name}</b><small>{p.category}</small></div><select value={item?.unit||p.units[0]} onChange={e=>item&&setEditing((x:ShoppingList)=>({...x,items:x.items.map(i=>i.id===item.id?{...i,unit:e.target.value as Unit}:i)}))}>{p.units.map((u:string)=><option key={u}>{u}</option>)}</select><div className="qty"><button onClick={()=>changeProduct(p,-1)}><Minus size={15}/></button><b>{item?.quantity||0}</b><button onClick={()=>changeProduct(p,1)}><Plus size={15}/></button></div></div>})}</div>
      <div className="selected"><h3>Lista atual</h3>{editing.items.map((i:Item)=><div className="selected-row" key={i.id}><span>{i.name}</span><span>{i.quantity} {i.unit}</span><button onClick={()=>setEditing((x:ShoppingList)=>({...x,items:x.items.filter(z=>z.id!==i.id)}))}><Trash2 size={16}/></button></div>)}</div>
      <button className="primary sticky" onClick={()=>onSave(editing)}>Salvar lista</button>
    </>}
  </section>;
}
function setStoreSafe(setEditing:any, obj:any, type:string){ /* placeholder: inline creation is completed through main screens in V1 */ setEditing((x:any)=>x); alert("Crie o cadastro em Clientes/Casas antes de iniciar a lista."); }

function SimpleClients({store,setStore}:any){return <section><button className="primary" onClick={()=>{const name=prompt("Nome");if(name)setStore((s:Store)=>({...s,clients:[...s.clients,{id:uid(),name,contact:prompt("WhatsApp/contato")||"",notes:""}]}))}}>+ Novo cliente</button>{store.clients.map((c:Client)=><div className="row-card" key={c.id}><div><b>{c.name}</b><span>{c.contact}</span></div><button onClick={()=>setStore((s:Store)=>({...s,clients:s.clients.filter(x=>x.id!==c.id)}))}><Trash2 size={16}/></button></div>)}</section>}
function SimpleHouses({store,setStore}:any){return <section><button className="primary" onClick={()=>{const name=prompt("Nome da casa");if(name)setStore((s:Store)=>({...s,houses:[...s.houses,{id:uid(),name,address:prompt("Endereço")||"",capacity:Number(prompt("Capacidade máxima")||0),notes:""}]}))}}>+ Nova casa</button>{store.houses.map((h:House)=><div className="row-card" key={h.id}><div><b>{h.name}</b><span>{h.capacity ? h.capacity+" hóspedes · " : ""}{h.address}</span></div><button onClick={()=>setStore((s:Store)=>({...s,houses:s.houses.filter(x=>x.id!==h.id)}))}><Trash2 size={16}/></button></div>)}</section>}
function Bases({store,setStore}:any){return <section><button className="primary" onClick={()=>{const name=prompt("Nome da lista-base");if(name)setStore((s:Store)=>({...s,bases:[...s.bases,{id:uid(),name,items:[],notes:""}]}))}}>+ Criar nova lista-base</button>{store.bases.map((b:Base)=><div className="row-card" key={b.id}><div><b>{b.name}</b><span>{b.items.length} itens</span></div><button onClick={()=>setStore((s:Store)=>({...s,bases:s.bases.filter(x=>x.id!==b.id)}))}><Trash2 size={16}/></button></div>)}</section>}
function Lists({store,open,start,setStore}:any){return <section><button className="primary" onClick={()=>start()}>+ Nova lista</button>{store.lists.map((l:ShoppingList)=><div className="row-card" key={l.id}><div><b>{store.clients.find((c:Client)=>c.id===l.clientId)?.name||"Sem cliente"}</b><span>{store.houses.find((h:House)=>h.id===l.houseId)?.name||"Sem casa"} · {l.items.length} itens</span></div><div className="actions"><button onClick={()=>open(l)}>Abrir</button><button onClick={()=>start(l)}><Copy size={15}/></button><button onClick={()=>setStore((s:Store)=>({...s,lists:s.lists.filter(x=>x.id!==l.id)}))}><Trash2 size={15}/></button></div></div>)}</section>}
function Catalog({search,setSearch}:any){const[cat,setCat]=useState("Todos");const list=PRODUCTS.filter(p=>(cat==="Todos"||p.category===cat)&&p.name.toLowerCase().includes(search.toLowerCase()));return <section><div className="toolbar"><div className="search"><Search size={17}/><input placeholder="Buscar no catálogo" value={search} onChange={e=>setSearch(e.target.value)}/></div><select value={cat} onChange={e=>setCat(e.target.value)}><option>Todos</option>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select></div><div className="catalog-list">{list.map(p=><div key={p.id}><span>{p.name}</span><small>{p.category}</small></div>)}</div></section>}
function ListView({list,store,onBack,onEdit}:any){const c=store.clients.find((x:Client)=>x.id===list.clientId),h=store.houses.find((x:House)=>x.id===list.houseId);return <section className="print-area"><button className="back" onClick={onBack}><ArrowLeft size={16}/> Listas</button><div className="print-head"><h1>Lista de compras</h1><p><b>Cliente:</b> {c?.name||"—"} · <b>Contato:</b> {c?.contact||"—"}</p><p><b>Casa:</b> {h?.name||"—"} · <b>Capacidade:</b> {h?.capacity||"—"} · <b>Período:</b> {list.checkIn||"—"} → {list.checkOut||"—"}</p></div>{CATEGORIES.map(cat=>{const items=list.items.filter((i:Item)=>i.category===cat);if(!items.length)return null;return <div className="print-cat" key={cat}><h3>{cat}</h3>{items.map((i:Item)=><div className="print-item" key={i.id}><span>□ {i.name}</span><b>{i.quantity} {i.unit}</b></div>)}</div>})}<p>{list.notes}</p><div className="no-print-actions"><button className="primary no-print" onClick={onEdit}>Editar</button><button className="primary no-print" onClick={()=>window.print()}><Printer size={16}/> Imprimir / PDF</button></div></section>}
