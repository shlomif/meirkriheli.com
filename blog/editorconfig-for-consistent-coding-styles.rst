:slug: editorconfig-for-consistent-coding-styles
:draft: 0
:datetime: 2014-08-08 10:58:26
:image: img/posts/editorconfig.png

.. --

=============================================================
EditorConfig for consistent coding styles
=============================================================

:lang: en
:tags: FLOSS|floss, EditorConfig, IDE, Vim, Emacs, Gedit, JetBrains, Coding Style|coding-style
:excerpt:
    Keeping consistent coding style between multiple developers working on the
    same project is not a simple task, specially with todays proliferation of
    editors and IDEs.

Keeping consistent coding style between multiple developers working on the same
project is not a simple task, specially with todays proliferation of editors and
IDEs.

While there's support for that with `Vim modelines`_ or `Emacs Local Variables`_
(and other editors defining their own), this is usually done on per file basis
and not supported well (if at all) in other editors. In addition, 
`Security is a problem`_ with modelines and `Local Variables`_.

EditorConfig_ is a possible solution. It looks for an  INI style file named
`.editorconfig`  (usually placed at the root of the project).

There's a core library (implementations of C, Python, JS and Java exists) for
developing plugins for various IDEs. When given an absolute path to a file
it'll look for `.editorconfig` file with the sections relevant to the file and
output the proper properties for the file. 

For example, given the following `.editorconfig` file for a project:

.. code:: ini

    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true

    [*.md]
    trim_trailing_whitespace = false

Running editorconfig on some file in the project:

.. code:: bash

    $ editorconfig ./src/app/app.js
    indent_style=space
    indent_size=2
    end_of_line=lf
    charset=utf-8
    trim_trailing_whitespace=true
    insert_final_newline=true
    tab_width=2

EditorConfig supports glob and match patterns for file, definition the following
attributes:

* indent_style
* indent_size
* tab_width
* end_of_line
* charset
* trim_trailing_whitespace
* insert_final_newline

Plugins using one of the core implementations for various editors and IDEs
exist, including:

* Atom 
* Code::Blocks 
* Emacs 
* Geany 
* Gedit 
* JetBrain 
* jEdit 
* Notepad++ 
* Sublime Text 
* TextMate 
* Vim 
* Visual Studio 

It's nice to see project generators including this file in their templates, for
example slush-angular_ and yeoman's generator-angular_.

P.S.
Agreeing on an acceptable coding style another holy war

P.P.S
Let's not forget the obligatory XKCD:

.. image:: http://imgs.xkcd.com/comics/standards.png 


.. _Vim modelines: http://vimdoc.sourceforge.net/htmldoc/usr_21.html#21.6
.. _Emacs Local Variables: http://www.gnu.org/software/emacs/manual/html_node/emacs/File-Variables.html#File-Variables
.. _Security is a problem: http://usevim.com/2012/03/28/modelines/
.. _Local Variables: http://www.gnu.org/software/emacs/manual/html_node/emacs/Safe-File-Variables.html#Safe-File-Variables
.. _EditorConfig: http://editorconfig.org/
.. _slush-angular: https://github.com/slushjs/slush-angular/blob/master/templates/_editorconfig
.. _generator-angular: https://github.com/yeoman/generator-angular/blob/master/.editorconfig

.. --

=============================================================
EditorConfig לסגנון תיעוד אחיד
=============================================================

:lang: he
:tags:  קוד פתוח|floss, EditorConfig, IDE, Vim, Emacs, Gedit, JetBrains, סגנון תכנות|coding-style
:excerpt:
    שמירה על סגנון תכנות אחיד (רווחים מול טאבים, גודל טאב וכד') בין כל המפתחים
    העובדים על פרוייקט מסויים אינו משימה פשוטה, במיוחד כאשר לוקחים בחשבון את
    ריבוי עורכי הטקסט וסביבות הפיתוח המשמשים אותנו.

שמירה על סגנון תכנות אחיד (רווחים מול טאבים, גודל טאב וכד') בין כל המפתחים
העובדים על פרוייקט מסויים אינו משימה פשוטה, במיוחד כאשר לוקחים בחשבון את ריבוי
עורכי הטקסט וסביבות הפיתוח המשמשים אותנו.

גם אם לוקחים בחשבון תכונות כמו `Vim modelines`_ או `Emacs Local Variables`_
(כאשר כלים אחרים מגדירים תחביר משלהם), זה בד"כ מוגדר ברמת קובץ בודד ולא בפרוייקט
כולו ולוקה בתמיכה מצד מגוון כלי־הפיתוח האחרים. בנוסף `אבטחה מהווה בעיה`_ בשימוש
ב־modelines ו־`Local Variables`_.

EditorConfig_ מספק פתרון אפשרי לבעיה. הוא מחפש קובץ INI בשם `‎.editorconfig`
במעלה התיקיות (ממוקם בד"כ בשורש הפרוייקט).

יש ספריית ליבה (מויישמת ב־C, פייתון, ג''אווהסריפט וג'אווה) המשמשת לפתח תוספים
עבור מגוון עורכים וסביבות פיתוח. בהינתן נתיב מוחלט לקובץ בפרוייקט יתבצע איתור
קובץ ה-`‎.editorconfig` והמדורים הרלוונטים בו עבורו כאשר התוצאה היא פלט המכיל את
ההגדרות המתאימות עבור הקובץ.

ניקח לדוגמא את קובץ ה־`‎.editorconfig` הבא:

.. code:: ini

    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true

    [*.md]
    trim_trailing_whitespace = false

הרצת הפקודה editorconfig עבור קובץ מסויים בפרוייקט תפיק:

.. code:: bash

    $ editorconfig ./src/app/app.js
    indent_style=space
    indent_size=2
    end_of_line=lf
    charset=utf-8
    trim_trailing_whitespace=true
    insert_final_newline=true
    tab_width=2

EditorConfig תומך בתבניות להתאמת שמות קבצים ומאפשר הגדרת המאפיינים הבאים:

* indent_style
* indent_size
* tab_width
* end_of_line
* charset
* trim_trailing_whitespace
* insert_final_newline

תוספים, אשר משתמשים באחת מספריות הליבה, קיימים עבור העורכים וסביבות הפיתוח
הבאים:

* Atom 
* Code::Blocks 
* Emacs 
* Geany 
* Gedit 
* JetBrain 
* jEdit 
* Notepad++ 
* Sublime Text 
* TextMate 
* Vim 
* Visual Studio 

נחמד לראות מחוללי פרוייקטים כוללים את הקובץ הזה בתבניות שלהם, לדוגמא:
slush-angular_  ו־yeoman generator-angular_.

נ"ב
הסכמה על סגנון תכנות המקובל על כולם זו מלחמת קודש נפרד

ננ"ב
לא נשכח את ה-XKCD המתבקש:

.. image:: http://imgs.xkcd.com/comics/standards.png 

.. _Vim modelines: http://vimdoc.sourceforge.net/htmldoc/usr_21.html#21.6
.. _Emacs Local Variables: http://www.gnu.org/software/emacs/manual/html_node/emacs/File-Variables.html#File-Variables
.. _אבטחה מהווה בעיה: http://usevim.com/2012/03/28/modelines/
.. _Local Variables: http://www.gnu.org/software/emacs/manual/html_node/emacs/Safe-File-Variables.html#Safe-File-Variables
.. _EditorConfig: http://editorconfig.org/
.. _slush-angular: https://github.com/slushjs/slush-angular/blob/master/templates/_editorconfig
.. _generator-angular: https://github.com/yeoman/generator-angular/blob/master/.editorconfig
