import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <div className="not-found"><h1>404</h1><h2>Página não encontrada</h2><Link to="/">Voltar para o início</Link></div>}
function ErrorComponent({error,reset}:ErrorComponentProps){console.error(error);const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"})},[error]);return <div className="not-found"><h1>Ops!</h1><p>Não foi possível carregar a página.</p><button onClick={()=>{router.invalidate();reset()}}>Tentar novamente</button></div>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
  head:()=>({meta:[
    {charSet:"utf-8"},
    {name:"viewport",content:"width=device-width, initial-scale=1"},
    {title:"10 Maneiras de Desenvolver a Autonomia de Crianças Autistas"},
    {name:"description",content:"Um guia prático para famílias e cuidadores transformarem tarefas do cotidiano em oportunidades de aprendizagem e autonomia."},
    {property:"og:title",content:"10 Maneiras de Desenvolver a Autonomia de Crianças Autistas"},
    {property:"og:description",content:"Autonomia é construída com oportunidade, ensino, repetição, paciência e respeito ao ritmo individual."},
    {property:"og:type",content:"website"},
    {name:"twitter:card",content:"summary_large_image"}
  ],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]}),
  shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent
});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
