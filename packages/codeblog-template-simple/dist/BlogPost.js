!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("codeblog"),require("classnames"),require("moment")):"function"==typeof define&&define.amd?define(["codeblog","classnames","moment"],t):"object"==typeof exports?exports["codeblog-template-simple"]=t(require("codeblog"),require("classnames"),require("moment")):e["codeblog-template-simple"]=t(e.codeblog,e.classnames,e.moment)}(window,function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(0),l=n(3),i=n.n(l),u=function(e){var t,n=e.publishedAt,o=e.status;e.environment;return"published"===o&&n?React.createElement("span",{datetime:n.toISOString(),itemProp:"datePublished",className:"Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--published"},(t=n,i()(t).fromNow())):"published"===o?null:"draft"===o?React.createElement("span",{className:"Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--draft"},"Draft"):React.createElement("span",{className:"Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--hidden"},"Hidden")},s=function(e){var t=e.environment,n=e.post,o=(e.pageType,e.children);return React.createElement("header",null,React.createElement("div",{className:"BlogPost-Subtitle"},React.createElement(u,{publishedAt:n.publishedAt,status:n.status,environment:t}),React.createElement("meta",{itemProp:"author.alternateName",content:n.author.subdomain}),React.createElement("meta",{itemProp:"author.identifier",content:n.author.subdomain}),n.author.title&&React.createElement("meta",{itemProp:"author.name",content:n.author.title})),o)};n.d(t,"BlogPost",function(){return m});var c=function(e){var t=e.pageType,n=e.post,o=e.children,l=e.environment;return React.createElement("article",{itemScope:!0,itemProp:"index"===t?"blogPosts":"blogPost",itemType:"http://schema.org/BlogPosting",id:n.slug,itemID:n.slug,className:r()("BlogPost",{"BlogPost--index":"index"===t,"BlogPost--show":"show"===t,"BlogPost--preview":"preview"===t})},React.createElement(a.BlogPostSEOTags,{post:n}),React.createElement(s,{environment:l,post:n,pageType:t},React.createElement("h1",{itemProp:"headline",className:"BlogPost-Title"},React.createElement("a",{href:n.url},n.title))),React.createElement("div",{className:"BlogPost-Body"},o))},m=function(e){return React.createElement(a.Codeblog,null,function(t){var n=t.pageType,o=t.environment,r=t.post;return React.createElement(c,{pageType:n,environment:o,post:e.post||r},e.children)})};t.default=m},function(e,t){e.exports=n}])});