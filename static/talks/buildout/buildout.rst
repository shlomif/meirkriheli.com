zc.buildout
==============

Fitting puzzle pieces together
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

"Buildout is an exceedingly civilized way to develop an app."

--- Jacob Kaplan-Moss, creator of Django

Django is an island
---------------------

Let's take Django as an example:

.. class:: incremental

* Single package
* | No extra dependencies
  | Ignoring optional PIL and DB

* Easy to install and start playing with
* Part of it's success

No Project is an island
-------------------------------

Framework has no dependencies ? Cool. 

OTOH non trivial projects have many of them (good
thing |trade|). Let's take Django as an example:

.. class:: incremental

* Reusable apps - power and flexibility
* Start with a simple project
* Add tagging, registration, multilingual, mailer, south, locale-url, piston ...
* The puzzle is complete, we have the pieces


No developer is an island
----------------------------------

.. class:: incremental

* Developers work in teams
* | Single developer ?
  | No island - develop vs deploy

* | We need to replicate the pieces.
  | No problem, right ?


Lost your marbles ?
------------------------

Recreating the environment and dependencies walk in the park.

.. class:: incremental

* Different framework versions
* | Specific apps and packages
  | often a specific scm revision
* Isolated environment
* Deployment headaches: paths, FastCGI, WSGI


virtualenv
-----------------------

.. class:: incremental

* Setup script to install dependencies into the env
  (e.g: TurboGears ``tg2-bootstrap.py``)

* Need to activate/deactivate environments upon switching projects

* What about different deployment profiles (staging, production) ?

* Handle changed or removed dependencies ?


Enter zc.buildout
------------------

Python-based reproducible build and configuration system for
multi-part applications:

- Creating
- Assembling
- Deploying

Work flow
----------

#. Create configuration file
#. Get and run the bootstrap script
#. Run bin/buildout 
#. Update configuration, add/remove dependencies
#. Goto 3


Create configuration file
------------------------------

.. class:: small

.. sidebar:: buildout.cfg

    .. code-block:: cfg

        [buildout]
        parts = 
        develop = .

.. class:: medium

* Ini like file. default ``buildout.cfg``
* Entry section is ``[buildout]``
* ``parts``: configuration sections, each handled
  with a ``recipe``
* ``develop``: paths to create develop eggs from.
  Must contain setup file


Recipes for a great dish
---------------------------

Each part is handled by a recipe which is downloaded as needed.
There are many of them, search ``buildout`` @PyPI. e.g:

* ``zc.recipe.egg``: Install eggs, custom intreperters with path
* ``djangorecipe``: Setup django env, custom manage.py, paths, fcgi and wsgi
* ``infrae.subversion``: Checkout from subversion
* ``MercurialRecipe``: Cloning/pulling a Mercurial repository

Get and run bootstrap
-----------------------------

Get it:

.. code-block:: bash

  wget http://svn.zope.org/*checkout*/\
    zc.buildout/trunk/bootstrap/bootstrap.py

Run it:

.. class:: small

.. code-block:: bash

    [meir@metallix buildout]$ python bootstrap.py
    Creating directory '/home/meir/tmp/buildout/bin'.
    Creating directory '/home/meir/tmp/buildout/parts'.
    Creating directory '/home/meir/tmp/buildout/develop-eggs'.
    Generated script '/home/meir/tmp/buildout/bin/buildout'.


Update configuration
---------------------

.. code-block:: cfg

    [buildout]
    parts = python
    eggs = 
           docutils
           pygments

    [python]
    recipe = zc.recipe.egg
    interpreter = mypython
    eggs = ${buildout:eggs}


Run bin/buildout
-------------------

.. code-block:: sh

    [meir@metallix buildout]$ bin/buildout
    Installing python.
    Generated interpreter '/home/meir/tmp/buildout/bin/mypython'.

It's all in the paths, let's examine bin/mypython:

.. code-block:: python

    #!/usr/bin/python

    import sys

    sys.path[0:0] = [
      '/home/meir/.buildout/eggs/docutils-0.6-py2.6.egg',
      '/home/meir/.buildout/eggs/Pygments-1.1.1-py2.6.egg',
      ]

    ...

djangorecipe example
----------------------

.. code-block:: cfg

    [buildout]
    parts = python django
    develop = .
    eggs = django-bidi-utils
     
    [python]
    recipe = zc.recipe.egg
    interpreter = python
    eggs = ${buildout:eggs}
     
    [django]
    recipe = djangorecipe
    version = 1.0.2
    project = bidiutils
    projectegg = bidiutils
    settings = testsettings
    test = bidiutils
    eggs = ${buildout:eggs}


Extending config files
----------------------------------------

Config files can extends other ones, useful for different scenarios,
e.g ``staging.cfg``:

.. code-block:: cfg

    [buildout]

    extends = buildout.cfg
    parts +=
        magic-debugging-egg

    [magic-debugging-egg]

    recipe = ...

.. code-block:: sh

    $ bin/buildout -c staging.cfg


Recipes for fun and profit
-----------------------------

Can't find the receipe ? Need customization ? don't despair, recipes
are python after all, write your own.

Each recipe is a class implementing ``install``, ``update`` and optional 
``uninstall``. For more info, see `Writing recipes`_ in the buildout
tutorial.

.. _Writing recipes: http://www.buildout.org/docs/tutorial.html#writing-recipes


That's all folks, questions ?
-------------------------------

- | Buildout tutorial:
  | http://www.buildout.org/docs/tutorial.html
- | Jacob Kaplan-Moss:
  |
  | Developing Django apps with zc.buildout:
  | http://jacobian.org/writing/django-apps-with-buildout/ 
  |
  | More buildout notes:
  | http://jacobian.org/writing/more-buildout-notes/

Contact: Meir Kriheli, meir@mksoft.co.il


.. footer:: pyweb-il 10 @ Google Israel - 30.11.2009
.. |trade| unicode:: U+2122

