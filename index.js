const crypto=require('crypto');
function genId(n=16){return crypto.randomBytes(n).toString('hex');}
function debounce(fn,ms=300){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);}}
module.exports={genId,debounce};
