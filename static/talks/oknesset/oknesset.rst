====================
Open-Knesset
====================

Musing and Brain Dump

Background
------------

* Open source project initiated by `Ofri Raviv`_ at 2009
* Making the information accessible and widening the public's
  exposure to the Knesset and elected politicians
* First project under `The Public Knowledge Workshop`_ umbrella

.. _Ofri Raviv: https://github.com/ofri
.. _The Public Knowledge Workshop: http://www.hasadna.org.il/


Teams
-------
* Server side & mobile development
* Design
* Content
* Marketing
* Diverse contributors (OS, background, knowledge)

You bastard!
-----------------

* Not a criticism, a learning experience
* Open source project by volunteers with limited resources
* No time or motivation for large restructuring and refactoring work

cd Open-Knesset; whoami 
---------------------------------

* Volunteered on and off for some time
* Employed by the project since Dec. 2012

Infrastructure
---------------

* EC2
* Micro instances running Django
* ELB
* 2 small instances with PostgreSQL (one replicating) and scrapers

Changed wsgi containers
------------------------

* From mod_wsgi to gunicorn
* Less overhead, were able to reduce micro instances
* Still with Apache though, for mod_pagespeed


Forks
-----------

* Had quite a few forked apps (some for small changes)
* Non-maintained
* Pushed and switched to upstream some of those


Build
----------

* From buildout to virtualenv + pip
* Faster (specially on re-runs, although ``newset`` helps with that)
* Better for those following tutorials - vanilla ``./manage.py`` instead of
  ``bin/django`` or similar
* Some deployment tasks done by fabric


Setting a devel env
------------------------------

* Natural to seasoned Python/Django devs on \*nix
* Was problematic, specially on Windows
* No reproduce able and documented steps 
* We now have `documented steps`_ for setting up on Linux, Windows and Mac OS X
* Still problematic to install for the hip designers team ;-)

.. _documented steps: https://oknesset-devel.readthedocs.org/en/latest/


DB
-------

* All queries (including custom SQL) should work with sqlite and PostgreSQL
* Need to whitewash data (email addresses, password hashes etc.)
* While a developers' db was available, still had some problems (no
  migration data etc.)
* Bugs fixed, generate an updated working dev.db regularly


Migrations
--------------

* Some apps were not using migrations at all
* Was problematic down the road (needed to fake)
* Don't even think about it, create the initial migration for each app


Coding style
--------------

* Yeah, pet peeves
* Still no code review (hope to reach it at some time)
* No PEP8 in sight
* Some functions/methods are long, refactoring is due
* Not enough docstrings (with reST in them in preparation for Sphinx, pretty
  please)
* Adequate tests, afraid to run coverage ;-)


Static files
-----------------

* Didn't use staticfiles_
* Old project, but there was a 3rd party static files app back than
* All static app files are under a single dir
* A symlink was needed on deployments
* Now using staticfiles, hoping to integrate django-storages_ and move to S3

.. _staticfiles: https://docs.djangoproject.com/en/dev/howto/static-files/
.. _django-storages: http://django-storages.readthedocs.org/en/latest/index.html

Structure
----------

* Everything is under a single directory
* Static media
* Templates
* Translations (problematic with merges)

Templates
-----------

* Nesting
* Leading to unconventional block names

* Tags and accessing attributes leading to more db queries
* Should use select/prefetch related in views
* Prepare data in views in general

Templates 2
------------

* Redundant templates tags
* Inclusion tags just setting context vars from passed data
* Use instead::

    {% include "foo.html" with bar=object %}


Javascript
------------

* Many js libraries
* At head
* inline js
* Proved problematic when moved JS to bottom of page

CSS
----

* selectors galore
* Inline styles
* No Preprocessors
* Each dependency and steps on installation will deter developers


Bootstrap
-----------

* Push came to shove: moved to Bootstrap
* Using LESS


UX
----

* Was mostly a representation of the models
* Design team handed a couple of pages which served as basis for the bootstrap
  redesign (till rest of pages are designed)

War stories
--------------

* Ofri - Directories and file names, ``aux``
* Amir - Sqlite limit in dev.db creation management command
  (SQLITE_MAX_COULMN_)

.. _SQLITE_MAX_COULMN: http://sqlite.org/limits.html

Thank you
----------

- Meir Kriheli
- http://meirkriheli.com
- mkriheli@gmail.com

.. footer:: PyWeb-IL Feb 2013

