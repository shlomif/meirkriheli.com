:slug: relative-line-numbers-in-vim
:draft: 0
:datetime: 2014-06-22 03:04:13
:image: img/posts/vim-relative-numbersmall.png

.. --

=============================================================
Relative line numbers in Vim
=============================================================

:lang: en
:tags: FLOSS|floss, Vim
:excerpt:
    Using relative line numbers in Vim can help you navigate and edit code
    faster.

As we all know, Vim movements and editing commands takes into account the
numbers preceding them. To move 15 lines up, one can issue the command ``15k``
and to indent the next 5 lines use ``5>>``.

Counting the line numbers is not always fun though - this is where `relative
numbers` introduced in Vim 7.3 comes in handy. Enable it with ``:set
relativenumber`` (or ``:set rnu``).

Take into account the next screen shot containing a markdown
list of some html elements, and I want to indent all the table related elements
(the line with `th`).  I'm already on the `table` line, so how many lines should I
indent ?

.. image:: /img/posts/vim-line-number.png 

Let's turn on relative numbering:

.. image:: /img/posts/vim-relative-number.png 

Now it's easy to see that `th` is 9 lines down, so I need to indent 10 lines
(including the current one), hence ``10>>``.

If I wanted to delete the current line up to (and including `blockquote`) one can
easily see it's 7 lines up, so ``d7k``.

To return to normal line numbering, use ``:set norelativenumber`` (or ``:set
nornu``), to toggle relative numbers state, use  ``:set relativenumber!`` or
``:set rnu!``).

For more information, as usual, ``:h relativenumber``.
.. --

=============================================================
מספרי שורה יחסיים ב־Vim
=============================================================

:lang: he
:tags:  קוד פתוח|floss, Vim
:excerpt:
    שימוש במספרי שורה יחסיים ב־Vim יעזור לכם לנווט ולערוך קוד בצורה מהירה יותר.

כידוע לנו פקודות תנועה ועריכה ב־Vim לוקחות בחשבון את המספר אשר בא לפניהן.
לדוגמא, כדי לנוע 15 שורות למעלה אפשר להשתמש בפקודה ``15k`` וכדי להזיח פנימה את 5
השורות הבאות משתמשים ב־ ``5>>``.

מצד שני, ספירת או חישוב השורות אינה משימה מהנה במיוחד וגם לא מחוייבת המציאות - מספור שורה
יחסי, אשר הוצג ב־Vim 7.3, בא לעזרתנו. מפעילים אותה בעזרת ``:set
relativenumber`` (או ``:set rnu``).

ניקח בחשבון את תצלום המסך הבא אשר כולל markdown עם רשימת אלמנטי html וברצוני
להזיח פנימה את כל האלמנטים הקשורים לטבלה (השורה הכוללת `th`). אני נמצא כבר על
אלמנט ה־`table` אז כמה שורות עלי להזיח ?

.. image:: /img/posts/vim-line-number.png

הבה נפעיל את מספור השורה היחסי:

.. image:: /img/posts/vim-relative-number.png

כעת קל לראות שאלמנט ה־`th` נמצא תשע שורות למטה, לכן עלי להזיח 10 שורות (כולל
הנוכחית), כלומר ``10>>``.

אם רציתי למחוק מהשורה הנוכחית למעלה, עד וכולל אלמנט ה־ `blockquote` ניתן לראות
בקלות שמדובר ב־7 שורות למעלה, לכן  ``d7k``.

כדי לחזור למספור שורה נורמלי יש להשתמש ב־  ``:set norelativenumber`` (או ``:set
nornu`` (וכדי להחליף בין המצבים ``:set relativenumber!`` או ``:set rnu!``).

למידע נוסף, כרגיל, ``:h relativenumber``.

