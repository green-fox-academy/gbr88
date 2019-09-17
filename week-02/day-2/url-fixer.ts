'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let fixit: RegExp  = /bots/gi;
let fixed: string = 'odds';
let missing: string = ':';

console.log(url.slice(0, 5) + missing + url.slice(5,).replace(fixit, fixed));