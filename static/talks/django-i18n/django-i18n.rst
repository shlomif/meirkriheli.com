RTL, i18n, L10n and Django
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Right to left, Internationalization and localization of web and Django apps

Define: BiDi
===============

`BiDi`, or `bi-directional`
    text containing right to left and  left to right strings

BiDi support
    correct display of text with mixed directions


.. class:: example

Hello world, מה שלומך today ?

.. class:: example rtl

שלום עולם, how are you היום ?

Define: RTL
==============


.. class:: incremental

* right-to-left interfaces

  .. image:: RTL.png
    :class: incremental

* #@%@#%!!#@$%#@%

Define: i18n, L10n
===================

i18n: Internationalisation
  Translation to various languages.

L10n: Localization
  Adapt to various locales and regions:

  .. list-table::
    :class: example

    *  - 12.23.2009
       - 23.12.2009
    *  - -1,234.56
       - -1.234,56

RTL in web apps
=================

With CSS and overriding. Don't hardcode:

.. class:: example
.. code-block:: html

    <div style="margin-left: 10pt">

Instead:

.. class:: example

.. code-block:: html

    <div class="with-margin">

.. class:: example

.. code-block:: css

    .with-margin { margin-left:10pt }
    .rtl .with-margin {
        margin-left:0; margin-right: 10pt
    }


Overriding with CSS: take 1
============================

Sheet for one direction, override in another.

.. class:: example

.. code-block:: css

  /* myapp.css */
  .with-margin { margin-left:10pt }

  /* myapp_rtl.css */
  .with-margin { margin:0 10pt 0 0 }

in html pseudo code

.. class:: example
.. code-block:: html
    
    <link href="myapp.css" />
    <link href="myapp_rtl.css" /> <!-- if bidi -->

Overriding with CSS: take 2
============================

Single css file and attribute selectors:


.. class:: example
.. code-block:: html

  <html xmlns="http://www.w3.org/1999/xhtml"
      lang="he" xml:lang="he" dir="rtl">

in css:

.. class:: example
.. code-block:: css

  .with-margin { margin-left:10pt; text-align:left }
  html[dir=rtl] .with-margin {
    margin:0 10pt 0 0;
    text-align: right
  }

Overriding with CSS: take 3
============================

IE6 sucks, no attribute selectors - single css file
utilizing class selectors:


.. class:: example
.. code-block:: html

  <body class="with-rtl">

in css:

.. class:: example
.. code-block:: css

  .with-margin { margin-left:10pt }
  body.with-rtl .with-margin { margin:0 10pt 0 0 }


Images and RTL
=================

Provide mirrored images for RTL, override in stylesheet
and templates:

.. code-block:: html

   <div class="arrow">Hello</div>
    
.. class:: example

    .. class:: arrow

    Hello

    .. class:: rtl arrow

    שלום

    .. class:: rtl arrow-rtl

    שלום

Styles to override
===================

* margin
* padding
* float
* text-align
* direction
* border
* background-position, background-image
* clear

Direction marker
================

Finally 2 html entities, `&rlm;` and `&lrm;` to enforce direction on neutral
characters.

.. class:: example
.. code-block:: django

  {{ user }}, {{ date_published }}

What happens when all text in an element is in the other direction ? See
the list:

.. class:: rtl example
    
| מאיר, 10.2.2009
| meir, 10.2.2009
| יוסף, 13.3.2009

Direction marker, continued
===========================

The comma and space are neutral, direction markers force desired
direction, e.g for RTL:

.. class:: example
.. code-block:: django

    {{ user }}&rlm;, {{ date_published }}

Now ordering is correct:

.. class:: rtl example

| מאיר, 10.2.2009
| meir‏, 10.2.2009
| יוסף, 13.3.2009


Django and i18n
=================

.. class:: incremental

* Uses gettext for translation.
* Can translate strings in templates, source code and javascript
* Can be disabled if not needed

settings.py
===========

.. class:: example
.. code-block:: python

  LANGUAGE_CODE = 'he' # default language
  USE_I18N = True      # default
  TEMPLATE_CONTEXT_PROCESSORS = (
    "...",
    "django.core.context_processors.i18n",
    "...",
  ) # default

To disable i18n:

.. class:: example
.. code-block:: python

  USE_I18N = False   # short-circuit translations


Always mark for translation
==========================================

Always mark text for translation, even if single language app
right now.


If text isn't translated, it'll fall back to the string itself.

.. class:: example
.. code-block:: django

  {% trans "Hello" %} {{ username }}

Without translation {"username":"foo"}:

.. class:: example

Hello foo


Translation in templates
============================

Simple strings

.. class:: example
.. code-block:: django

  {% load i18n %}
  {% trans "Hello" %} {{ user }}


Text with variables

.. class:: example
.. code-block:: django

  {% load i18n %}

  {% blocktrans %}
  Hello {{ user }}, last login at {{ login_date }}.
  {% endblocktrans %}


Translation in templates
=================================

Single and plural

.. class:: example
.. code-block:: django

  {% load i18n %}

  {% blocktrans %}
  You have {{ incoming.count }} new message.
  {% plural %}
  You have {{ incoming.count }} new messages.
  {% endblocktrans %}


Translation in code
============================

`ugettxt_lazy()` vs `ugettext()`

* ugettxt_lazy is a proxy
* Translated when value is accessed, not called
* Used in place where the code is called once, e.g: Models, Forms
  
ugettext_lazy, e.g models.py
====================================

.. code-block:: python

  from django.utils.translation import \
        ugettext_lazy as _
  from django.db import models

  class page(models.Model):

      title = models.CharField( _('Title'),
        max_length=20,
        help_text=_('Page title') 
      )

      class Meta:
          verbose_name = _('Page')
          verbose_name_plural = _('Pages')


ugettext, e.g views:
========================

.. code-block:: python

  from django.utils.translation import ugettext as _

  def welcome(request):
      msg = _('Welcome back')
      return HttpResponse(msg)

  @login required
  def welcome_with_name(request):
    
      msg = _('Hello %(name)s, welcome back') % \
         { 'name': request.user }
      return HttpResponse(msg)


Message files - create
=============================

Create and update message files

A `locale` dir is required, recommended in the app dir.

.. class:: example
.. code-block:: sh

  $ django-admin.py makemessages -l he

By default uses `html` extension for templates, can
specify others:

.. class:: example
.. code-block:: sh

  $ django-admin.py makemessages \
    -e html,txt,xml -l he

Message files - Edit
=======================

Edit message files:

* Text editor
* Poedit_
* lokalize_
* gtranslator_
* po.vim_

.. _Poedit: http://www.poedit.net/
.. _lokalize: http://userbase.kde.org/Lokalize
.. _gtranslator: http://gtranslator.sourceforge.net/
.. _po.vim: http://www.vim.org/scripts/script.php?script_id=695


Message files -  compile
==========================

Compile message files

.. code-block:: sh

  $ django-admin.py compilemessages -l he

.. admonition:: Reload the server

  Django's dev server won't reload after compiling, restart it
  for your sanity.

Coming to Django near you
==========================

* Better L10n is added to the next version of Django
* Called `Format localization`_
* Allows per project customization

.. _Format localization: http://docs.djangoproject.com/en/dev/topics/i18n/#id3

Reusable helper apps
======================

Some reusable apps for multilingual and bidi sites

* django-localeurl
* django-multilingual
* django-bidi-utils


Unique URLs
=================================

* `django.views.i18n.set_language` changes active language with POST.
* | **it sucks**, different languages should have different urls:
  |
  | example.com/he/contact-us/
  | example.com/en/contact-us/
* OTH littering urlconf with language selectors is messy, non DRY

  .. code-block:: python

      url('^(?P<lang>he|en)/contact-us/$', )


django-localeurl
====================

`django-localeurl`_ provides a middleware which:

* Detects the language from the url
* Sets `request.path_info` without the language
* Continue with normal pattern matching

Plus:

* Replaces the `url` template tag and `reverse()`
* Provides language/url helper tags

.. _django-localeurl: http://code.google.com/p/django-localeurl/


django-multilingual
=======================

`django-multilingual`_ provides database translations

.. class:: example
.. code-block:: python

    class Category(models.Model):
        parent = models.ForeignKey('self', \
                blank=True, null=True)

        class Translation(multilingual.Translation):
            name = models.CharField(max_length=50)

        def __unicode__(self):
            "Returns correct name for active lang"
            return self.name

.. _django-multilingual: http://code.google.com/p/django-multilingual/


django-bidi-utils
==================

django-bidi-utils_, language direction related context processor and
filter. Before:

.. class:: example
.. code-block:: django

  <html dir="{{LANGUAGE_BIDI|yesno:"rtl,ltr"}}">

After:

.. class:: example
.. code-block:: django

  <html dir="{{LANGUAGE_DIRECTION}}">

.. _django-bidi-utils: http://github.com/mksoft/django-bidi-utils


Now what ?
==========

* Read the `Django i18n docs`_
* Questions ?
* Contact me_ for further questions

    Thank you

.. _Django i18n docs: http://docs.djangoproject.com/en/dev/topics/i18n/
.. _me: meir@mksoft.co.il

.. footer:: pyweb-il 11 - 28.12.2009

