==========================
Chrome OAuth Bearer Plugin
==========================

Chrome browser plugin to inject OAuth 2 bearer tokens into outgoing HTTP requests (``Authorization`` header).

This plugin should allow browsing simple RESTful OAuth 2 resource servers directly from Chrome.
RESTful resource servers (microservices) should be kept simple and thus do not implement the full OAuth2 authorization code flow.

See also the `HTTPie Zign plugin`_ which does something similar for HTTP requests on the command line.

Usage
=====

1. cd <plugins_dir>
2. git clone git@github.com:zalando/chrome-oauth-bearer-plugin.git
3. open Chrome
4. open `Chrome extensions`_ [enter chrome://extensions/ in your navbar]
5. enable the developer mode
6. click on Load unpacked extensions
7. select the src folder in the plugin you just downloaded via git
8. open Options page
9. enter the token service URL, the URLs where the auth header should be added, your username and password
10. start using your APIs via Chrome

Creating the package file
=========================
The file is used for publishing on Chrome Web Store. Unfortunately, it does not properly work when you use it locally (once it's disabled, can't be enabled again).

1. install `node.js`_ on your machine
2. run "make" in the project's folder
3. you will have the .crx file in ./bin directory which you can publish on Chrome Web Store

.. _HTTPie Zign plugin: https://pypi.python.org/pypi/httpie-zign
.. _Chrome extensions: chrome://extensions/
.. _node.js: https://nodejs.org/

