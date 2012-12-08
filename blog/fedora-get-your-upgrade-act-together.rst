:slug: fedora-get-your-upgrade-act-together
:draft: 0
:datetime: 2012-11-11 01:48:13
:image: img/posts/fedora-logo.png

.. --

=============================================================
Fedora - Get your upgrade act together
=============================================================

:lang: en
:tags:  FLOSS|floss, Fedora, yum
:excerpt:
    Fedora's upgrades are usually a FAIL for me, they should give it a priority
    if they want testers.

I mostly like Fedora_, it's close enough to a rolling release distro, while
maintaining some stability.

It's main Achilles heel IMO is the upgrade policy, lack of it
- Looks like they've never given it enough consideration.

Preupgrade had broken things on previous upgrades. Now, wanting to try Fedora
18 Alpha, preupgrade is deprecated, to be replaced by another tool (fedup),
which is not ready, and probably will be buggy for the first iterations.

The Released Alpha 18 images `have no upgrade functionality`_, and the recommended way
of upgrading is `using yum`_. Problem ? Broken dependencies for several days
(when I've attempted to upgrade),  not for some 3rd party repository package, but
gnome's desktop basic one - Network Manager's bluetooth component or one of it's
dependencies.

You want testers for your releases ? Give priority to upgrades. I'm an
early adopter, but won't do a clean install of my complex setup each time an upgrade is due.

No wonder I'm usually leaving Fedora for other distros during upgrade phase.


.. _Fedora: http://fedoraproject.org/
.. _have no upgrade functionality: http://fedoraproject.org/wiki/Common_F18_bugs#No_upgrade_function_available_from_Fedora_17_to_Fedora_18_Alpha
.. _using yum: http://fedoraproject.org/wiki/Upgrading_Fedora_using_yum#Fedora_17_-.3E_Fedora_18

.. --

=============================================================
פדורה - קחו את השדרוג בידיים
=============================================================

:lang: he
:tags:  קוד פתוח|floss, פדורה|fedora, yum
:excerpt:
    השדרוגים של פדורה מסתיימים אצלי בד"כ במפח נפש, הגיע הזמן שהם יתנו לזה עדיפות
    אם הם חפצים בבודקי גרסאות הפיתוח.

אני די מחבב את פדורה_, היא קרובה לגרסה מתגלגלת תוך שמירה על יציבות יחסית.

נקודת התורפה העיקרית שלה לדעתי היא מדיניות השדרוג, המחסור בה ליתר דיוק - נראה
כאילו לא הוקדשה מחשבה יתרה לנושא.

preupgrade כבר שבר לי דברים בשדרוג גרסאות קודמות. כעת, מתוך רצון לנסות את גרסת
18 אלפא, מתברר כי preupgrade בדרכו החוצה ואינו עובד. אמור להיות מוחלף ע"י
כלי אחר (fedup) אשר סביר להניח שגם הוא יהיה בעייתי, לפחות בהתחלה.

ה-iso של גרסה 18 אלפא `אינו כולל יכולת שדרוג`_ וכעת הדרך המומלצת לשדרוג היא
`בעזרת yum`_. הבעיה ? תלויות שבורות אשר מונעות את השדרוג (לפחות במשך מספר הימים
שניסיתי). לא של חבילה השייכת
למאגר צד ג` אלא בסיסית הקשורה לתלויות סביבות העבודה של גנום - רכיב הבלוטות` של
Network Manager או אחת התלויות שלו.

אתם רוצים בודקים לגרסאות המוקדמות ? תנו לאמצעי השדרוג עדיפות. אני מאמץ מוקדם של
גרסאות חדשות, אך אין בכוונתי לשחזר מחדש את ההתקנה המורכבת שלי בכל פעם ששדרוג עומד
בפתח.

אין פלא שאני  עוזב את פדורה בד"כ בתקופות השדרוג.



.. _פדורה: http://fedoraproject.org/
.. _אינו כולל יכולת שדרוג: http://fedoraproject.org/wiki/Common_F18_bugs#No_upgrade_function_available_from_Fedora_17_to_Fedora_18_Alpha
.. _בעזרת yum: http://fedoraproject.org/wiki/Upgrading_Fedora_using_yum#Fedora_17_-.3E_Fedora_18
