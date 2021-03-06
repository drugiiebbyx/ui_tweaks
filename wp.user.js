'use strict';

// ==UserScript==
// @name        wp_tweaks
// @namespace   esh
// @description clean and compact wp chat
// @include     *.workplace.com/chat*
// @grant none
// @version     0.7
// ==/UserScript==

const removeScrolls = () => {document.body.style.overflow = "hidden";};

const tweakCss = () =>
{
  let rule = '';
  // inline image
  rule += '.img {max-width: 120px !important; max-height: 120px !important}';
  rule += '._mxz._4tsk > div:nth-of-type(2) {max-width: 120px !important; max-height: 120px !important}';

  rule += '._52mr {max-width: 100% !important}'; // own message
  rule += '.__i_ {font-size: 14px !important}'; // font size
  rule += '._hh7 {padding: 2px 4px !important}'; // text density
  rule += '.preview {display: none !important}'; // reaction counter

  // left col
  rule += '._1ht6 {font-size: 11px !important}';
  rule += '._1htf {font-size: 9px !important}';

  const css = document.createElement('style');

  css.type = 'text/css';
  css.appendChild(document.createTextNode(rule));
  document.getElementsByTagName("head")[0].appendChild(css);
};

const cleanLinks = () =>
{
  for (let a of document.getElementsByTagName('a'))
  {
    if (a.target === '_blank')
    {
      a.href = a.text;
    }
  }
};

window.onload = tweakCss;
window.setInterval(cleanLinks, 2000);
removeScrolls();
