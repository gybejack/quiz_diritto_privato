import{d as l,u as c,a as d,r as p,o as m,f as n,F as f,k as v,l as s,p as _}from"./index-8ab158dc.js";import{S as g}from"./SimulationQuestion-8453b338.js";const y={class:"question-grid"},I=l({__name:"ReviewView",props:{categoryId:{type:Number}},setup(u){const o=u,r=c(),i=d(),t=p([]);return m(()=>{if(o.categoryId==-1){t.value=r.allQuestions.filter(e=>i.savedArrays.savedIds.includes(e.id));return}t.value=r.allQuestions.filter(e=>e.questionCategory.id==o.categoryId)}),(e,S)=>(s(),n("div",y,[(s(!0),n(f,null,v(t.value,a=>(s(),_(g,{key:a.id,question:a,"quiz-status":2},null,8,["question"]))),128))]))}});export{I as default};
