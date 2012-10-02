Sphinx
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Documentation in Action

.. class:: no-title



Sphinx and Pyramid
----------------------

.. image:: Egypt.Giza.Sphinx.02.jpg
    :align: right

Sphinx and Pyramid @ same meeting :)

What are the odds  ?

.. class:: no-title



Writing Documentation
----------------------

.. image:: Sumerian_26th_c_Adab.jpg
    :align: right

Writing documentation is hard

.. class:: no-title



Good documentation
---------------------

.. image:: Moses_dore.jpg
    :align: right

Writing good, usable & acceptable documentation is harder



Enter Sphinx
---------------

* Cross References
* Hierarchical structure (document tree)
* Indexes
* Syntax Highlighting
* Extensions
* Output formats (Html, LaTeX, man pages, plain text)



Solid Foundation
-----------------

.. image:: PileDriving.jpg
    :align: right

* reStructuredText - markup
* Pygments - Syntax highlighting
* Jinja2 - Templates
* CSS - Themes



rst - Sections
-----------------

.. image:: sections.png
    :align: right

.. sourcecode:: rst

    Title
    =====
    Subtitle
    --------
    Titles are underlined
    (or over- and underlined)
    with a printing
    nonalphanumeric 7-bit ASCII
    character. Recommended
    choices are
    "``= - ` : ' " ~ ^ _ * + # < >``".



rst - Lists
------------------

.. image:: bullets.png
    :align: right

.. sourcecode:: rst

    Bullet lists:

    - This is item 1
    - This is item 2

    - Bullets are "-", "*" or "+".
      Continuing text must be aligned
      after the bullet and whitespace.



rst - HyperLinks
-----------------

.. image:: links.png
    :align: right

.. sourcecode:: rst

    External hyperlinks,
    like Sphinx_ or `example website`_.

    .. _Sphinx: http://sphinx.pocoo.org/index.html
    .. _example website: http://example.com

rst - Admonition
------------------

.. image:: admonition.png
    :align: right

.. sourcecode:: rst

    .. note:: This is a note admonition.
       This is the second line

    .. warning:: Don't do that

    .. tip::
        Do that and good things will follow

.. class:: no-title



rst - More
-----------

Complete reStructuredText reference at `docutils web site`_

.. _docutils web site: http://docutils.sourceforge.net/docs/#user-introductory-tutorial-material-for-end-users



Sphinx - Quick start
-----------------------

.. sourcecode:: sh

    $ pip install sphinx
    $ mkdir docs
    $ sphinx-quickstart docs
    ...
    $ cd docs
    $ make html



conf.py
----------

* Set theme
* Adjust paths
* Change configuration
* Add extensions


TOC tree
-------------

.. class:: align-right

.. sourcecode:: rst

    .. toctree::
       :maxdepth: 2

       install
       quickstart
       guide

| Custom directive, adds relations between the single
| files and table of contents.



Labels
---------

Use for cross referencing.

.. class:: align-right

.. sourcecode:: rst

    For more info see :ref:`coolproj`

.. sourcecode:: rst

    .. _coolproj:

    Cool Project
    ==============



Indexing
-----------

.. image:: index.png
    :align: right

.. sourcecode:: rst

    .. index::
        single: Execution Example
        single: User Guide; Execution Example

    Execution Example
    ====================


Python Domain
----------------


* General and module indexing
* References

* | See `The Python Domain`_ for
  | complete reference.

.. _The Python Domain: http://sphinx.pocoo.org/domains.html#the-python-domain



Python Domain Example
----------------------

.. sourcecode:: rst

    .. py:function:: format_exception(etype, value, tb[, limit=None])

       Format the exception with a traceback.

       :param etype: exception type
       :param value: exception value
       :param tb: traceback object
       :param limit: maximum number of stack frames to show
       :type limit: integer or None
       :rtype: list of strings


    For more info see :py:func:`format_exception`



Rendered Example
--------------------

.. image:: pydomain.png



Built in domains
------------------

* Python
* C
* C++
* Standard
* JavaScript


Contrib
--------------------

More domains and extensions at the `Sphinx Contrib`_.

* Erlang domain
* Ruby domain
* HTTP domain
* PHP domain

And many more (youtube, feed, google analytics etc.). Couldn't find a Perl
domain, any takers ?

.. _Sphinx Contrib: https://bitbucket.org/birkenfeld/sphinx-contrib/



autodoc extension
-------------------

Can Import modules and create documentation from docstrings.

.. sourcecode:: rst

    .. automodule:: awesome
       :members:

    .. autoclass:: AwesomeCls
       :members:
       :inherited-members:



Pod-POM-View-Restructured
-------------------------------

Outputs reStructuredText that is expected to be used with Sphinx.

Verbatim sections in POD will use perl syntax hilighting by default.

**pod2rst** - convert .pod files to .rst files.


Hands on
--------------

* Checkout Dancer
* Convert the docs
* Let's Dance



readthedocs.org
--------------------

.. image:: readthedocs.png
    :align: right

* Auto-updating
* Cached
* Versions
* PDF Generation
* Search
* Alternate Domains
* Intersphinx


Images Credits
---------------

* Sumerian_
* `Moses dore`_
* Egypt.Giza.Sphinx.02_
* PileDriving_

.. _Sumerian: http://en.wikipedia.org/wiki/File:Sumerian_26th_c_Adab.jpg
.. _Moses dore:  http://he.wikipedia.org/wiki/%D7%A7%D7%95%D7%91%D7%A5:Moses_dore.jpg
.. _Egypt.Giza.Sphinx.02: http://en.wikipedia.org/wiki/File:Egypt.Giza.Sphinx.02.jpg
.. _PileDriving: http://en.wikipedia.org/wiki/File:PileDriving.jpg


Contact
----------

- Meir Kriheli
- http://meirkriheli.com
- mkriheli@gmail.com

.. footer:: PyWeb-IL 34 Feb 2012
