$(window).on("load",function(){var a=dimple.newSvg("#scatter-chart","100%",500),b=dimple.newSvg("#vertical-lollipop-scatter","100%",500),c=dimple.newSvg("#horizontal-lollipop-scatter","100%",500),d=dimple.newSvg("#dot-matrix","100%",500);d3.tsv("robust-assets/demo-data/dimple/example-data.tsv",function(e){function f(){setTimeout(function(){g.draw(0,!0),j.draw(0,!0),k.draw(0,!0),l.draw(0,!0),h.titleShape.remove(),i.titleShape.remove()},100)}scatter_chart_data=dimple.filterData(e,"Date","01/12/2012");var g=new dimple.chart(a,scatter_chart_data);g.setBounds(0,0,"100%","100%"),g.setMargins(40,10,0,50);var h=g.addMeasureAxis("x","Unit Sales"),i=g.addMeasureAxis("y","Operating Profit");g.addSeries(["SKU","Channel"],dimple.plot.bubble),g.defaultColors=[new dimple.color("#673AB7"),new dimple.color("#E91E63")],h.fontSize="12",i.fontSize="12",g.draw(),h.titleShape.remove(),i.titleShape.remove();var j=new dimple.chart(b,e);j.setBounds(0,0,"100%","100%"),j.setMargins(40,10,0,50);var h=j.addCategoryAxis("x","Month");h.addOrderRule("Date");var i=j.addMeasureAxis("y","Unit Sales");j.addSeries("Channel",dimple.plot.bubble);j.defaultColors=[new dimple.color("#673AB7"),new dimple.color("#E91E63")],h.fontSize="12",i.fontSize="12",j.draw(),h.titleShape.remove(),i.titleShape.remove();var k=new dimple.chart(c,e);k.setBounds(0,0,"100%","100%"),k.setMargins(40,10,0,50);var h=k.addMeasureAxis("x","Unit Sales"),i=k.addCategoryAxis("y","Month");i.addOrderRule("Date");k.addSeries("Channel",dimple.plot.bubble);k.defaultColors=[new dimple.color("#673AB7"),new dimple.color("#E91E63")],h.fontSize="12",i.fontSize="12",k.draw(),h.titleShape.remove(),i.titleShape.remove();var l=new dimple.chart(d,e);l.setBounds(0,0,"100%","100%"),l.setMargins(40,10,0,50);var h=l.addCategoryAxis("x",["Channel","Price Tier"]),i=l.addCategoryAxis("y","Owner");l.addSeries("Price Tier",dimple.plot.bubble);l.defaultColors=[new dimple.color("#673AB7"),new dimple.color("#E91E63")],h.fontSize="12",i.fontSize="12",l.draw(),h.titleShape.remove(),i.titleShape.remove(),$(window).on("resize",f),$(".menu-toggle").on("click",f)})});