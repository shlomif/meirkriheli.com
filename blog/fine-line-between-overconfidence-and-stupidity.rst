:slug: fine-line-between-overconfidence-and-stupidity
:draft: 0
:datetime: 2013-07-20 19:32:48

.. --

=============================================================
Fine line between overconfidence and stupidity
=============================================================

:lang: en
:tags:  System administrator|sysadmin, Ubuntu, whatsup.org.il|whatsup, FLOSS

:excerpt:
    Whatsup.org.il_ was served by Ubuntu 6.06 for a very long time. Had hard
    time getting to the hosting location, but upgrade was long over due.


Whatsup.org.il_ was served by Ubuntu 6.06 for a very long time, it was a LTS_
release, but it's 5 year support expired long time ago, and Ubuntu had several
LTS releases since.

When upgrading servers, it's best to have physical access to the machine in case
something goes wrong (and many things can, and will) and the machine won't boot.
However we had hard time getting to Bezeq Internationals' hosting farm.

In addition, when a server is behind so many releases, sometimes it's best to
backup everything and reinstall from scratch. But that would mandate physical
access as well.

After dragging our feet for a long time, I had enough. In what to could be
described as overconfidence or stupidity, I've decided to do in place release
upgrades over an ssh connection from 6.06 to the next LTS up to the latest,
12.04.

It's taken several weeks, with long pauses between each release upgrade.

Unfortunately it wasn't a smooth ride. `do-release-upgrade` in 6.06 was broken,
and in addition that release was moved from the normal servers to
`old-releases`_, so `do-release-update` couldn't find the needed data.

Those required manual intervention: adding `sleep` to the script and while it's
waiting, do some manual editing to fix the problems and allow it to continue
(much like the process described at question `#62184`_, regardless of different
versions).

During one release upgrade, I've managed during the main PG cluster
update to drop the main PostgreSQL cluster (which used as the db for some other
sites hosted on that server, like debian.org.il_), but that was restored from
the backups (yeah, we have those too, thanks Yehuda).

After the upgrade to the 12.04, lighttpd stop working, an easy fix was found in
bug `#1067315`_ (why wasn't it fixed? Looks like an easy picking).

The upgrade from PHP4 to PHP5 had it's own casualties in the crappy old PostNuke
(like the Wiki), and some code fixes had to be applied manually.

After several virtual heart attacks the server is on 12.04 release, and things are
in working order. Would I do it again? Not sure, however necessity is the mother
of invention ;-)


.. _whatsup.org.il: http://whatsup.org.il
.. _LTS: https://wiki.ubuntu.com/LTS
.. _old-releases: http://old-releases.ubuntu.com/ubuntu/
.. _#62184: https://answers.launchpad.net/ubuntu/+source/update-manager/+question/62184
.. _debian.org.il: http://debian.org.il
.. _#1067315: https://bugs.launchpad.net/ubuntu/+source/lighttpd/+bug/1067315

.. --

=============================================================
קו דק מפריד בין בטחון עצמי מופרז לטיפשות
=============================================================

:lang: he
:tags:  ניהול מערכת|sysadmin, אובונטו|ubuntu, whatsup.org.il|whatsup, קוד פתוח|floss

:excerpt:
    השרת של Whatsup.org.il_ הריץ אובונטו 6.06 במשך תקופה ארוכה. היה לי קשה להגיע
    לחווה אשר מארחת את השרת, אך השדרוג עבר זמנו והיה צריך להתבצע לפני זמן רב.

השרת של Whatsup.org.il_ הריץ אובונטו 6.06 LTS_ במשך תקופה ארוכה, אך תקופת
התמיכה, 5 שנים, פגה לפני זמן רב ואובונטו שחררו מספר גרסאות LTS מאז.

כאשר משדרגים שרתים כדאי מאוד שתהיה גישה פיזית למכונה במקרה שמשהו ישתבש (דברים
רבים עשויים להשתבש ואכן משתבשים בפועל) והמכונה לא תאתחל כראוי. אך היה לנו קשה
להגיע לחוות השרתים של בזק בינלאומי אשר מארחת אותנו.

בנוסף, כאשר שרת נמצא בפיגור כל כך גדול של גרסאות, כדאי פעמים רבות לגבות את הכל
ולבצע התקנה נקיה ־ גם כאן גישה פיזית די נדרשת.

לאחר שגררנו את רגלינו במשך זמן רב, נמאס לי. במה שאפשר לתאר כעודף ביטחון עצמי או
טיפשות, החלטתי לבצע את השדרוגים מעל חיבור ssh מגרסה 6.06 דרך גרסאות
ה-LTS הבאות עד לאחרונה, 12.04.

התהליך ארך מספר שבועות, עם הפסקות ארוכות בין שדרוג אחד למשנהו.

למרבה הצער לא הכל הלך חלק. `do-release-upgrade` בגרסה 6.06 היה שבור ובנוסף מאגרי
הגרסה (הנדרשים בתהליך השדרוג) לא היה זמינים בשרתי אובונטו הרגילים, שם הפקודה
מנסה למצוא אותם, אלא עברו אל `old-releases`_.

הבעיות הנ"ל דרשו התערבות ידנית: הוספת `sleep` לקוד השדרוג, בזמן שהתהליך המתין
לבצע מספרים שינויים ידניים בקבצי תצורה לתיקון הבעיות ואז לתת לו להמשיך (די דומה
לתהליך המתואר בשאלה `#62184`_, למרות הגרסאות השונות).

במהלך אחד השדרוגים הצלחתי למחוק את ה-cluster הראשי של PostgreSQL (אשר משמש
כבסיס הנתונים לאתרים נוספים המתארחים בשרת, כמו debian.org.il_). בסיס הנתונים
שוחזר מהגיבוי (כן, יש לנו כאלה, הודות ליהודה).

לאחר השדרוג לגרסה 12.04 שירות ה-lighttpd הפסיק לעבוד. פתרון קל נמצא בבאג
`#1067315`_ (מוזר מדוע לא טופלה הבעיה, נראית די פשוטה לפתרון).

השדרוג מ־PHP4 ל־PHP5 גבה קורבנות ממערכת הפוסט ניוק המחורבנת שפועלת על השרת (כמו
הוויקי) ודרש מספר תיקוני קוד בחלקים שונים של המערכת.

לאחר מספר התקפי לב קרובים השרת מריץ את ה-LTS האחרון והאתרים במצב שמיש. האם הייתי
עושה זאת שוב? לא בטוח, אך ההכרח הוא אבי ההמצאה ;-)

.. _whatsup.org.il: http://whatsup.org.il
.. _LTS: https://wiki.ubuntu.com/LTS
.. _old-releases: http://old-releases.ubuntu.com/ubuntu/
.. _#62184: https://answers.launchpad.net/ubuntu/+source/update-manager/+question/62184
.. _debian.org.il: http://debian.org.il
.. _#1067315: https://bugs.launchpad.net/ubuntu/+source/lighttpd/+bug/1067315
