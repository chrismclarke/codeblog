!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("codeblog"),require("classnames"),require("moment")):"function"==typeof define&&define.amd?define(["codeblog","classnames","moment"],t):"object"==typeof exports?exports["codeblog-template-simple"]=t(require("codeblog"),require("classnames"),require("moment")):e["codeblog-template-simple"]=t(e.codeblog,e.classnames,e.moment)}(window,function(e,t,n){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(0),l=n(3),i=n.n(l),c=function(e){var t,n=e.publishedAt,a=e.status;e.environment;return"published"===a&&n?React.createElement("span",{datetime:n.toISOString(),itemProp:"datePublished",className:"Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--published"},(t=n,i()(t).fromNow())):"published"===a?null:"draft"===a?React.createElement("span",{className:"Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--draft"},"Draft"):React.createElement("span",{className:"Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--hidden"},"Hidden")},s=function(e){var t=e.environment,n=e.post,a=(e.pageType,e.children);return React.createElement("header",null,React.createElement("div",{className:"BlogPost-Subtitle"},React.createElement(c,{publishedAt:n.publishedAt,status:n.status,environment:t}),React.createElement("meta",{itemProp:"author.alternateName",content:n.author.subdomain}),React.createElement("meta",{itemProp:"author.identifier",content:n.author.subdomain}),n.author.title&&React.createElement("meta",{itemProp:"author.name",content:n.author.title})),a)};n.d(t,"BlogPost",function(){return m});var u=function(e){var t=e.pageType,n=e.post,a=e.children,l=e.environment;return React.createElement("article",{itemScope:!0,itemProp:"index"===t?"blogPosts":"blogPost",itemType:"http://schema.org/BlogPosting",id:n.slug,itemID:n.slug,className:o()("BlogPost",{"BlogPost--index":"index"===t,"BlogPost--show":"show"===t,"BlogPost--preview":"preview"===t})},React.createElement(r.BlogPostSEOTags,{post:n}),React.createElement(s,{environment:l,post:n,pageType:t},React.createElement("h1",{itemProp:"headline",className:"BlogPost-Title"},React.createElement("a",{href:n.url},n.title))),React.createElement("div",{className:"BlogPost-Body"},a))},m=function(e){return React.createElement(r.Codeblog,null,function(t){var n=t.pageType,a=t.environment,o=t.post;return React.createElement(u,{pageType:n,environment:a,post:e.post||o},e.children)})};t.default=m},function(e,t){e.exports=n},,function(e,t,n){"use strict";n.r(t),n.d(t,"Blog",function(){return r});var a=n(0),o=n(2),r=function(e){var t=e.blog,n=e.children,r=e.pageType;return React.createElement("div",{itemScope:!0,itemID:String(t.id),itemType:"http://schema.org/Blog",className:"Blog"},React.createElement(a.BlogSEOTags,{blog:t}),React.createElement("div",{className:"BlogHeader"},t.photo_url?React.createElement("img",{src:t.photo_url,width:42,height:42,className:"BlogHeader-image"}):React.createElement("div",{className:"BlogHeader-image BlogHeader-image--fallback"}),React.createElement("div",{itemProp:"headline",className:"BlogTitle"},t.title)),"index"===r?React.createElement("div",{className:"BlogIndex"},React.createElement("div",{className:"BlogPost-List"},n)):React.createElement(o.BlogPost,null,n))};t.default=r}])});