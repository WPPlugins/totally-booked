/**
 * Totally Booked Admin Javascript.
 */
/*!
 * $ Templates Plugin 1.1
 * https://github.com/KanbanSolutions/jquery-tmpl
 * Requires $ 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(e,t){function h(t,n,r,o){var u={data:o||o===0||o===false?o:n?n.data:{},_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:w,nest:E,wrap:S,html:x,update:T};if(t){e.extend(u,t,{nodes:[],parent:n})}if(r){u.tmpl=r;u._ctnt=u._ctnt||e.isFunction(u.tmpl)&&u.tmpl(e,u)||r;u.key=++a;(l.length?s:i)[a]=u}return u}function p(t,n,i){var s,o=i?e.map(i,function(e){return typeof e==="string"?t.key?e.replace(c.template_anotate,"$1 "+r+'="'+t.key+'" $2'):e:p(e,t,e._ctnt)}):t;if(n){return o}o=o.join("");o.replace(c.text_only_template,function(t,n,r,i){s=e(r).get();b(s);if(n){s=d(n).concat(s)}if(i){s=s.concat(d(i))}});return s?s:d(o)}function d(t){var n=document.createElement("div");n.innerHTML=t;return e.makeArray(n.childNodes)}function v(t){var n=function(n,r,i,s,o,u,a){if(!i){return"');__.push('"}var f=e.tmpl.tag[i],l,h,p;if(!f){console.group("Exception");console.error(t);console.error("Unknown tag: ",i);console.error(n);console.groupEnd("Exception");return"');__.push('"}l=f._default||[];if(u&&!c.last_word.test(o)){o+=u;u=""}if(o){o=g(o);a=a?","+g(a)+")":u?")":"";h=u?o.indexOf(".")>-1?o+g(u):"("+o+").call($item"+a:o;p=u?h:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"}else{p=h=l.$1||"null"}s=g(s);return"');"+f[r?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(p).split("$1").join(h).split("$2").join(s||l.$2||"")+"__.push('"};var r=function(){if(e.tmpl.tag[arguments[2]]){console.group("Depreciated");console.info(t);console.info("Markup has old style indicators, use {% %} instead of {{ }}");console.info(arguments[0]);console.groupEnd("Depreciated");return n.apply(this,arguments)}else{return"');__.push('{{"+arguments[2]+"}}');__.push('"}};var i="var $=$,call,__=[],$data=$item.data; with($data){__.push('";var s=e.trim(t);s=s.replace(c.sq_escape,"\\$1");s=s.replace(c.nl_strip," ");s=s.replace(c.shortcut_replace,"{%= $1%}");s=s.replace(c.lang_parse,n);s=s.replace(c.old_lang_parse,r);i+=s;i+="');}return __;";return new Function("$","$item",i)}function m(t,n){t._wrap=p(t,true,e.isArray(n)?n:[c.html_expr.test(n)?n:e(n).html()]).join("")}function g(e){return e?e.replace(c.sq_unescape,"'").replace(c.dq_unescape,"\\"):null}function y(e){var t=document.createElement("div");t.appendChild(e.cloneNode(true));return t.innerHTML}function b(t){function v(t){function v(e){e=e+n;p=l[e]=l[e]||h(p,i[p.parent.key+n]||p.parent)}var o,u=t,c,p,d;if(d=t.getAttribute(r)){while(u.parentNode&&(u=u.parentNode).nodeType===1&&!(o=u.getAttribute(r))){}if(o!==d){u=u.parentNode?u.nodeType===11?0:u.getAttribute(r)||0:0;if(!(p=i[d])){p=s[d];p=h(p,i[u]||s[u]);p.key=++a;i[a]=p}if(f){v(d)}}t.removeAttribute(r)}else if(f&&(p=e.data(t,"tmplItem"))){v(p.key);i[p.key]=p;u=e.data(t.parentNode,"tmplItem");u=u?u.key:0}if(p){c=p;while(c&&c.key!=u){c.nodes.push(t);c=c.parent}delete p._ctnt;delete p._wrap;e.data(t,"tmplItem",p)}}var n="_"+f,o,u,l={},c,p,d;for(c=0,p=t.length;c<p;c++){if((o=t[c]).nodeType!==1){continue}u=o.getElementsByTagName("*");for(d=u.length-1;d>=0;d--){v(u[d])}v(o)}}function w(e,t,n,r){if(!e){return l.pop()}l.push({_:e,tmpl:t,item:this,data:n,options:r})}function E(t,n,r){return e.tmpl(e.template(t),n,r,this)}function S(t,n){var r=t.options||{};r.wrapped=n;return e.tmpl(e.template(t.tmpl),t.data,r,t.item)}function x(t,n){var r=this._wrap;return e.map(e(e.isArray(r)?r.join(""):r).filter(t||"*"),function(e){return n?e.innerText||e.textContent:e.outerHTML||y(e)})}function T(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]);e(t).remove()}var n=e.fn.domManip,r="_tmplitem",i={},s={},o,u={key:0,data:{}},a=0,f=0,l=[];var c={sq_escape:/([\\'])/g,sq_unescape:/\\'/g,dq_unescape:/\\\\/g,nl_strip:/[\r\t\n]/g,shortcut_replace:/\$\{([^\}]*)\}/g,lang_parse:/\{\%(\/?)(\w+|.)(?:\(((?:[^\%]|\%(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\%]|\%(?!\}))*?)\))?\s*\%\}/g,old_lang_parse:/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,template_anotate:/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,text_only_template:/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,html_expr:/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! |\{\%! /,last_word:/\w$/};e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(r){var s=[],u=e(r),a,l,c,h,p=this.length===1&&this[0].parentNode;o=i||{};if(p&&p.nodeType===11&&p.childNodes.length===1&&u.length===1){u[n](this[0]);s=this}else{for(l=0,c=u.length;l<c;l++){f=l;a=(l>0?this.clone(true):this).get();e(u[l])[n](a);s=s.concat(a)}f=0;s=this.pushStack(s,t,u.selector)}h=o;o=null;e.tmpl.complete(h);return s}});e.fn.extend({tmpl:function(t,n,r){var i=e.tmpl(this[0],t,n,r);return i},tmplItem:function(){var t=e.tmplItem(this[0]);return t},template:function(t){var n=e.template(t,this[0]);return n},domManip:function(t,r,s,u){if(t[0]&&e.isArray(t[0])){var a=e.makeArray(arguments),l=t[0],c=l.length,h=0,p;while(h<c&&!(p=e.data(l[h++],"tmplItem"))){}if(p&&f){a[2]=function(t){e.tmpl.afterManip(this,t,s)}}n.apply(this,a)}else{n.apply(this,arguments)}f=0;if(!o){e.tmpl.complete(i)}return this}});e.extend({tmpl:function(t,n,r,o){var a,f=!o;if(f){o=u;t=e.template[t]||e.template(null,t);s={}}else if(!t){t=o.tmpl;i[o.key]=o;o.nodes=[];if(o.wrapped){m(o,o.wrapped)}return e(p(o,null,o.tmpl(e,o)))}if(!t){return[]}if(typeof n==="function"){n=n.call(o||{})}if(r&&r.wrapped){m(r,r.wrapped)}a=e.isArray(n)?e.map(n,function(e){return e?h(r,o,t,e):null}):[h(r,o,t,n)];return f?e(p(o,null,a)):a},tmplItem:function(t){var n;if(t instanceof e){t=t[0]}while(t&&t.nodeType===1&&!(n=e.data(t,"tmplItem"))&&(t=t.parentNode)){}return n||u},template:function(t,n){if(n){if(typeof n==="string"){n=v(n)}else if(n instanceof e){n=n[0]||{}}if(n.nodeType){n=e.data(n,"tmpl")||e.data(n,"tmpl",v(n.innerHTML))}return typeof t==="string"?e.template[t]=n:n}return t?typeof t!=="string"?e.template(null,t):e.template[t]||e.template(null,t):null},encode:function(e){return(""+e).split("<").join("<").split(">").join(">").split('"').join("&#34;").split("'").join("&#39;")}});e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{open:"}else{"},elif:{open:"}else if(($notnull_1) && $1a){"},elseif:{open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(e){i={}},afterManip:function(n,r,i){var s=r.nodeType===11?e.makeArray(r.childNodes):r.nodeType===1?[r]:[];i.call(n,r);b(s);f++}})})(jQuery);

jQuery( document ).ready( function($){

    //Generate A Named Template For The Add New Link Section.
    $.template( "add_link_template",
    '<tr class="reader_link_row">' +
        '<td class="url"><input class="reader_link_url" type="text" name="reader_links[${count}][url]" value="${url}" /></td>' +
        '<td class="text"><input class="reader_link_text" type="text" name="reader_links[${count}][text]" value="${text}" /></td>' +
        '<td class="_preview"><p class="preview"><a target="_blank" href="${url}">${text}</a></p></a></td>' +
        '<td class="actions"><a class="remove_link_button" href="javascript:void(0)">Remove Link</a></td>' +
    '</tr>' );

    //Generic External Link Template.
    $.template( 'external_link', '<a target="_blank" href="${url}">${text}</a>' );


    var HandleLinkPreview = function(){

        $( '.reader_link_url, .reader_link_text').on( 'keyup', function(){

            var Row = $( this).parent().parent( 'tr' );

            if( Row.length > 0 ){

                var Preview = $( Row ).find( '.preview' );

                var data = {
                    'url'  : $( Row ).find( '.reader_link_url' ).val(),
                    'text' : $( Row ).find( '.reader_link_text').val()
                }

                $( Preview ).empty();

                $.tmpl( "external_link", data ).appendTo( $( Preview) );

            }

        });

    }


    if( reader_links.length > 0  ){

        for( var i = 0; i < reader_links.length; i++ ){

            var tmplData = {
                'count' : i,
                'url' : reader_links[i].url,
                'text' : reader_links[i].text
            }

            //Generate The HTML
            $.tmpl( "add_link_template", tmplData ).insertBefore( "#add_new_link_row" );

        }

        //Trigger The Link Preview Functionality.
        HandleLinkPreview();

    }

    //Handle The Click Action.
    $( '#add_link_button' ).on( 'click', function(){

        var count = parseInt( $( '#add_new_link_row').data( 'count' ) );

        var tmplData = {
            'count' : count,
            'url' : $( '#new_link_url').val(),
            'text' : $( '#new_link_text').val()
        }

        //Generate The HTML
        $.tmpl( "add_link_template", tmplData ).insertBefore( "#add_new_link_row" );

        //Empty The Vals.
        $( '#new_link_url').val( '' );
        $( '#new_link_text').val( '' );



        //Up The Count By 1
        $( '#add_new_link_row').data( 'count', count + 1 );

        //Handle The Link Preview Functionality
        HandleLinkPreview();

    })

    //Handle The Remove Functionality.
    $( 'body').on( 'click', '.remove_link_button', function(){
        $( this ).parent().parent( 'tr' ).remove();
    });

})