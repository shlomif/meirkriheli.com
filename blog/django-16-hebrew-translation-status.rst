:slug: django-16-hebrew-translation-status
:draft: 0
:datetime: 2013-11-08 18:14:12
:image: img/posts/django.gif

.. --

=============================================================
Django 1.6 Hebrew translation status
=============================================================

:lang: en
:tags:  FLOSS|floss, Django, Hebrew, Translation

:excerpt:
    When got notified about Django 1.6's string freeze, I was shocked to find
    out that the overall Hebrew status was at 7%! Further investigation revealed
    the situation was not grave.


When got notified about `Django 1.6's string freeze`_, I was shocked to find out
that the overall Hebrew status was at 7%! Further investigation revealed that
Django's docs were added recently to Transifex, dragging translation percentage
way down.

After recovering from the initial shock, the translation process commenced.
When the smoke cleared, on deadline (Tue, Nov 5th), Hebrew is back to 100%
for:

* django-core
* django-localflavor (separated now from django-core)
* django-people (`the website`_)

So Hebrew's status should be as good as `previous Django releases`_.

.. _Django 1.6's string freeze: https://groups.google.com/d/msg/django-i18n/EeuVNtobeqQ/b92CHUAkpIQJ
.. _previous Django releases: /en/2012/10/django-15-hebrew-translation-status/
.. _the website: https://people.djangoproject.com/

I've started some work on the documentation translation as well, however it is
quite a task. I'm not sure when or how it's gonna be used, so it'll wait for
now.

People always mention how good and comprehensive Django's documentation
is - trying to translate it validates that saying. Kudos to the team.

.. --

=============================================================
מצב התרגום לעברית של Django 1.6
=============================================================

:lang: he
:tags:  קוד פתוח|floss, Django, עברית|hebrew, תרגום|translation
:excerpt:
    כשקיבלתי את ההודעה על הקפאת המחרוזות לתרגום של Django 1.6 נדהמתי לגלות
    את אחוז התרגום לעברית על 7%!. בדיקה נוספת גילתה שהמצב לא גרוע כמו שחשבתי.

כשקיבלתי את ההודעה על `הקפאת המחרוזות לתרגום של Django 1.6`_ נדהמתי לגלות
את אחוז התרגום לעברית על 7%!. בדיקה נוספת גילתה שהמצב לא גרוע כמו שחשבתי ־
התיעוד של Django נוסף לפרוייקט ב־Transifex וגרר את אחוז התרגום לתחתית.

אחרי ההתאוששות מההלם הראשוני ניגשתי למלאכת התרגום ולאחר שהעשן התפזר לקראת תאריך
היעד, יום שלישי 5.11, התרגום לעברית עומד על 100% עבור:

* django-core
* django-localflavor (פוצל לאחרונה מ־django-core)
* django-people (האתר_)

כך שמצב התרגום לעברית עבור 1.6 אמור להיות טוב כמו `בגרסאות Django הקודמות`_.

.. _הקפאת המחרוזות לתרגום של Django 1.6: https://groups.google.com/d/msg/django-i18n/EeuVNtobeqQ/b92CHUAkpIQJ 
.. _בגרסאות Django הקודמות: /2012/10/django-15-hebrew-translation-status/
.. _האתר: https://people.djangoproject.com/

התחלתי לתרגם חלק מהתיעוד אך זו משימה לא פשוטה. כמו־כן אינני יודע איך זה ישולב
בהמשך, אז המשימה הזו תמתין לעת עתה.

אנשים תמיד מציינים לטובה את איכות והיקף התיעוד של Django - הניסיון לתרגם אותו
מוכיח זאת הלכה למעשה. כל הכבוד לצוות.
