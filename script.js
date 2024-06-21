document.addEventListener("DOMContentLoaded",()=>{getCyclistData()});let getCyclistData=()=>{let t=new XMLHttpRequest;t.open("GET","https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json","true"),t.send(),t.onload=()=>{let e=t.responseText,a=JSON.parse(e);loadDopingChart(a)}},loadDopingChart=t=>{let e=getChartHeight(),a=getChartWidth(),i=getChartPadding(),l="%M:%S",d=getParsedData(t,l),r=loadSvg(e,a);getCustomLegend();let o=getTooltip();addCirclesInSvg(r,t).attr("cx",(e,l)=>xScale(t,a,i)(new Date(e.Year))).attr("cy",(t,a)=>yScale(d,e,i)(d3.timeParse(l)(t.Time))).attr("r",6).attr("data-xvalue",t=>t.Year).attr("data-yvalue",(t,e)=>d3.timeParse(l)(t.Time).toISOString()).attr("fill",(t,e)=>t.Doping?"#5790C2":"#FC813F").on("mouseover",r=>{o.style("opacity",1).attr("data-year",r.Year).html(`${r.Name}: ${r.Nationality}<br>
                                  Year: ${r.Year} Time: ${r.Time}<br></br>${r.Doping}`).style("left",`${20+xScale(t,a,i)(new Date(r.Year))}px`).style("top",`${yScale(d,e,i)(d3.timeParse(l)(r.Time))}px`)}).on("mouseout",(t,e)=>{o.style("opacity",0)});let s=d3.axisBottom(xScale(t,a,i)).tickFormat(d3.format("d"));loadXAxis(r,s,e,i);let n=d3.axisLeft(yScale(d,e,i)).tickFormat(t=>d3.timeFormat(l)(t));loadYAxis(r,n,i)};const getChartHeight=()=>600,getChartWidth=()=>1200,getChartPadding=()=>100,getParsedData=(t,e)=>t.map(t=>d3.timeParse(e)(t.Time)),loadSvg=(t,e)=>d3.select("body").append("svg").attr("height",t).attr("width",e),getCustomLegend=t=>d3.select("body").append("div").attr("id","legend").attr("height",100).attr("width",100).attr("fill","red").style("left","0").style("top","280px").html(`<div style="display:flex;font-size:13px;">
                   <div style="background-color:#5790C2;width:20px;height:20px;">
                   </div>
                   <div style="padding-left:10px;">Riders with doping allegations</div>
                  </div>
                  <div style="display:flex;padding-top:5px;font-size:13px;">
                   <div style="background-color:#FC813F;width:20px;height:20px;">
                   </div>
                   <div style="padding-left:10px;">No doping allegations</div>
                  </div>`),getTooltip=()=>d3.select("body").append("div").attr("id","tooltip").style("opacity",0),addCirclesInSvg=(t,e)=>t.selectAll("circle").data(e).enter().append("circle").attr("class","dot"),addLabelsOnCircles=(t,e,a)=>t.selectAll("text").data(e).enter().append("text").style("font-size",a).text((t,e)=>`${t.Time}`),loadXAxis=(t,e,a,i)=>{t.append("g").attr("transform",`translate(0,${a-i})`).attr("id","x-axis").call(e)},loadYAxis=(t,e,a)=>{t.append("g").attr("transform",`translate(${a},0)`).attr("id","y-axis").call(e)};let xScale=(t,e,a)=>d3.scaleTime().domain([d3.min(t,(t,e)=>new Date(t.Year-1)),d3.max(t,(t,e)=>new Date(t.Year+1)),]).range([a,e-a]),yScale=(t,e,a)=>d3.scaleTime().domain(d3.extent(t)).range([a,e-a]).nice(),ySecondsScale=(t,e,a)=>d3.scaleTime().domain([d3.min(t,(t,e)=>t.Seconds),d3.max(t,(t,e)=>t.Seconds),]).range([a,e-a]);function toggleLight(){var t=document.getElementById("body");t.className,t.className="light-mode"}function toggleDark(){var t=document.getElementById("body");t.className,t.className="dark-mode"}$(".btn-group > .btn").click(function(){$(".btn-group > .btn").removeClass("active"),$(this).addClass("active")});
