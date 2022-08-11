// Extract the domain name from a URL
//
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  let start;
  if (url.indexOf('www') != -1) {
    start = url.indexOf('www') + 4
  }
  else if (url.indexOf('//') != -1) {
    start = url.indexOf('//') + 2
  }
  else {
    start = 0;
  }
  let ans = url.slice(start, url.indexOf('.', start + 1));
  return ans;
}
