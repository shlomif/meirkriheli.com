:slug: django-15-hebrew-translation-status
:draft: 0
:datetime: 2012-10-25 11:42:59
:image: img/posts/django.gif

.. --

=============================================================
Django 1.5 Hebrew Translation status
=============================================================

:lang: en
:tags:  FLOSS|floss, Django, Hebrew, Translation
:excerpt:
    Django 1.5 Hebrew translation completed (including Django People and
    localflavor).

As Django_ 1.5 enters alpha stage, the translation templates on Transifex
`got the update`_.

I'm happy to report, for the first time, that the `Hebrew translation`_ is at 100%
(hoping the strings won't change too much).

It Wasn't easy getting there. As an evil plot to reduce translation percents,
the site `Django People`_ was `added to the project's hub`_.

Hardest part was getting localflavor_ into shape. My first inclination was to
leave it, as it's going to `break out from Django`_ in the following versions.
Since I wanted to reach 100%, and knowing that the translation will follow it after the
planned breakup I've decided to go for it.

It wasn't easy, as I've needed to translated countless conunties, cities and
regions from around the world and Hebrew wikipedia didn't specify many of the
names (as transcribed in the template). Needed a mix of several resources to
find good translations.

For now Hebrew is one of the 6 languages at 100% (click image for larger version):

.. image:: /img/posts/t_transifex_django.png
    :alt: Django transifex
    :target: /img/posts/transifex_django.png


Have fun.

.. _Django: https://www.djangoproject.com/
.. _got the update: https://groups.google.com/d/topic/django-i18n/4Ju-mLi6pEo/discussion
.. _Hebrew translation: https://www.transifex.com/projects/p/django/language/he/
.. _Django People: https://people.djangoproject.com/
.. _added to the project's hub: https://groups.google.com/d/topic/django-i18n/f2fZZnJF5Ic/discussion
.. _localflavor: https://docs.djangoproject.com/en/1.4/ref/contrib/localflavor/
.. _break out from Django: https://groups.google.com/d/topic/django-developers/OiyEGmXTifs/discussion

.. --

=============================================================
מצב התרגום לעברית של Django 1.5
=============================================================

:lang: he
:tags:  קוד פתוח|floss, Django, עברית|hebrew, תרגום|translation
:excerpt:
    תרגום Django 1.5 לעברית הושלם (כולל Django People ו-localflavor).

עם כניסת Django_ לשלב האלפא של 1.5, `עודכנו תבניות התרגום`_ ב-Transifex.

אני שמח לדווח כי, בפעם הראשונה, `התרגום לעברית`_ עומד על 100% (ומלא תקווה לחוסר
שינוי גדול במחרוזות בגרסה הסופית).

זו לא הייתה משימה קלה. בתור מזימה מרושעת להקטנת אחוזי התרגום,  האתר 
`Django People`_ `הוכנס תחת מטריית הפרוייקט`_.

אך החלק הקשה באמת היה תרגום מלא של localflavor_. הנטיה הראשונית שלי הייתה
להשאירו כמות שהוא מאחר והוא `עתיד להפרד מ-Django`_ בגרסאות הבאות. מאחר ורציתי
להגיע ל-100%, ומהידיעה כי התרגום ימשיך עימו לאחר הפרידה, הפשלתי שרוולים וניגשתי
למלאכה.

לצערי זה לא היה פשוט, מאחר ונדרשתי לתרגם שמות מחוזות, ערים ואזורים מסביב לעולם
והוויקיפדיה העברית לא הכילה חלק גדול משתמות (לפחות לא בתעתיק אשר הופיע בתבנית
התרגום). שילוב של מספר מקורות שונים עזר במציאת תרגומים סבירים.

נכון לכתיבת ידיעה זו, עברית היא אחת מ-6 השפות אשר עומדות על 100% (לחצו על התמונה
לגרסה גדולה יותר):

.. image:: /img/posts/t_transifex_django.png
    :alt: Django transifex
    :target: /img/posts/transifex_django.png

תהנו.

.. _Django: https://www.djangoproject.com/
.. _עודכנו תבניות התרגום: https://groups.google.com/d/topic/django-i18n/4Ju-mLi6pEo/discussion
.. _התרגום לעברית: https://www.transifex.com/projects/p/django/language/he/
.. _Django People: https://people.djangoproject.com/
.. _הוכנס תחת מטריית הפרוייקט: https://groups.google.com/d/topic/django-i18n/f2fZZnJF5Ic/discussion
.. _localflavor: https://docs.djangoproject.com/en/1.4/ref/contrib/localflavor/
.. _עתיד להפרד מ-Django: https://groups.google.com/d/topic/django-developers/OiyEGmXTifs/discussion
