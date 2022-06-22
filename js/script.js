/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-6-04-HTML/sw.js", {
    scope: "/ICS2O-UNIT-6-04-HTML/",
  })
}

/**
 * Input.
 */

 window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const aBase = params.get('a')
  const bBase = params.get('b')
  const height = params.get('h')
  console.log(aBase)

  // process
  const area = ((aBase + bBase) / 2) * height
  const dimensions = "<ul>\n<li>a base = " + aBase + "</li>\n<li>b base = " + bBase + "</li>\n<li>height = " + height + "</li>\n</ul>"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm²'
}

