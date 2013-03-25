/*
 Copyright 2012 Igor Vaynberg

 Version: 3.2 Timestamp: Mon Sep 10 10:38:04 PDT 2012

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in
 compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License is
 distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and limitations under the License.
 */
(function(e){typeof e.fn.each2=="undefined"&&e.fn.extend({each2:function(t){var n=e([0]),r=-1,i=this.length;while(++r<i&&(n.context=n[0]=this[r])&&t.call(n[0],r,n)!==!1);return this}})})(jQuery),function(e,t){"use strict";function a(e,t){var n=0,r=t.length,i;if(typeof e=="undefined")return-1;if(e.constructor===String){for(;n<r;n+=1)if(e.localeCompare(t[n])===0)return n}else for(;n<r;n+=1){i=t[n];if(i.constructor===String){if(i.localeCompare(e)===0)return n}else if(i===e)return n}return-1}function f(e,n){return e===n?!0:e===t||n===t?!1:e===null||n===null?!1:e.constructor===String?e.localeCompare(n)===0:n.constructor===String?n.localeCompare(e)===0:!1}function l(t,n){var r,i,s;if(t===null||t.length<1)return[];r=t.split(n);for(i=0,s=r.length;i<s;i+=1)r[i]=e.trim(r[i]);return r}function c(e){return e.outerWidth()-e.width()}function h(n){var r="keyup-change-value";n.bind("keydown",function(){e.data(n,r)===t&&e.data(n,r,n.val())}),n.bind("keyup",function(){var i=e.data(n,r);i!==t&&n.val()!==i&&(e.removeData(n,r),n.trigger("keyup-change"))})}function p(n){n.bind("mousemove",function(n){var r=e.data(document,"select2-lastpos");(r===t||r.x!==n.pageX||r.y!==n.pageY)&&e(n.target).trigger("mousemove-filtered",n)})}function d(e,n,r){r=r||t;var i;return function(){var t=arguments;window.clearTimeout(i),i=window.setTimeout(function(){n.apply(r,t)},e)}}function v(e){var t=!1,n;return function(){return t===!1&&(n=e(),t=!0),n}}function m(e,t){var n=d(e,function(e){t.trigger("scroll-debounced",e)});t.bind("scroll",function(e){a(e.target,t.get())>=0&&n(e)})}function g(e){e.preventDefault(),e.stopPropagation()}function y(t){if(!u){var n=t[0].currentStyle||window.getComputedStyle(t[0],null);u=e("<div></div>").css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:n.fontSize,fontFamily:n.fontFamily,fontStyle:n.fontStyle,fontWeight:n.fontWeight,letterSpacing:n.letterSpacing,textTransform:n.textTransform,whiteSpace:"nowrap"}),e("body").append(u)}return u.text(t.val()),u.width()}function b(e,t,n){var r=e.toUpperCase().indexOf(t.toUpperCase()),i=t.length;if(r<0){n.push(e);return}n.push(e.substring(0,r)),n.push("<span class='select2-match'>"),n.push(e.substring(r,r+i)),n.push("</span>"),n.push(e.substring(r+i,e.length))}function w(t){var n,r=0,i=null,s=t.quietMillis||100;return function(o){window.clearTimeout(n),n=window.setTimeout(function(){r+=1;var n=r,s=t.data,u=t.transport||e.ajax,a=t.traditional||!1,f=t.type||"GET";s=s.call(this,o.term,o.page,o.context),null!==i&&i.abort(),i=u.call(null,{url:t.url,dataType:t.dataType,data:s,type:f,traditional:a,success:function(e){if(n<r)return;var i=t.results(e,o.page);o.callback(i)}})},s)}}function E(t){var n=t,r,i=function(e){return""+e.text};return e.isArray(n)||(i=n.text,e.isFunction(i)||(r=n.text,i=function(e){return e[r]}),n=n.results),function(t){var r=t.term,s={results:[]},o;if(r===""){t.callback({results:n});return}o=function(n,s){var u,a;n=n[0];if(n.children){u={};for(a in n)n.hasOwnProperty(a)&&(u[a]=n[a]);u.children=[],e(n.children).each2(function(e,t){o(t,u.children)}),u.children.length&&s.push(u)}else t.matcher(r,i(n))&&s.push(n)},e(n).each2(function(e,t){o(t,s.results)}),t.callback(s)}}function S(n){return e.isFunction(n)?n:function(r){var i=r.term,s={results:[]};e(n).each(function(){var e=this.text!==t,n=e?this.text:this;(i===""||r.matcher(i,n))&&s.results.push(e?this:{id:this,text:this})}),r.callback(s)}}function x(t,n){if(e.isFunction(t))return!0;if(!t)return!1;throw new Error("formatterName must be a function or a falsy value")}function T(t){return e.isFunction(t)?t():t}function N(t){var n=0;return e.each(t,function(e,t){t.children?n+=N(t.children):n++}),n}function C(e,n,r,i){var s=e,o=!1,u,a,l,c,h;if(!i.createSearchChoice||!i.tokenSeparators||i.tokenSeparators.length<1)return t;for(;;){a=-1;for(l=0,c=i.tokenSeparators.length;l<c;l++){h=i.tokenSeparators[l],a=e.indexOf(h);if(a>=0)break}if(a<0)break;u=e.substring(0,a),e=e.substring(a+h.length);if(u.length>0){u=i.createSearchChoice(u,n);if(u!==t&&u!==null&&i.id(u)!==t&&i.id(u)!==null){o=!1;for(l=0,c=n.length;l<c;l++)if(f(i.id(u),i.id(n[l]))){o=!0;break}o||r(u)}}}if(s.localeCompare(e)!=0)return e}function k(t,n){var r=function(){};return r.prototype=new t,r.prototype.constructor=r,r.prototype.parent=t.prototype,r.prototype=e.extend(r.prototype,n),r}if(window.Select2!==t)return;var n,r,i,s,o,u;n={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(e){e=e.which?e.which:e;switch(e){case n.LEFT:case n.RIGHT:case n.UP:case n.DOWN:return!0}return!1},isControl:function(e){var t=e.which;switch(t){case n.SHIFT:case n.CTRL:case n.ALT:return!0}return e.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&e<=123}},o=function(){var e=1;return function(){return e++}}(),e(document).delegate("body","mousemove",function(t){e.data(document,"select2-lastpos",{x:t.pageX,y:t.pageY})}),e(document).ready(function(){e(document).delegate("body","mousedown touchend",function(n){var r=e(n.target).closest("div.select2-container").get(0),i;r?e(document).find("div.select2-container-active").each(function(){this!==r&&e(this).data("select2").blur()}):(r=e(n.target).closest("div.select2-drop").get(0),e(document).find("div.select2-drop-active").each(function(){this!==r&&e(this).data("select2").blur()})),r=e(n.target),i=r.attr("for"),"LABEL"===n.target.tagName&&i&&i.length>0&&(r=e("#"+i),r=r.data("select2"),r!==t&&(r.focus(),n.preventDefault()))})}),r=k(Object,{bind:function(e){var t=this;return function(){e.apply(t,arguments)}},init:function(n){var r,i,s=".select2-results";this.opts=n=this.prepareOpts(n),this.id=n.id,n.element.data("select2")!==t&&n.element.data("select2")!==null&&this.destroy(),this.enabled=!0,this.container=this.createContainer(),this.containerId="s2id_"+(n.element.attr("id")||"autogen"+o()),this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.body=v(function(){return n.element.closest("body")}),n.element.attr("class")!==t&&this.container.addClass(n.element.attr("class").replace(/validate\[[\S ]+] ?/,"")),this.container.css(T(n.containerCss)),this.container.addClass(T(n.containerCssClass)),this.opts.element.data("select2",this).hide().before(this.container),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),this.dropdown.addClass(T(n.dropdownCssClass)),this.dropdown.data("select2",this),this.results=r=this.container.find(s),this.search=i=this.container.find("input.select2-input"),i.attr("tabIndex",this.opts.element.attr("tabIndex")),this.resultsPage=0,this.context=null,this.initContainer(),this.initContainerWidth(),p(this.results),this.dropdown.delegate(s,"mousemove-filtered",this.bind(this.highlightUnderEvent)),m(80,this.results),this.dropdown.delegate(s,"scroll-debounced",this.bind(this.loadMoreIfNeeded)),e.fn.mousewheel&&r.mousewheel(function(e,t,n,i){var s=r.scrollTop(),o;i>0&&s-i<=0?(r.scrollTop(0),g(e)):i<0&&r.get(0).scrollHeight-r.scrollTop()+i<=r.height()&&(r.scrollTop(r.get(0).scrollHeight-r.height()),g(e))}),h(i),i.bind("keyup-change",this.bind(this.updateResults)),i.bind("focus",function(){i.addClass("select2-focused"),i.val()===" "&&i.val("")}),i.bind("blur",function(){i.removeClass("select2-focused")}),this.dropdown.delegate(s,"mouseup",this.bind(function(t){e(t.target).closest(".select2-result-selectable:not(.select2-disabled)").length>0?(this.highlightUnderEvent(t),this.selectHighlighted(t)):this.focusSearch(),g(t)})),this.dropdown.bind("click mouseup mousedown",function(e){e.stopPropagation()}),e.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),(n.element.is(":disabled")||n.element.is("[readonly='readonly']"))&&this.disable()},destroy:function(){var e=this.opts.element.data("select2");e!==t&&(e.container.remove(),e.dropdown.remove(),e.opts.element.removeData("select2").unbind(".select2").show())},prepareOpts:function(n){var r,i,s,o;r=n.element,r.get(0).tagName.toLowerCase()==="select"&&(this.select=i=n.element),i&&e.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in n)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),n=e.extend({},{populateResults:function(r,i,s){var o,u,a,f,l=this.opts.id,c=this;o=function(r,i,u){var a,f,h,p,d,v,m,g,y;for(a=0,f=r.length;a<f;a+=1)h=r[a],p=l(h)!==t,d=h.children&&h.children.length>0,v=e("<li></li>"),v.addClass("select2-results-dept-"+u),v.addClass("select2-result"),v.addClass(p?"select2-result-selectable":"select2-result-unselectable"),d&&v.addClass("select2-result-with-children"),v.addClass(c.opts.formatResultCssClass(h)),m=e("<div></div>"),m.addClass("select2-result-label"),y=n.formatResult(h,m,s),y!==t&&m.html(c.opts.escapeMarkup(y)),v.append(m),d&&(g=e("<ul></ul>"),g.addClass("select2-result-sub"),o(h.children,g,u+1),v.append(g)),v.data("select2-data",h),i.append(v)},o(i,r,0)}},e.fn.select2.defaults,n),typeof n.id!="function"&&(s=n.id,n.id=function(e){return e[s]}),i?(n.query=this.bind(function(n){var i={results:[],more:!1},s=n.term,o,u,a;a=function(e,t){var r;e.is("option")?n.matcher(s,e.text(),e)&&t.push({id:e.attr("value"),text:e.text(),element:e.get(),css:e.attr("class")}):e.is("optgroup")&&(r={text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")},e.children().each2(function(e,t){a(t,r.children)}),r.children.length>0&&t.push(r))},o=r.children(),this.getPlaceholder()!==t&&o.length>0&&(u=o[0],e(u).text()===""&&(o=o.not(u))),o.each2(function(e,t){a(t,i.results)}),n.callback(i)}),n.id=function(e){return e.id},n.formatResultCssClass=function(e){return e.css}):"query"in n||("ajax"in n?(o=n.element.data("ajax-url"),o&&o.length>0&&(n.ajax.url=o),n.query=w(n.ajax)):"data"in n?n.query=E(n.data):"tags"in n&&(n.query=S(n.tags),n.createSearchChoice=function(e){return{id:e,text:e}},n.initSelection=function(t,r){var i=[];e(l(t.val(),n.separator)).each(function(){var t=this,r=this,s=n.tags;e.isFunction(s)&&(s=s()),e(s).each(function(){if(f(this.id,t))return r=this.text,!1}),i.push({id:t,text:r})}),r(i)}));if(typeof n.query!="function")throw"query function not defined for Select2 "+n.element.attr("id");return n},monitorSource:function(){this.opts.element.bind("change.select2",this.bind(function(e){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()}))},triggerChange:function(t){t=t||{},t=e.extend({},t,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(t),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},enable:function(){if(this.enabled)return;this.enabled=!0,this.container.removeClass("select2-container-disabled")},disable:function(){if(!this.enabled)return;this.close(),this.enabled=!1,this.container.addClass("select2-container-disabled")},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t=this.container.offset(),n=this.container.outerHeight(),r=this.container.outerWidth(),i=this.dropdown.outerHeight(),s=e(window).scrollTop()+document.documentElement.clientHeight,o=t.top+n,u=t.left,a=o+i<=s,f=t.top-i>=this.body().scrollTop(),l=this.dropdown.hasClass("select2-drop-above"),c,h,p;this.body().css("position")!=="static"&&(c=this.body().offset(),o-=c.top,u-=c.left),l?(h=!0,!f&&a&&(h=!1)):(h=!1,!a&&f&&(h=!0)),h?(o=t.top-i,this.container.addClass("select2-drop-above"),this.dropdown.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")),p=e.extend({top:o,left:u,width:r},T(this.opts.dropdownCss)),this.dropdown.css(p)},shouldOpen:function(){var t;return this.opened()?!1:(t=e.Event("open"),this.opts.element.trigger(t),!t.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(window.setTimeout(this.bind(this.opening),1),!0):!1},opening:function(){var t=this.containerId,n=this.containerSelector,r="scroll."+t,i="resize."+t;this.container.parents().each(function(){e(this).bind(r,function(){var t=e(n);t.length==0&&e(this).unbind(r),t.select2("close")})}),e(window).bind(i,function(){var t=e(n);t.length==0&&e(window).unbind(i),t.select2("close")}),this.clearDropdownAlignmentPreference(),this.search.val()===" "&&this.search.val(""),this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.updateResults(!0),this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body()),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active"),this.ensureHighlightVisible(),this.focusSearch()},close:function(){if(!this.opened())return;var t=this;this.container.parents().each(function(){e(this).unbind("scroll."+t.containerId)}),e(window).unbind("resize."+this.containerId),this.clearDropdownAlignmentPreference(),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),this.clearSearch(),this.opts.element.trigger(e.Event("close"))},clearSearch:function(){},ensureHighlightVisible:function(){var t=this.results,n,r,i,s,o,u,a;r=this.highlight();if(r<0)return;if(r==0){t.scrollTop(0);return}n=t.find(".select2-result-selectable"),i=e(n[r]),s=i.offset().top+i.outerHeight(),r===n.length-1&&(a=t.find("li.select2-more-results"),a.length>0&&(s=a.offset().top+a.outerHeight())),o=t.offset().top+t.outerHeight(),s>o&&t.scrollTop(t.scrollTop()+(s-o)),u=i.offset().top-t.offset().top,u<0&&t.scrollTop(t.scrollTop()+u)},moveHighlight:function(t){var n=this.results.find(".select2-result-selectable"),r=this.highlight();while(r>-1&&r<n.length){r+=t;var i=e(n[r]);if(i.hasClass("select2-result-selectable")&&!i.hasClass("select2-disabled")){this.highlight(r);break}}},highlight:function(t){var n=this.results.find(".select2-result-selectable").not(".select2-disabled");if(arguments.length===0)return a(n.filter(".select2-highlighted")[0],n.get());t>=n.length&&(t=n.length-1),t<0&&(t=0),n.removeClass("select2-highlighted"),e(n[t]).addClass("select2-highlighted"),this.ensureHighlightVisible()},countSelectableResults:function(){return this.results.find(".select2-result-selectable").not(".select2-disabled").length},highlightUnderEvent:function(t){var n=e(t.target).closest(".select2-result-selectable");if(n.length>0&&!n.is(".select2-highlighted")){var r=this.results.find(".select2-result-selectable");this.highlight(r.index(n))}else n.length==0&&this.results.find(".select2-highlighted").removeClass("select2-highlighted")},loadMoreIfNeeded:function(){var e=this.results,t=e.find("li.select2-more-results"),n,r=-1,i=this.resultsPage+1,s=this,o=this.search.val(),u=this.context;if(t.length===0)return;n=t.offset().top-e.offset().top-e.height(),n<=0&&(t.addClass("select2-active"),this.opts.query({term:o,page:i,context:u,matcher:this.opts.matcher,callback:this.bind(function(n){if(!s.opened())return;s.opts.populateResults.call(this,e,n.results,{term:o,page:i,context:u}),n.more===!0?(t.detach().appendTo(e).text(s.opts.formatLoadMore(i+1)),window.setTimeout(function(){s.loadMoreIfNeeded()},10)):t.remove(),s.positionDropdown(),s.resultsPage=i})}))},tokenize:function(){},updateResults:function(n){function l(){i.scrollTop(0),r.removeClass("select2-active"),u.positionDropdown()}function c(e){i.html(u.opts.escapeMarkup(e)),l()}var r=this.search,i=this.results,s=this.opts,o,u=this,a;if(n!==!0&&(this.showSearchInput===!1||!this.opened()))return;r.addClass("select2-active");if(s.maximumSelectionSize>=1){o=this.data();if(e.isArray(o)&&o.length>=s.maximumSelectionSize&&x(s.formatSelectionTooBig,"formatSelectionTooBig")){c("<li class='select2-selection-limit'>"+s.formatSelectionTooBig(s.maximumSelectionSize)+"</li>");return}}if(r.val().length<s.minimumInputLength&&x(s.formatInputTooShort,"formatInputTooShort")){c("<li class='select2-no-results'>"+s.formatInputTooShort(r.val(),s.minimumInputLength)+"</li>");return}c("<li class='select2-searching'>"+s.formatSearching()+"</li>"),a=this.tokenize(),a!=t&&a!=null&&r.val(a),this.resultsPage=1,s.query({term:r.val(),page:this.resultsPage,context:null,matcher:s.matcher,callback:this.bind(function(o){var a;if(!this.opened())return;this.context=o.context===t?null:o.context,this.opts.createSearchChoice&&r.val()!==""&&(a=this.opts.createSearchChoice.call(null,r.val(),o.results),a!==t&&a!==null&&u.id(a)!==t&&u.id(a)!==null&&e(o.results).filter(function(){return f(u.id(this),u.id(a))}).length===0&&o.results.unshift(a));if(o.results.length===0&&x(s.formatNoMatches,"formatNoMatches")){c("<li class='select2-no-results'>"+s.formatNoMatches(r.val())+"</li>");return}i.empty(),u.opts.populateResults.call(this,i,o.results,{term:r.val(),page:this.resultsPage,context:null}),o.more===!0&&x(s.formatLoadMore,"formatLoadMore")&&(i.append("<li class='select2-more-results'>"+u.opts.escapeMarkup(s.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){u.loadMoreIfNeeded()},10)),this.postprocessResults(o,n),l()})})},cancel:function(){this.close()},blur:function(){this.close(),this.container.removeClass("select2-container-active"),this.dropdown.removeClass("select2-drop-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){this.search.show(),this.search.focus(),window.setTimeout(this.bind(function(){this.search.show(),this.search.focus(),this.search.val(this.search.val())}),10)},selectHighlighted:function(){var e=this.highlight(),t=this.results.find(".select2-highlighted").not(".select2-disabled"),n=t.closest(".select2-result-selectable").data("select2-data");n&&(t.addClass("select2-disabled"),this.highlight(e),this.onSelect(n))},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder},initContainerWidth:function(){function n(){var n,r,i,s,o;if(this.opts.width==="off")return null;if(this.opts.width==="element")return this.opts.element.outerWidth()===0?"auto":this.opts.element.outerWidth()+"px";if(this.opts.width==="copy"||this.opts.width==="resolve"){n=this.opts.element.attr("style");if(n!==t){r=n.split(";");for(s=0,o=r.length;s<o;s+=1){i=r[s].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/);if(i!==null&&i.length>=1)return i[1]}}return this.opts.width==="resolve"?(n=this.opts.element.css("width"),n.indexOf("%")>0?n:this.opts.element.outerWidth()===0?"auto":this.opts.element.outerWidth()+"px"):null}return e.isFunction(this.opts.width)?this.opts.width():this.opts.width}var r=n.call(this);r!==null&&this.container.attr("style","width: "+r)}}),i=k(r,{createContainer:function(){var t=e("<div></div>",{"class":"select2-container"}).html(["    <a href='#' onclick='return false;' class='select2-choice'>","   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>","   <div><b></b></div>","</a>","    <div class='select2-drop select2-offscreen'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return t},opening:function(){this.search.show(),this.parent.opening.apply(this,arguments),this.dropdown.removeClass("select2-offscreen")},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments),this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show()},focus:function(){this.close(),this.selection.focus()},isFocused:function(){return this.selection[0]===document.activeElement},cancel:function(){this.parent.cancel.apply(this,arguments),this.selection.focus()},initContainer:function(){var e,t=this.container,r=this.dropdown,i=!1;this.selection=e=t.find(".select2-choice"),this.search.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===n.PAGE_UP||e.which===n.PAGE_DOWN){g(e);return}if(this.opened())switch(e.which){case n.UP:case n.DOWN:this.moveHighlight(e.which===n.UP?-1:1),g(e);return;case n.TAB:case n.ENTER:this.selectHighlighted(),g(e);return;case n.ESC:this.cancel(e),g(e);return}else{if(e.which===n.TAB||n.isControl(e)||n.isFunctionKey(e)||e.which===n.ESC)return;if(this.opts.openOnEnter===!1&&e.which===n.ENTER)return;this.open();if(e.which===n.ENTER)return}})),this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex","-1")})),this.search.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active"),window.setTimeout(this.bind(function(){this.selection.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)})),e.bind("mousedown",this.bind(function(e){i=!0,this.opened()?(this.close(),this.selection.focus()):this.enabled&&this.open(),i=!1})),r.bind("mousedown",this.bind(function(){this.search.focus()})),e.bind("focus",this.bind(function(){this.container.addClass("select2-container-active"),this.search.attr("tabIndex","-1")})),e.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active"),window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)})),e.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===n.PAGE_UP||e.which===n.PAGE_DOWN){g(e);return}if(e.which===n.TAB||n.isControl(e)||n.isFunctionKey(e)||e.which===n.ESC)return;if(this.opts.openOnEnter===!1&&e.which===n.ENTER)return;if(e.which==n.DELETE){this.opts.allowClear&&this.clear();return}this.open();if(e.which===n.ENTER){g(e);return}if(e.which<48){g(e);return}var t=String.fromCharCode(e.which).toLowerCase();e.shiftKey&&(t=t.toUpperCase()),this.search.focus(),this.search.val(t),g(e)})),e.delegate("abbr","mousedown",this.bind(function(e){if(!this.enabled)return;this.clear(),g(e),this.close(),this.triggerChange(),this.selection.focus()})),this.setPlaceholder(),this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active")}))},clear:function(){this.opts.element.val(""),this.selection.find("span").empty(),this.selection.removeData("select2-data"),this.setPlaceholder()},initSelection:function(){var e;if(this.opts.element.val()==="")this.close(),this.setPlaceholder();else{var n=this;this.opts.initSelection.call(null,this.opts.element,function(e){e!==t&&e!==null&&(n.updateSelection(e),n.close(),n.setPlaceholder())})}},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments);return t.element.get(0).tagName.toLowerCase()==="select"&&(t.initSelection=function(t,n){var r=t.find(":selected");e.isFunction(n)&&n({id:r.attr("value"),text:r.text()})}),t},setPlaceholder:function(){var e=this.getPlaceholder();if(this.opts.element.val()===""&&e!==t){if(this.select&&this.select.find("option:first").text()!=="")return;this.selection.find("span").html(this.opts.escapeMarkup(e)),this.selection.addClass("select2-default"),this.selection.find("abbr").hide()}},postprocessResults:function(t,n){var r=0,i=this,s=!0;this.results.find(".select2-result-selectable").each2(function(e,t){if(f(i.id(t.data("select2-data")),i.opts.element.val()))return r=e,!1}),this.highlight(r),n===!0&&(s=this.showSearchInput=N(t.results)>=this.opts.minimumResultsForSearch,this.dropdown.find(".select2-search")[s?"removeClass":"addClass"]("select2-search-hidden"),e(this.dropdown,this.container)[s?"addClass":"removeClass"]("select2-with-searchbox"))},onSelect:function(e){var t=this.opts.element.val();this.opts.element.val(this.id(e)),this.updateSelection(e),this.close(),this.selection.focus(),f(t,this.id(e))||this.triggerChange()},updateSelection:function(e){var n=this.selection.find("span"),r;this.selection.data("select2-data",e),n.empty(),r=this.opts.formatSelection(e,n),r!==t&&n.append(this.opts.escapeMarkup(r)),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==t&&this.selection.find("abbr").show()},val:function(){var e,n=null,r=this;if(arguments.length===0)return this.opts.element.val();e=arguments[0];if(this.select)this.select.val(e).find(":selected").each2(function(e,t){return n={id:t.attr("value"),text:t.text()},!1}),this.updateSelection(n),this.setPlaceholder();else{if(this.opts.initSelection===t)throw new Error("cannot call val() if initSelection() is not defined");if(!e){this.clear();return}this.opts.element.val(e),this.opts.initSelection(this.opts.element,function(e){r.opts.element.val(e?r.id(e):""),r.updateSelection(e),r.setPlaceholder()})}},clearSearch:function(){this.search.val("")},data:function(e){var n;if(arguments.length===0)return n=this.selection.data("select2-data"),n==t&&(n=null),n;!e||e===""?this.clear():(this.opts.element.val(e?this.id(e):""),this.updateSelection(e))}}),s=k(r,{createContainer:function(){var t=e("<div></div>",{"class":"select2-container select2-container-multi"}).html(["    <ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi' style='display:none;'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return t},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments);return t.element.get(0).tagName.toLowerCase()==="select"&&(t.initSelection=function(t,n){var r=[];t.find(":selected").each2(function(e,t){r.push({id:t.attr("value"),text:t.text()})}),e.isFunction(n)&&n(r)}),t},initContainer:function(){var t=".select2-choices",r;this.searchContainer=this.container.find(".select2-search-field"),this.selection=r=this.container.find(t),this.search.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===n.BACKSPACE&&this.search.val()===""){this.close();var t,i=r.find(".select2-search-choice-focus");if(i.length>0){this.unselect(i.first()),this.search.width(10),g(e);return}t=r.find(".select2-search-choice"),t.length>0&&t.last().addClass("select2-search-choice-focus")}else r.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");if(this.opened())switch(e.which){case n.UP:case n.DOWN:this.moveHighlight(e.which===n.UP?-1:1),g(e);return;case n.ENTER:case n.TAB:this.selectHighlighted(),g(e);return;case n.ESC:this.cancel(e),g(e);return}if(e.which===n.TAB||n.isControl(e)||n.isFunctionKey(e)||e.which===n.BACKSPACE||e.which===n.ESC)return;if(this.opts.openOnEnter===!1&&e.which===n.ENTER)return;this.open(),(e.which===n.PAGE_UP||e.which===n.PAGE_DOWN)&&g(e)})),this.search.bind("keyup",this.bind(this.resizeSearch)),this.search.bind("blur",this.bind(function(e){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.clearSearch(),e.stopImmediatePropagation()})),this.container.delegate(t,"mousedown",this.bind(function(t){if(!this.enabled)return;if(e(t.target).closest(".select2-search-choice").length>0)return;this.clearPlaceholder(),this.open(),this.focusSearch(),t.preventDefault()})),this.container.delegate(t,"focus",this.bind(function(){if(!this.enabled)return;this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder()})),this.clearSearch()},enable:function(){if(this.enabled)return;this.parent.enable.apply(this,arguments),this.search.removeAttr("disabled")},disable:function(){if(!this.enabled)return;this.parent.disable.apply(this,arguments),this.search.attr("disabled",!0)},initSelection:function(){var e;this.opts.element.val()===""&&(this.updateSelection([]),this.close(),this.clearSearch());if(this.select||this.opts.element.val()!==""){var n=this;this.opts.initSelection.call(null,this.opts.element,function(e){e!==t&&e!==null&&(n.updateSelection(e),n.close(),n.clearSearch())})}},clearSearch:function(){var e=this.getPlaceholder();e!==t&&this.getVal().length===0&&this.search.hasClass("select2-focused")===!1?(this.search.val(e).addClass("select2-default"),this.resizeSearch()):this.search.val(" ").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")?this.search.val("").removeClass("select2-default"):this.search.val()===" "&&this.search.val("")},opening:function(){this.parent.opening.apply(this,arguments),this.clearPlaceholder(),this.resizeSearch(),this.focusSearch()},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(t){var n=[],r=[],i=this;e(t).each(function(){a(i.id(this),n)<0&&(n.push(i.id(this)),r.push(this))}),t=r,this.selection.find(".select2-search-choice").remove(),e(t).each(function(){i.addSelectedChoice(this)}),i.postprocessResults()},tokenize:function(){var e=this.search.val();e=this.opts.tokenizer(e,this.data(),this.bind(this.onSelect),this.opts),e!=null&&e!=t&&(this.search.val(e),e.length>0&&this.open())},onSelect:function(e){this.addSelectedChoice(e),this.select&&this.postprocessResults(),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.positionDropdown()):this.close(),this.triggerChange({added:e}),this.focusSearch()},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(t){var n=e("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),r=this.id(t),i=this.getVal(),s;s=this.opts.formatSelection(t,n),n.find("div").replaceWith("<div>"+this.opts.escapeMarkup(s)+"</div>"),n.find(".select2-search-choice-close").bind("mousedown",g).bind("click dblclick",this.bind(function(t){if(!this.enabled)return;e(t.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(e(t.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),this.close(),this.focusSearch()})).dequeue(),g(t)})).bind("focus",this.bind(function(){if(!this.enabled)return;this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active")})),n.data("select2-data",t),n.insertBefore(this.searchContainer),i.push(r),this.setVal(i)},unselect:function(e){var t=this.getVal(),n,r;e=e.closest(".select2-search-choice");if(e.length===0)throw"Invalid argument: "+e+". Must be .select2-search-choice";n=e.data("select2-data"),r=a(this.id(n),t),r>=0&&(t.splice(r,1),this.setVal(t),this.select&&this.postprocessResults()),e.remove(),this.triggerChange({removed:n})},postprocessResults:function(){var e=this.getVal(),t=this.results.find(".select2-result-selectable"),n=this.results.find(".select2-result-with-children"),r=this;t.each2(function(t,n){var i=r.id(n.data("select2-data"));a(i,e)>=0?n.addClass("select2-disabled").removeClass("select2-result-selectable"):n.removeClass("select2-disabled").addClass("select2-result-selectable")}),n.each2(function(e,t){t.find(".select2-result-selectable").length==0?t.addClass("select2-disabled"):t.removeClass("select2-disabled")}),t.each2(function(e,t){if(!t.hasClass("select2-disabled")&&t.hasClass("select2-result-selectable"))return r.highlight(0),!1})},resizeSearch:function(){var e,t,n,r,i,s=c(this.search);e=y(this.search)+10,t=this.search.offset().left,n=this.selection.width(),r=this.selection.offset().left,i=n-(t-r)-s,i<e&&(i=n-s),i<40&&(i=n-s),this.search.width(i)},getVal:function(){var e;return this.select?(e=this.select.val(),e===null?[]:e):(e=this.opts.element.val(),l(e,this.opts.separator))},setVal:function(t){var n;this.select?this.select.val(t):(n=[],e(t).each(function(){a(this,n)<0&&n.push(this)}),this.opts.element.val(n.length===0?"":n.join(this.opts.separator)))},val:function(
){var n,r=[],i=this;if(arguments.length===0)return this.getVal();n=arguments[0];if(!n){this.opts.element.val(""),this.updateSelection([]),this.clearSearch();return}this.setVal(n);if(this.select)this.select.find(":selected").each(function(){r.push({id:e(this).attr("value"),text:e(this).text()})}),this.updateSelection(r);else{if(this.opts.initSelection===t)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(t){var n=e(t).map(i.id);i.setVal(n),i.updateSelection(t),i.clearSearch()})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var t=[],n=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){t.push(n.opts.id(e(this).data("select2-data")))}),this.setVal(t),this.triggerChange()},data:function(t){var n=this,r;if(arguments.length===0)return this.selection.find(".select2-search-choice").map(function(){return e(this).data("select2-data")}).get();t||(t=[]),r=e.map(t,function(e){return n.opts.id(e)}),this.setVal(r),this.updateSelection(t),this.clearSearch()}}),e.fn.select2=function(){var n=Array.prototype.slice.call(arguments,0),r,o,u,f,l=["val","destroy","opened","open","close","focus","isFocused","container","onSortStart","onSortEnd","enable","disable","positionDropdown","data"];return this.each(function(){if(n.length===0||typeof n[0]=="object")r=n.length===0?{}:e.extend({},n[0]),r.element=e(this),r.element.get(0).tagName.toLowerCase()==="select"?f=r.element.attr("multiple"):(f=r.multiple||!1,"tags"in r&&(r.multiple=f=!0)),o=f?new s:new i,o.init(r);else{if(typeof n[0]!="string")throw"Invalid arguments to select2 plugin: "+n;if(a(n[0],l)<0)throw"Unknown method: "+n[0];u=t,o=e(this).data("select2");if(o===t)return;n[0]==="container"?u=o.container:u=o[n[0]].apply(o,n.slice(1));if(u!==t)return!1}}),u===t?this:u},e.fn.select2.defaults={width:"copy",closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(e,t,n){var r=[];return b(e.text,n.term,r),r.join("")},formatSelection:function(e,n){return e?e.text:t},formatResultCssClass:function(e){return t},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(e,t){return"Please enter "+(t-e.length)+" more characters"},formatSelectionTooBig:function(e){return"You can only select "+e+" item"+(e==1?"":"s")},formatLoadMore:function(e){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumSelectionSize:0,id:function(e){return e.id},matcher:function(e,t){return t.toUpperCase().indexOf(e.toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:C,escapeMarkup:function(e){return e&&typeof e=="string"?e.replace(/&/g,"&amp;"):e},blurOnChange:!1},window.Select2={query:{ajax:w,local:E,tags:S},util:{debounce:d,markMatch:b},"class":{"abstract":r,single:i,multi:s}}}(jQuery);