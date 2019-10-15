### [Google Drive HTML Document Viewer](https://github.com/warren-bank/crx-Google-Drive-HTML-Document-Viewer)

#### Summary:

Chrome extension that enables opening HTML documents saved on [Google Drive](https://drive.google.com/) in a new browser tab.

#### Purpose:

* if an HTML document is saved to Google Drive
  * when it is opened on the website to preview the content
    * the raw source is shown as plain text
    * the purpose of this little extension is to allow rendering the HTML document in a new tab

#### Usage:

* when an HTML document is opened on the website to preview the content
  * click the icon for this extension

#### Exactly what it does:

* reads the HTML raw source as plain text
* opens a new tab
* writes the HTML source to the new tab
  * adds `nonce` to all `<script>` tags to satisfy browser CSP

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
