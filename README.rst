
Chrome OAuth Bearer Plugin
==========================

Chrome browser plugin to inject OAuth 2 bearer tokens into outgoing HTTP requests (``Authorization`` header).

This plugin should allow browsing simple RESTful OAuth 2 resource servers directly from Chrome.
RESTful resource servers (microservices) should be kept simple and thus do not implement the full OAuth2 authorization code flow.

See also the `HTTPie Zign plugin`_ which does something similar for HTTP requests on the command line.

Usage
=====

1. git clone git@github.com:zalando/chrome-oauth-bearer-plugin.git
2. In Chrome, go to 'Settings > Extensions'
3. Enable 'Developer mode'
4. Click on 'Load unpacked extension...' and select the folder chrome-oauth-bearer-plugin/src
5. In the 'Options' page, enter the token service URL, the URL patterns where the auth header should be added (see link for docs), and your credentials


Creating the package file
=========================
The file is used for publishing on Chrome Web Store. Unfortunately, it does not properly work when you use it locally (once it's disabled, can't be enabled again).

1. Install `node.js`_ on your machine
2. Run `make` in the project's folder
3. You will have the .crx file in ./bin folder which you can publish on Chrome Web Store

.. _HTTPie Zign plugin: https://pypi.python.org/pypi/httpie-zign
.. _Chrome extensions: chrome://extensions/
.. _node.js: https://nodejs.org/
