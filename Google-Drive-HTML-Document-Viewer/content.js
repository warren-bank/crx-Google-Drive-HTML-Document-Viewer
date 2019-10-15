const payload = function() {
  // URL restrictions:
  if (window.location.hostname.toLowerCase() !== 'drive.google.com') return

  // run once
  if (window.GoogleDriveHTMLDocumentViewer) return

  // CSP nonce is required
  const script = document.querySelector('script[nonce]')
  if (!script) return

  const nonce  = script.nonce

  const add_nonce = (html) => html.replace(/(<script\b)/g, `$1 nonce="${nonce}" `)

  const show_html = function() {
    if (!nonce) return

    const el = document.querySelector('[role="document"][aria-label$=".html"] > pre')
    if (!el) return

    const isHidden = (el.offsetParent === null)
    if (isHidden) return

    const html  = el.innerText
    const title = el.parentElement.getAttribute('aria-label')

    const win   = window.open('', '_blank')
    win.document.open()
    win.document.write(add_nonce(html))
    win.document.close()
    win.document.title = title
  }

  window.GoogleDriveHTMLDocumentViewer = {show_html}
}

const run_payload = function() {
  if (window.GoogleDriveHTMLDocumentViewer) {window.GoogleDriveHTMLDocumentViewer.show_html()}
}

const get_hash_code = function(str) {
  let hash, i, char
  hash = 0
  if (str.length == 0) {
    return hash
  }
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i)
    hash = ((hash<<5)-hash)+char
    hash = hash & hash  // Convert to 32bit integer
  }
  return Math.abs(hash)
}

const inject_function = function(_function) {
  let inline, script, head

  inline = _function.toString()
  inline = '(' + inline + ')()' + '; //# sourceURL=crx_extension.' + get_hash_code(inline)
  inline = document.createTextNode(inline)

  script = document.createElement('script')
  script.appendChild(inline)

  head = document.head
  head.appendChild(script)
}

inject_function(payload)
