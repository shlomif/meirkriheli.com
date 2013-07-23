:slug: disqus-and-rtl-no-dice
:draft: 0
:datetime: 2013-07-23 12:46:46

.. --

=============================================================
Disqus and RTL: No dice
=============================================================

:lang: en
:tags: RTL, Hebrew, Translation, Disqus, FLOSS|floss 
:excerpt:
    Old Disqus added the content to the page, thus allowing customization of the
    comments system, which is what I've done for proper Right-to-left layout.
    With the new Disqus that's not an option any more.


The previous Disqus added the content of the commenting system into the
page's DOM, which allowed overriding and adjusting the CSS.

Since this web site is bilingual, the other language being Hebrew, I've
used CSS to properly lay out the elements for Right-to-left_ (RTL). Here's the
`lesscss` excerpt I've used:


.. code:: scss

    html[dir=rtl] {
      #dsq-content ul, #dsq-content li, #dsq-content ol, #dsq-content cite,
      #dsq-content div, #dsq-content table, #dsq-content td, #dsq-content th,
      #dsq-content p, #dsq-content a, #dsq-content img, #dsq-content caption {
        text-align: right; }
      #dsq-content {
        .dsq-options span { margin-right: 0; margin-left: 10px; }
        .dsq-request-user-logout { float: left; }
        .dsq-request-user-name { padding: 0.25em 0.5em 0 0; vertical-align: top; direction:ltr }
        .dsq-post-footer .dsq-button { float: left; margin-right: 3px; margin-left:0;}
        .dsq-attach-media { float: right;}
        @dsq-margin: 30px;
        .dsq-comment { margin-left:0;}
        .dsq-depth-1 { margin-left:0 !important; margin-right: @dsq-margin;  }
        .dsq-depth-2 { margin-left:0 !important; margin-right: @dsq-margin * 2;  }
        .dsq-depth-3 { margin-left:0 !important; margin-right: @dsq-margin * 3;  }
        .dsq-depth-4 { margin-left:0 !important; margin-right: @dsq-margin * 4;  }

        .dsq-comment-hide-thread, .dsq-comment-show-thread {
          left:0; right: auto; text-indent: 0;
        }
      }
    }

.. _Right-to-left: http://en.wikipedia.org/wiki/Right-to-left

But that's all gone with the new Disqus - :code:`iframe` is used now, which
prevents usage of the above technique.

Contacting Disqus' support regarding the issue, and the response I've got is:

"*there is no concrete timeline for when this feature will be available*"


I've offered my help, since I have the domain knowledge and helped other projects
in the past with RTL issues, but got a response saying they are aware of it,
will look into the possibility of addding RTL support, and will be in touch if
an opportunity for collaboration arises.

I'm on Disqus' Transifex Hebrew team, but I see no point in helping with
translations as long as the layout is wrong.

.. --

=============================================================
Disqus ותמיכה בדו־כיווניות: לא בבית ספרנו
=============================================================

:lang: he
:tags:  דו-כיווניות|rtl, עברית|hebrew, תרגום|translation, Disqus, קוד פתוח|floss
:excerpt:
    Disqus הישן הוסיף את התוכן לעמוד, מה שאפשר התאמה של מערכת התגובות, תכונה
    שניצלתי להתאמת התצוגה בכיווניות ימין־שמאל. ה־Disqus החדש ביטל את היכולת הזו.

Disqus הישן הוסיף את תוכן מערכת התגובות ל-DOM של העמוד, מה שאפשר שינויים והתאמות
בעזרת CSS.

מאחר ואתר זה הוא דו־לשוני, עברית ואנגלית, השתמשתי ב־CSS להתאמת מערכת
התגובות כאשר הכיווניות היא ימין־שמאל. הנה קוד ה־`lesscss` אשר שימש אותי לכך:


.. code:: scss

    html[dir=rtl] {
      #dsq-content ul, #dsq-content li, #dsq-content ol, #dsq-content cite,
      #dsq-content div, #dsq-content table, #dsq-content td, #dsq-content th,
      #dsq-content p, #dsq-content a, #dsq-content img, #dsq-content caption {
        text-align: right; }
      #dsq-content {
        .dsq-options span { margin-right: 0; margin-left: 10px; }
        .dsq-request-user-logout { float: left; }
        .dsq-request-user-name { padding: 0.25em 0.5em 0 0; vertical-align: top; direction:ltr }
        .dsq-post-footer .dsq-button { float: left; margin-right: 3px; margin-left:0;}
        .dsq-attach-media { float: right;}
        @dsq-margin: 30px;
        .dsq-comment { margin-left:0;}
        .dsq-depth-1 { margin-left:0 !important; margin-right: @dsq-margin;  }
        .dsq-depth-2 { margin-left:0 !important; margin-right: @dsq-margin * 2;  }
        .dsq-depth-3 { margin-left:0 !important; margin-right: @dsq-margin * 3;  }
        .dsq-depth-4 { margin-left:0 !important; margin-right: @dsq-margin * 4;  }

        .dsq-comment-hide-thread, .dsq-comment-show-thread {
          left:0; right: auto; text-indent: 0;
        }
      }
    }


יכולת התאמה זו חלפה עם הצגת ה־Disqus החדש ־ :code:`iframe` משמש כעת להטמעת
התגובות, מה שמונע את השימוש בטכניקה הנ"ל. יצירת קשר עם התמיכה של Disqus הניבה את
התשובה:

"*אין לוח זמנים מוגדר לזמינות תכונה זו*"

הצעתי להם את עזרתי בנושא, מאחר ואני בעל ניסיון בתחום ותרמתי לפרוייקטים נוספים
בעבר בנושאי דו־כיווניות, והתשובה? הם מודעים לנושא, יבדקו את אפשרות הוספת התמיכה
בדו־כיווניות ויהיו איתי בקשר אם תתעורר האפשרות לשיתוף פעולה.

אני חבר בצוות התרגום לעברית של Disqus ב־Transifex, אך איני מוצא טעם בעזרה בתרגום
כל עוד המערכת לא עובדת כראוי בכיווניות ימין־שמאל.
