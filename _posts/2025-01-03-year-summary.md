---
layout: post
title: "Итоги года"
description: ""
category:
header-text: "2024"
tags: []
---
{% include JB/setup %}

С Новым Годом!

Чёртов 2024 наконец закончился, самое время подвести итоги года.

* [Вехи](#milestones)
* [Эльфы](#committers)
* [Маги](#playwrightium)
* [Палантиры](#videos)
* [Племена](#companies)
* [Люди](#statistics)

## Вехи {#milestones}
За этот год мы выпустили 18 релизов (от 7.0.5 до 7.6.1) и запилили несколько важных фич:
* [Видео рекордер](/2024/11/24/selenide-7.6.0/#video-recorder)
* [Скачивание файлов из Selenium Grid](/2024/02/27/selenide-7.2.0/#download-files-to-folder-in-selenium-grid)
* [Новый способ скачивания файлов через CDP](/2024/02/07/selenide-7.1.0/#download-files-with-cdp) - причём ещё и [для Grid и Selenoid](/2024/02/27/selenide-7.2.0/#download-files-remotely-with-cdp)
* [Открывать браузер с новой конфигурацией](/2024/09/15/selenide-7.5.0/#new-configuration-for-every-browser)
* Таки [надругались над Селенидом ¯¯_(ツ)_/¯¯](/2024/02/07/selenide-7.1.0/#if-with-timeout)

<br>

## Эльфы {#committers}

Весь этот год неустанно трудились и складывали подарки под ёлочку вот эти ребята. 
Это крайне важно для проекта, несмотря на то, что их имена зачастую даже не видны в пресс-релизах, ибо многие из этих
изменений внутренние или слишком технические. А иногда даже вовсе и не мержатся. 

Но именно на них держится Селенид!

#### Serhii Bryt

{: .list-right }
- [Скачивание файлов через CDP](https://github.com/selenide/selenide/pull/2567)
- [Видео рекордер](https://github.com/selenide/selenide/pull/2768)
- Статья [Чего вы не знали о Selenide](https://dou.ua/forums/topic/51075/)

{: .after-list-right }
&nbsp;

#### Boris Osipov

{: .list-right }
- [Animated Condition](https://github.com/selenide/selenide/pull/2556)
- [Run appium test on Browserstack](https://github.com/selenide/selenide/pull/2820)
- [Fix deprecated github actions](https://github.com/selenide/selenide/pull/2826)
- Код ревью для [PR 2801](https://github.com/selenide/selenide/pull/2801/files)
- Код ревью для [PR 2567](https://github.com/selenide/selenide/pull/2567/files)
- Код ревью для [PR 2768](https://github.com/selenide/selenide/pull/2768)

{: .after-list-right }
&nbsp;

#### Petro Ovcharenko

{: .list-right }
- [Fix remote Appium browser](https://github.com/selenide/selenide/pull/2664)
- [add method `WebDriverRunner. setDriver`](https://github.com/selenide/selenide/pull/2666)
- [fix before/after events order](https://github.com/selenide/selenide/pull/2672)
- [Fix CDP download for custom browsers](https://github.com/selenide/selenide/pull/2728)
- [Fix problem with AppiumPageFactory](https://github.com/selenide/selenide/pull/2879)
- [fix double click with appium](https://github.com/selenide/selenide/pull/2905)

{: .after-list-right }
&nbsp;

#### Yaraslau Lazakovich

{: .list-right }
- [Bump checkstyle to 10.17.0](https://github.com/selenide/selenide/pull/2753)
- [bump Gradle to 8.11.1](https://github.com/selenide/selenide/pull/2899)

{: .after-list-right }
&nbsp;

#### Aliaksandr Rasolka

{: .list-right }
- [Add getSearchLocator command](https://github.com/selenide/selenide/pull/2593)
- [Add dom attribute and property conditions](https://github.com/selenide/selenide/pull/2783)

{: .after-list-right }
&nbsp;

#### donnieHub

{: .list-right }
- [added method `$.scroll()`](https://github.com/selenide/selenide/pull/2809)

{: .after-list-right }
&nbsp;

#### Daniil Moiseev

{: .list-right }
- [Support special space chars](https://github.com/selenide/selenide/pull/2858)
- [add `because` function](https://github.com/selenide/selenide/pull/2853)

{: .after-list-right }
&nbsp;

#### Erik Jõgi & Vlad Ogorodnik:

{: .list-right }
- [`input` event from `select`](https://github.com/selenide/selenide/pull/2813)

{: .after-list-right }
&nbsp;


Ревью пулреквестов, критика изменений, описание багов - это большая работа на самом деле!  
Эта работа незаметна, но важна. 

Спасибо всем вам!

<br>

## Маги {#playwrightium}

Знаковое событие для развития Селенида - это появление библиотеки [Playwrightium](https://www.youtube.com/watch?v=Mn7pP_jHJEE&ab_channel=ConfEngine).

Playwright сейчас на хайпе, ничего не поделаешь. 
А люди теперь имеют возможность продолжать использовать Селенид, а под капотом менять реализацию:
по чётным дням Selenium, по нечётным Playwright - как чёрт на душу положит. :) 

И снова спасибо [Sergey Brit](https://github.com/britka) за [Playwrightium](https://github.com/britka/playwrightium)!

<br>

## Палантиры {#videos}
* В этом году произошло важное для меня событие: на конференции SeleniumConf прозвучал доклад "[Как перейти с Selenium на Selenide](https://www.youtube.com/watch?v=roL1ciaNWtY&list=PL9Z-JgiTsOYRJCXuEOGXLH1w1oImoprnq&ab_channel=ConfEngine)". Ну прикиньте, какой поворот! :) 
* И что тоже здорово, на другой конференции по автоматизации LambdaTest [рассказал про Селенид](https://www.youtube.com/watch?v=CKSl2NRrMVg&ab_channel=LambdaTest)

Увы, презентации на английском мне удаётся делать гораздо реже, чем на русском, так что эти два - достижение. 
Аудитория Селенида растёт [и за бугром](/users.html#all). :)

Кстати, в этом году были найдены видосы про Селенид и [на испанском](https://www.youtube.com/watch?v=j-uaUwoo90k&ab_channel=JoseDiaz), 
и даже [на турецком](https://www.youtube.com/watch?v=zDw0iGdSghY&ab_channel=TechProEducationTR)!

<br>

## Племена {#companies}

В этом году у меня дошли руки немного пополнить список компаний, использующих Селенид.  
Удивительно, что компаний из [Америки](/users.html#all), 
[Европы](/users.html#europe) и 
[остального мира](/users.html#asia) оказалось намного больше, чем я предполагал!

<br>

## Люди {#statistics}

Ежемесячное количество скачиваний побило новый рекорд и выросло с 877 тыщ в прошлом январе до 1.3 миллиона в октябре.

<center>
  <img src="{{ BASE_PATH }}/images/2024/11/selenide.downloads.png" width="800"/>
</center>

<br>

Счастливого вам нового года, и да не встретятся вам орки на вашем пути!

<br>

[Андрей Солнцев](http://asolntsev.github.io/)

ru.selenide.org

<style>
  .blog_post_content h4 {
    float: left;
  }
  .blog_post_content .list-right {
    float: right;
    width: 29vw;
  }
  .blog_post_content .after-list-right {
    clear: both;
    height: 1px;
  }
</style>