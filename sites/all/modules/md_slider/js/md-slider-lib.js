/*------------------------------------------------------------------------
 # MD Slider - March 18, 2013
 # ------------------------------------------------------------------------
 # Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
 --------------------------------------------------------------------------*/

!function(t){t.fn.triggerItemEvent=function(){var i=t(this).data("slidepanel");if(null!=i){var e=t(this);return e.draggable({containment:"parent",stop:function(a,r){var o=Math.round(t(r.helper).position().left),d=Math.round(t(r.helper).position().top);e.data("left",o),e.data("top",d),i.mdSliderToolbar.changePositionValue(o,d)}}),e.resizable({handles:"e, s, se",containment:"parent",resize:function(a,r){var o=Math.round(t(r.helper).width()),d=Math.round(t(r.helper).height());e.data("width",o),e.data("height",d),i.mdSliderToolbar.changeSizeValue(o,d)}}),-1!=navigator.appVersion.indexOf("Mac")&&(t(document).keyup(function(){e.data("keySelect","")}),t(document).keydown(function(t){e.data("keySelect",t.keyCode)})),e.bind("mousedown",function(a){var r=a.ctrlKey;if(-1!=navigator.appVersion.indexOf("Mac")&&void 0!=e.data("keySelect")){var o=e.data("keySelect");r=224==o?!0:!1}r?t(this).addClass("ui-selected"):t(this).hasClass("ui-selected")?t(this).siblings(".slider-item.ui-selected").removeClass("ui-selected"):(t(this).siblings(".slider-item").removeClass("ui-selected"),t(this).addClass("ui-selected")),i.triggerChangeSelectItem()}),this}},t.fn.getItemValues=function(){if(t(this).hasClass("slider-item")){var i={width:t(this).data("width"),height:t(this).data("height"),left:t(this).data("left"),top:t(this).data("top"),starttime:t(this).data("starttime")?Math.round(t(this).data("starttime")):0,stoptime:t(this).data("stoptime")?Math.round(t(this).data("stoptime")):0,startani:t(this).data("startani"),stopani:t(this).data("stopani"),opacity:t(this).data("opacity"),mdtclass:t(this).data("mdtclass"),style:t(this).data("style"),zindex:t(this).css("z-index"),type:t(this).data("type"),title:t(this).data("title"),backgroundcolor:void 0==t(this).data("backgroundcolor")||""===t(this).data("backgroundcolor")?null:0==t(this).data("backgroundcolor")?"#000000":t.fixHex(t(this).data("backgroundcolor").toString()),backgroundtransparent:t(this).data("backgroundtransparent"),borderposition:t(this).data("borderposition"),borderwidth:t(this).data("borderwidth"),borderstyle:t(this).data("borderstyle"),bordercolor:void 0==t(this).data("bordercolor")||""===t(this).data("bordercolor")?null:0==t(this).data("bordercolor")?"#000000":t.fixHex(t(this).data("bordercolor").toString()),bordertopleftradius:t(this).data("bordertopleftradius"),bordertoprightradius:t(this).data("bordertoprightradius"),borderbottomrightradius:t(this).data("borderbottomrightradius"),borderbottomleftradius:t(this).data("borderbottomleftradius"),paddingtop:t(this).data("paddingtop"),paddingright:t(this).data("paddingright"),paddingbottom:t(this).data("paddingbottom"),paddingleft:t(this).data("paddingleft"),link:t(this).data("link")};return"text"==t(this).data("type")?t.extend(i,{fontsize:t(this).data("fontsize"),fontfamily:t(this).data("fontfamily"),fontweight:t(this).data("fontweight"),fontstyle:t(this).data("fontstyle"),textdecoration:t(this).data("textdecoration"),texttransform:t(this).data("texttransform"),textalign:t(this).data("textalign"),color:void 0==t(this).data("color")||""===t(this).data("color")?null:0==t(this).data("color")?"#000000":t.fixHex(t(this).data("color").toString())}):t.extend(i,{fileid:t(this).data("fileid"),thumb:t(this).find("img").attr("src")}),i}return null},t.fn.setItemValues=function(i){if(t(this).hasClass("slider-item")){for(var e in i)t(this).data(e,i[e]);return!0}return null},t.fn.setItemStyle=function(i){if(t(this).hasClass("slider-item")){var e=[];if(i.style&&t(this).addClass(i.style),i.width&&(e.width=i.width),i.height&&(e.height=i.height),i.top&&(e.top=i.top),i.left&&(e.left=i.left),i.opacity&&(e.opacity=i.opacity/100),null!=i.backgroundcolor){var a=i.backgroundcolor,r=parseInt(i.backgroundtransparent),o=t.HexToRGB(a);r=r?r:100;var d="rgba("+o.r+","+o.g+","+o.b+","+r/100+")";e["background-color"]=d}i.bordercolor&&(e["border-color"]=i.bordercolor),i.borderwidth&&(e["border-width"]=i.borderwidth+"px");var n="none";if(i.borderposition&&i.borderstyle){var s=i.borderposition,l=i.borderstyle;n=1&s?l:"none",n+=2&s?" "+l:" none",n+=4&s?" "+l:" none",n+=8&s?" "+l:" none"}e["border-style"]=n,i.bordertopleftradius&&(e["border-top-left-radius"]=i.bordertopleftradius+"px"),i.bordertoprightradius&&(e["border-top-right-radius"]=i.bordertoprightradius+"px"),i.borderbottomrightradius&&(e["border-bottom-right-radius"]=i.borderbottomrightradius+"px"),i.borderbottomleftradius&&(e["border-bottom-left-radius"]=i.borderbottomleftradius+"px"),i.paddingtop&&(e["padding-top"]=i.paddingtop+"px"),i.paddingright&&(e["padding-right"]=i.paddingright+"px"),i.paddingbottom&&(e["padding-bottom"]=i.paddingbottom+"px"),i.paddingleft&&(e["padding-left"]=i.paddingleft+"px"),"text"==i.type&&(i.fontsize&&(e["font-size"]=i.fontsize+"px"),i.fontfamily&&(e["font-family"]=i.fontfamily),i.fontweight&&(e["font-weight"]=i.fontweight),i.fontstyle&&(e["font-style"]=i.fontstyle),i.textdecoration&&(e["text-decoration"]=i.textdecoration),i.texttransform&&(e["text-transform"]=i.texttransform),i.textalign&&(e["text-align"]=i.textalign),i.color&&(e.color=i.color)),t(this).css(e)}return!1},t.fn.setItemHtml=function(i){return t(this).hasClass("slider-item")&&("text"==i.type?t(this).find("p").html(i.title.replace(/\n/g,"<br />")):t(this).find("img").attr("src",i.thumb)),!1},t.HexToRGB=function(t){var t=parseInt(t.toString().indexOf("#")>-1?t.substring(1):t,16);return{r:t>>16,g:(65280&t)>>8,b:255&t}},t.removeMinusSign=function(t){return t.replace(/-/g,"")},t.objectToString=function(t){return JSON.stringify(t)},t.stringToObject=function(t){return jQuery.parseJSON(t)},t.fixHex=function(t){var i=6-t.length;if(i>0){for(var e=[],a=0;i>a;a++)e.push("0");e.push(t),t=e.join("")}return t}}(jQuery);