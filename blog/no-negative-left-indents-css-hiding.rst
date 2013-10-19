:slug: stop-negative-left-indent-css-hiding
:draft: 0
:datetime: 2012-10-14 01:32:31

.. --

=============================================================
Stop using negative left or text indents for css hiding
=============================================================

:lang: en
:tags: FLOSS|floss, BiDi, css
:excerpt:
    Using Negative left or text-indent for hiding in CSS is problematic when the
    direction is rtl, there's an alternative.

There's a common practice of using negative values for hiding. To hide an element
while maintaining layout one might use something like:

.. code:: css

    .popup {
        position: absolute;
        top: -1000px;
        left: -1000px;
    }


Another known trick is negative ``text-indent`` for hiding text while
keeping an image (plus, this `might hurt your ranking`_), e.g:

.. code:: css

    .logo {
        text-indent: -9999px;
        background-image: url("bla bla");
        overflow: hidden;
        width: 200px;
        height:60px;
    }

The problem ? The above yields an ugly and large horizontal scroll bar when the
document's ``direction`` is ``rtl``.

To make things worst, some services (like ShareThis used in the blog), set those
in scripts, which means it can't be overridden using css. I hide the scrollbar
in rtl but the width is still there, scrolling sideways in the Hebrew version
will reveal the fact.

There are solutions to those issues. For ``.popup`` above, just specifying the
negative ``top`` and removing ``left`` from css will have same effect.

For ``.logo`` above I sometimes prefer:

.. code:: css

    .logo {
        background-image: url("bla bla");
        line-height:800%;
        overflow: hidden;
        width: 200px;
        height:60px;
    }

This will keep the text below the height, and since ``overflow`` is
``hidden`` it won't be visible, while not breaking RTL documents.

.. _might hurt your ranking: http://luigimontanez.com/2010/stop-using-text-indent-css-trick/


.. --

=====================================================================
הפסיקו להשתמש בערכים שליליים עבור left ו-text-indent להסתרה ב-css
=====================================================================

:lang: he
:tags:  קוד פתוח|floss, דו-כיווניות|bidi, css
:excerpt:
    שימוש ב-left או text-indent שליליים להסתרת אלמנטים ב-css היא בעייתית כאשר
    הכיווניות היא מימין לשמאל, ישנה אפשרות אחרת.

שימוש בערכים שליליים להסתרה הוא מנהג ידוע . כדי להסתיר אלמנט, תוך שמירה על
ה-layout שלו יש שמשתמשים במשהו כמו:


.. code:: css

    .popup {
        position: absolute;
        top: -1000px;
        left: -1000px;
    }

שיטה נפוצה נוספת היא שימוש ב-``text-indent`` שלילי להסתרת טקסט תוך הצגת תמונה
(מה שגם עלול `לפגוע בדירוג שלכם`_). לדוגמא:

.. code:: css

    .logo {
        text-indent: -9999px;
        background-image: url("bla bla");
        overflow: hidden;
        width: 200px;
        height:60px;
    }

והבעיה ? הנ"ל גורם להופעת פס גלילה אופקי מכוער וארוך כאשר כיווניות המסמך היא
מימין לשמאל. 

כדי להוסיף חטא על פשע, יש שירותים (כגון ShareThis שמשמש כאן בבלוג) אשר קובעים
ערכים אלו בסקריפט, מה שמקשה מאוד על עקיפתם בעזרת css. אני מסתיר את פס הגלילה
בעזרת css, אך הרוחב עדיין קיים, כפי שתגלה גלילה אופקית באתר העברי.

קיימים פתרונות אחרים. עבור ``‎.popup`` ניתן להשתמש ב-``top`` שלילי מבלי לציין את
ה-``left``, התוצאה תהיה זהה.

עבור ``‎.logo`` אני מעדיף משהו בסגנון:

.. code:: css

    .logo {
        background-image: url("bla bla");
        line-height:800%;
        overflow: hidden;
        width: 200px;
        height:60px;
    }

זה ימקם את הטקסט מתחת לגובה האלמנט. מאחר ו-``overflow`` הוא ``hidden`` הטקסט
יוסתר ולא יופיע פס הגלילה.

.. _לפגוע בדירוג שלכם: http://luigimontanez.com/2010/stop-using-text-indent-css-trick/
