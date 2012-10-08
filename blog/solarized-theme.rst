:slug: solarized-theme
:draft: 0
:datetime: 2012-10-02 14:44:34
:image: img/posts/solarized-yinyang.png

.. --

=============================================================
Solarized Theme
=============================================================

:lang: en
:tags: FLOSS|floss, Solarized, Vim
:excerpt:
    Solarized has been for a long time one of my favorite color scheme in
    terminals and editors.

Solarized_ is my favorite color scheme, used in my terminal and vim setups. It
features:

* Selective contrast (reduce brightness contrast, retaining contrasting hues for
  syntax highlighting).
* Light and dark themes, each keeping the selective contrast.
* 16/5 palette modes (16 color palette, scales down to 5 for design work etc.).

It provides configuration for various editors and IDEs (Vim, Emacs, NetBeans
etc.) while one can find additional resources (Gedit_, Eclipse_).

.. _Solarized: http://ethanschoonover.com/solarized
.. _Eclipse: http://xorcode.com/2011/04/11/solarized-vim-eclipse-ubuntu/
.. _Gedit: http://www.webupd8.org/2011/04/solarized-must-have-color-paletter-for.html

Here's a shot of my Vim which used the dark theme, while editing this post:

.. image:: /img/posts/vim_solarized.png

My site is based on that color scheme as well, here's the less_ snippet:

.. _less: http://lesscss.org/

.. code:: css

    /* Solarized */
    @base03:    #002b36;
    @base02:    #073642;
    @base01:    #586e75;
    @base00:    #657b83;
    @base0:     #839496;
    @base1:     #93a1a1;
    @base2:     #eee8d5;
    @base3:     #fdf6e3;
    @yellow:    #b58900;
    @orange:    #cb4b16;
    @red:       #dc322f;
    @magenta:   #d33682;
    @violet:    #6c71c4;
    @blue:      #268bd2;
    @cyan:      #2aa198;
    @green:     #859900;

    .rebase(@rebase03,@rebase02,@rebase01,@rebase00,@rebase0,@rebase1,@rebase2,@rebase3) {
        background-color:@rebase03;
        color:@rebase0;
        /* { color:@rebase0; }*/
        h1,h2,h3,h4,h5,h6 { color:@rebase1; border-color: @rebase0; }
        a, a:active, a:visited { color: @rebase1; }
    }

    .accentize(@accent) {
        a, a:active, a:visited, code.url { color: @accent; }
        h1,h2,h3,h4,h5,h6 {color:@accent; text-shadow: @base1 1px 0px 1px;  }
        html[dir=rtl] & {
        h1,h2,h3,h4,h5,h6 { text-shadow: @base1 -1px 0px 1px; }
        }   
    }

    /* light is default mode, so pair with general html definition */
    .light { .rebase(@base3,@base2,@base1,@base0,@base01,@base01,@base02,@base03)}
    .dark  { .rebase(@base03,@base02,@base01,@base00,@base0,@base1,@base2,@base3)}
    


.. --

=============================================================
ערכת הנושא Solarized
=============================================================

:lang: he
:tags:  קוד פתוח|floss, Solarized, Vim
:excerpt:
    Solarized הפכה מזה זמן מה לאחת מערכות הנושא האהובות עלי הן במסוף והן בעורכי
    הטקסט השונים.


Solarized_ היא ערכת הנושא החביבה עלי אשר משמשת אותי במסוף ובעורכי הטקסט
השונים.  בין תכונותיה:

* ניגודיות סלקטיבית (מפחיתה ניגודיות עבור בהירות, אך שומרת על ניגודויות הצבעים בצביעת
  תחביר).
* ערכות נושא לרקע בהיר וכהה.
* לוח צבעים 16/5 (16 צבעים בסיסיים, ניתנים להפחתה עד 5 לעיצוב וכו').

ניתן למצוא הגדרות עבור עורכי טקסט וסביבות פיתוח שונות (כגון Vim, Emacs,
NetBeans ועוד) מקושרות מהעמוד הרשמי של ערכת הנושא כמו גם משאבים לא רשמיים
(Gedit_, Eclipse_).


.. _Solarized: http://ethanschoonover.com/solarized
.. _Eclipse: http://xorcode.com/2011/04/11/solarized-vim-eclipse-ubuntu/
.. _Gedit: http://www.webupd8.org/2011/04/solarized-must-have-color-paletter-for.html

הנה תצלום מסך של Vim עם ערכת הנושא הכהה, בזמן עריכת פוסט זה:

.. image:: /img/posts/vim_solarized.png

האתר שלי מבוסס גם הוא על ערכת הצבעים הזו, הנה קטע מקובץ ה- less_:

.. code:: css

    /* Solarized */
    @base03:    #002b36;
    @base02:    #073642;
    @base01:    #586e75;
    @base00:    #657b83;
    @base0:     #839496;
    @base1:     #93a1a1;
    @base2:     #eee8d5;
    @base3:     #fdf6e3;
    @yellow:    #b58900;
    @orange:    #cb4b16;
    @red:       #dc322f;
    @magenta:   #d33682;
    @violet:    #6c71c4;
    @blue:      #268bd2;
    @cyan:      #2aa198;
    @green:     #859900;

    .rebase(@rebase03,@rebase02,@rebase01,@rebase00,@rebase0,@rebase1,@rebase2,@rebase3) {
        background-color:@rebase03;
        color:@rebase0;
        /* { color:@rebase0; }*/
        h1,h2,h3,h4,h5,h6 { color:@rebase1; border-color: @rebase0; }
        a, a:active, a:visited { color: @rebase1; }
    }

    .accentize(@accent) {
        a, a:active, a:visited, code.url { color: @accent; }
        h1,h2,h3,h4,h5,h6 {color:@accent; text-shadow: @base1 1px 0px 1px;  }
        html[dir=rtl] & {
        h1,h2,h3,h4,h5,h6 { text-shadow: @base1 -1px 0px 1px; }
        }   
    }

    /* light is default mode, so pair with general html definition */
    .light { .rebase(@base3,@base2,@base1,@base0,@base01,@base01,@base02,@base03)}
    .dark  { .rebase(@base03,@base02,@base01,@base00,@base0,@base1,@base2,@base3)}
    

.. _less: http://lesscss.org/
