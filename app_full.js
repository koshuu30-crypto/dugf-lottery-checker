(()=>{const _0x5a7c=['length','push','slice','replace','match','map','filter','includes','forEach','innerHTML','value','toString'];(function(_0x4b3f8f,_0x5a7c8b){const _0x3e9f63=function(_0x3c6c7d){while(--_0x3c6c7d){_0x4b3f8f['push'](_0x4b3f8f['shift']());}};_0x3e9f63(++_0x5a7c8b);}(_0x5a7c,0x1a));const _0x3e9f=function(_0x4b3f8f,_0x5a7c8b){_0x4b3f8f=_0x4b3f8f-0x0;let _0x3e9f63=_0x5a7c[_0x4b3f8f];return _0x3e9f63;};

function KS_parseTickets(text){
  let nums=text.replace(/[^\d]/g,' ');
  let parts=nums.split(/\s+/).filter(x=>x[_0x3e9f('0x0')]>=6);
  let tickets=[];
  parts.forEach(p=>{
    if(p[_0x3e9f('0x0')]>6){
      for(let i=0;i<=p[_0x3e9f('0x0')]-6;i++){
        tickets[_0x3e9f('0x1')](p.slice(i,i+6));
      }
    }else if(p[_0x3e9f('0x0')]==6){
      tickets[_0x3e9f('0x1')](p);
    }
  });
  return [...new Set(tickets)];
}

function KS_check(ticket,win){
  let res=[];
  if(ticket===win.main1||ticket===win.main2||ticket===win.main3){
    res.push('BIG PRIZE');
  }
  if(ticket.slice(3)===win.main1.slice(3)||
     ticket.slice(3)===win.main2.slice(3)||
     ticket.slice(3)===win.main3.slice(3)){
    res.push('50,000 MMK');
  }
  if(ticket.slice(2)===win.main1.slice(2)||
     ticket.slice(2)===win.main2.slice(2)||
     ticket.slice(2)===win.main3.slice(2)){
    res.push('100,000 MMK');
  }
  if(ticket.slice(1)===win.main1.slice(1)||
     ticket.slice(1)===win.main2.slice(1)||
     ticket.slice(1)===win.main3.slice(1)){
    res.push('500,000 MMK');
  }
  win.special.forEach(s=>{
    if(ticket.slice(1)===s.slice(1)){
      res.push('1,000,000 MMK (SPECIAL)');
    }
  });
  return res;
}

window.KS_RUN=function(){
  const ticketText=document.getElementById('ticketInput').value;
  const main1=document.getElementById('main1').value;
  const main2=document.getElementById('main2').value;
  const main3=document.getElementById('main3').value;
  const specials=document.getElementById('specials').value.split(',').map(x=>x.trim());

  let wins={
    main1,main2,main3,
    special:specials
  };

  let tickets=KS_parseTickets(ticketText);
  let out=[];
  tickets.forEach(t=>{
    let r=KS_check(t,wins);
    if(r[_0x3e9f('0x0')]){
      out.push(`<div><b>${t}</b> → ${r.join(', ')}</div>`);
    }
  });

  document.getElementById('result').innerHTML=
    out.length?out.join(''):'<div>No winning tickets</div>';
};
})();
