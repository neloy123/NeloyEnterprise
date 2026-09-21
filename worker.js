const REPO_BASE = "https://raw.githubusercontent.com/neloy123/NeloyEnterprise/main";

function contentType(pathname) {
  if (pathname.endsWith(".html")) return "text/html; charset=UTF-8";
  if (pathname.endsWith(".js")) return "application/javascript; charset=UTF-8";
  if (pathname.endsWith(".css")) return "text/css; charset=UTF-8";
  if (pathname.endsWith(".json")) return "application/json; charset=UTF-8";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "image/jpeg";
  if (pathname.endsWith(".webp")) return "image/webp";
  return null;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === "/" || pathname === "") pathname = "/index.html";

    const upstream = await fetch(REPO_BASE + pathname, {
      cf: { cacheTtl: 60, cacheEverything: true }
    });

    if (!upstream.ok) {
      return new Response("Not found: " + pathname, {
        status: upstream.status,
        headers: { "content-type": "text/plain; charset=UTF-8" }
      });
    }

    const headers = new Headers(upstream.headers);
    const type = contentType(pathname);
    if (type) headers.set("content-type", type);
    headers.set("cache-control", "public, max-age=60");

    return new Response(upstream.body, {
      status: upstream.status,
      headers
    });
  }
};
