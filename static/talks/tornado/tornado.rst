Tornado web server
~~~~~~~~~~~~~~~~~~~~~

PyWeb-IL 29
===============

http://www.tornadoweb.org/

Buzzwords galore
-------------------------

.. class:: incremental

* C10K_ problem
* Scalable, non-blocking
* web server ...
* and web application framework
* FriendFeed, thousands of long running connections

.. _C10K: http://www.kegel.com/c10k.html

Meta
--------

.. class:: incremental

* Python, 2.5-2.7, 3.2
* Small code base
* Few dependencies
* Uses epoll/kqueue
* Best on Linux/BSD derivatives
* Windows ? Not for production
* Apache 2 License

Hello PyWeb
--------------

.. sourcecode:: python

    import tornado.ioloop
    import tornado.web

    class MainHandler(tornado.web.RequestHandler):
        def get(self):
            self.write("Hello PyWeb")

    application = tornado.web.Application([
        (r"/", MainHandler),
    ])

    if __name__ == "__main__":
        application.listen(8888)
        tornado.ioloop.IOLoop.instance().start()


Asynchronous
--------------------

.. class:: incremental

* Asynchronous http client
* non blocking socket wrapper
* unittest with async requests support
* Events and callbacks can be cumbersome
* use when needed ...

tornado.web.asynchronous
--------------------------

When used, request is done when finish is called.

.. sourcecode:: python

    URL = 'http://www.bankisrael.gov.il/currency.xml'

    class CurrencyHandler(tornado.web.RequestHandler):
        @tornado.web.asynchronous
        def get(self):
           http = httpclient.AsyncHTTPClient()
           http.fetch(URL, self._got_currency)

        def _got_currency(self, response):
           self.write(response.body)
           self.finish()

Non blocking DB calls ?
---------------------------

.. class:: incremental

* Nope, nor monkey patching of sockets
* Load balance with more instances
* Use databases with asynchronous support like asyncmongo_

.. _asyncmongo: https://github.com/bitly/asyncmongo


Web application server
------------------------

.. class:: incremental

* Non blocking HTTP server
* Application configuration (settings, urls)
* Request handlers

Core web framework
--------------------

.. class:: incremental

* Templates
* Escaping
* Localization (CSV or gettext)


Templates
-----------

.. class:: incremental

* Compiled to python
* No restrictions on expressions

  .. sourcecode:: django

      {% for student in
            [p for p in people if p.age > 23] %}
        <li>{{ escape(student.name) }}</li>
      {% end %}

Templates custom functions
---------------------------

Can pass custom functions like variables.

python

.. sourcecode:: python

    def add(x, y):
       return x + y
    template.execute(add=add)

template

.. sourcecode:: django

    {{ add(1, 2) }}


Brownie points
-------------------

.. class:: incremental

* Websocket support
* tornado.options: settings definitions, config file and command-line parsing
* WSGI application container (async goes down the drain)
* Secure cookies and XSRF protection
* Reusable UI modules
* 3rd party auth and login ...

tornado.auth
--------------

* Mixins implementing various third-party authentication schemes

    * OpenID
    * OAuth, OAuth2
    * Twitter
    * FriendFeed
    * Google
    * Facebook


Closing time
-----------------

Contact
    Meir Kriheli <mkriheli@gmail.com>

* Questions ?
* Discussion




.. footer:: pyweb-il 29
