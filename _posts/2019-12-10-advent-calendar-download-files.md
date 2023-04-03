---
layout: post
title: "Как скачать файл с помощью Selenide"
description: ""
category:
header-text: "Selenide Advent Calendar<br/>День 10"
tags: []
---
{% include JB/setup %}

Добрый вечер!

На дворе декабрь, и в сегодняшнем посте рождественского календаря Selenide мы поговорим о том, какие возможности 
для скачивания файлов есть в Selenide.

**UPD**  
Ниже описаны только два способа скачивания - [`HTTPGET`](#HTTPGET) и [`PROXY`](#PROXY). 
Позже [появился третий способ `FOLDER`](/2020/07/08/selenide-5.13.0/#new-file-download-mode-folder).
Возможно, вам нужен как раз он, если у вашей ссылки нет атрибута `href`, и прокси у вас не заводится.

<br>

# Как я могу скачать файл в моём тесте?

В какой-то момент нашей карьеры каждый из нас сталкивается с необходимостью скачать какой-то файл в тесте.

Как мы помним, в Selenium это было непросто, потому что для разных браузеров требуются разные настройки.  
Например, вот так выглядит создание профиля Firefox с нужными настройками:

```java
profile.setPreference("browser.download.dir", downloadPath);
profile.setPreference("browser.download.folderList", 2);
profile.setPreference("browser.download.manager.showWhenStarting", false);
profile.setPreference("browser.helperApps.alwaysAsk.force", false);
profile.setPreference("browser.helperApps.neverAsk.saveToDisk", mimeTypes);
profile.setPreference("browser.download.manager.focusWhenStarting",false);
profile.setPreference("browser.download.manager.useWindow", false);
profile.setPreference("browser.download.manager.showAlertOnComplete", false);
profile.setPreference("pdfjs.disabled", true);
```

### А в Selenide {#HTTPGET}
Проблема решается гораздо проще - методом `$.download()`.

Чтобы скачать файл, в Selenide достаточно просто вызвать метод:

```java
File report = element.download();
```

И Selenide автоматически сделает всё, что надо. Вам не придётся возиться со всплывающим окошком, которое спрашивает, 
куда сохранить файл, и потом закрывать его.

Selenide сохранит скачанный файл в папку `build/reports/tests`. Это та же папка, где Gradle генерирует результаты прогона тестов,
так что их как раз удобно видеть вместе.

Конечно, поменять эту папку тоже можно:

```java
Configuration.downloadsFolder = <desired location for downloaded files>;
```

### НО: {#PROXY}
Таким образом можно скачивать файлы только со ссылкой с атрибутом "href".  

Но что, если у меня ссылки с атрибутом "href"? Так бывает, например, когда файл скачивается в результате сабмита формы.
В этом случае можно скачивать файлы с помощью встроенного в селенид прокси-сервера.

Для начала нам нужно включить его (т.к. он по умолчанию выключен):

```java
Configuration.proxyEnabled = true;
Configuration.fileDownload = PROXY;
```

После этого мы снова можем вызывать метод `$.download()`, но теперь он стал более могущественным и не требует наличия атрибута "href":

```java
File report = element.download();
```

### Хозяйке на заметку:
Не забудьте увеличить таймаут, если собираетесь скачивать файл большого размера. 

Файл будет скачан в папку по умолчанию (что-то типа `C:\downloads and settings\downloads`).   
Таким образом, скачанный файл окажется в двух местах: `c:\downloads...` и `build/reports/tests`.

Если это для вас проблема, можете в конце теста удалить ненужную папку, чтобы очистить место на диске:

```java
FileUtils.deleteDirectory(new File(<папка, подлежащая удалению>));  
```

Узнать подробнее про механизмы скачивания файлов можно [тут](https://ru.selenide.org/2016/08/27/selenide-3.9.1/).



Maciej Grymuza (figrym@gmail.com)
