:slug: django-bidi-utils-10-released
:draft: 0
:datetime: 2013-10-24 12:01:26
:image: img/posts/bidi.png

.. --

=============================================================
django-bidi-utils 1.0 released
=============================================================

:lang: en
:tags: Django, BiDi, Cookiecutter, Python, FLOSS
:excerpt:

    django-bidi-utils is a small app I've written long time ago. It provides
    a Context Processor and a filter, helping with development of BiDi Django
    templates.

    As I've wanted a chance to play with Cookiecutter, it was a good
    chance to update things and release 1.0 along the way.


`django-bidi-utils`_ is a small app I've written long time ago. It provides a
Context Processor and a filter, helping with development of BiDi
Django templates.

The previous version was 0.2.1 released at May 2009. Since then the app has been
quite stable and usable, without any changes.

The docs still needed some love though, and it wasn't tested for Python 3
compatibility. As I've wanted a chance to play with Cookiecutter_, it was a good
chance to update things and release 1.0 along the way.

I've used Cookiecutter with the cookiecutter-djangopackage_ template. Since it's
geared toward newly created packages, the app and tests needed some messaging to
fit into the template.

The old README was cleaned and the docs rewritten with Sphinx_. As a result:

* The app is now tested for Python 3.3, 2.7 and 2.6 Compatibility with tox_.
* `Continuous integration with Travis`_.
* The `new documentation`_ is available at Read the Docs.
* Got the badges:

  .. image:: https://badge.fury.io/py/django-bidi-utils.png
      :target: http://badge.fury.io/py/django-bidi-utils

  .. image:: https://travis-ci.org/MeirKriheli/django-bidi-utils.png?branch=master
          :target: https://travis-ci.org/MeirKriheli/django-bidi-utils

  .. image:: https://pypip.in/d/django-bidi-utils/badge.png
          :target: https://crate.io/packages/django-bidi-utils?version=latest


Might want to checkout Cookiecutter_ even if you're not a Python user, there are
templates for various projects (C with autotools, jQuery plugin and more).


.. _django-bidi-utils: https://pypi.python.org/pypi/django-bidi-utils
.. _Cookiecutter: https://pypi.python.org/pypi/cookiecutter/0.6.4
.. _cookiecutter-djangopackage: https://github.com/pydanny/cookiecutter-djangopackage
.. _new documentation: http://django-bidi-utils.readthedocs.org
.. _Sphinx: http://sphinx-doc.org/
.. _Continuous integration with Travis: https://travis-ci.org/MeirKriheli/django-bidi-utils
.. _tox: http://tox.readthedocs.org/en/latest/

.. --

=============================================================
שוחרר django-bidi-utils 1.0
=============================================================

:lang: he
:tags: Django, דו-כיווניות|bidi, Cookiecutter, פייתון|python, קוד פתוח|floss
:excerpt:
    django-bidi-utils הוא יישום קטן אשר כתבתי לפני זמן רב ומספק Context Processor
    ו-filter אשר עוזרים בכתיבת תבניות Django דו־כיווניות. מאחר וחיפשתי תירוץ
    לשחק עם Cookiecutter, זו הייתה הזדמנות טובה לעדכון ושחרור גרסה 1.0.


`django-bidi-utils`_ הוא יישום קטן אשר כתבתי לפני זמן רב ומספק Context Processor
ו-filter אשר עוזרים בכתיבת תבניות Django דו־כיווניות.

הגרסה הקודמת עמדה על 0.2.1 ושוחררה במאי 2009. מאז היישם היה יציב ושמיש, ללא שום
שינויים.

עם זאת, התיעוד נזקק לשיפור והיישום לא נבדק כלל לתאימות עם פייתון 3. מאחר וחיפשתי
תירוץ לשחק עם Cookiecutter_, זו הייתה הזדמנות טובה לעדכון ושחרור גרסה 1.0.

השתמשתי ב-Cookiecutter יחד עם תבנית cookiecutter-djangopackage_. מאחר והמנגנון
מותאם לפרוייקטים חדשים נדרשו מספר שינויים במבנה התיקיות ומבנה הבדיקות להתאמה
לתבנית.

ה-README הישן נוקה והתיעוד נכתב מחדש בעזרת Sphinx_. כתוצאה:

* היישום נבדק בעזרת tox_ לתאימות עבור פייתון 2.6, 2.7 ו־3.3.
* `Continuous integration עם Travis`_.
* `התיעוד החדש`_ זמין ב־Read the Docs.
* יש סמלים חדשים:

  .. image:: https://badge.fury.io/py/django-bidi-utils.png
      :target: http://badge.fury.io/py/django-bidi-utils

  .. image:: https://travis-ci.org/MeirKriheli/django-bidi-utils.png?branch=master
          :target: https://travis-ci.org/MeirKriheli/django-bidi-utils

  .. image:: https://pypip.in/d/django-bidi-utils/badge.png
          :target: https://crate.io/packages/django-bidi-utils?version=latest

Cookiecutter עשוי לעניין אתכם גם אם אינכם מפתחי פייתון, קיימות תבניות לפרוייקטים
מסוגים שונים (פרוייקט C פשוט עם autotools, תוסף jQuery וכו').

.. _django-bidi-utils: https://pypi.python.org/pypi/django-bidi-utils
.. _Cookiecutter: https://pypi.python.org/pypi/cookiecutter/0.6.4
.. _cookiecutter-djangopackage: https://github.com/pydanny/cookiecutter-djangopackage
.. _התיעוד החדש: http://django-bidi-utils.readthedocs.org
.. _Sphinx: http://sphinx-doc.org/
.. _Continuous integration עם Travis: https://travis-ci.org/MeirKriheli/django-bidi-utils
.. _tox: http://tox.readthedocs.org/en/latest/
