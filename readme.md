# Find Duplicated Files

A script for NodeJS to find duplicated files in any directory.

Usage
-----

Download [the script](https://raw.githubusercontent.com/ZitRos/utils-find-duplicates/master/index.js)
(or clone [this repository](https://github.com/ZitRos/utils-find-duplicates)), then launch it with 
[NodeJS](https://nodejs.org):

```bash
node index C:\Users\ZitRo\Pictures
```

Both Windows and Linux are supported.

Example
-------

```txt
node index Z:\ZitRos\Gallery
Checked 2562 files of 4991.02 Mb
Found 8 duplicated files:
╔ 1 duplicate of Z:\ZitRos\Gallery\MyProjectsMedia\TimingKit\2016-11-05_172454 - Last 6 months report.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2016-11-05_172454.png
╔ 1 duplicate of Z:\ZitRos\Gallery\MyProjectsMedia\TimingKit\2016-11-07_152948.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2016-11-07_152948.png
╔ 1 duplicate of Z:\ZitRos\Gallery\MyProjectsMedia\TimingKit\2016-11-09_221212.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2016-11-09_221212.png
╔ 1 duplicate of Z:\ZitRos\Gallery\MyProjectsMedia\TimingKit\2017-05-05_225317.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2017-05-05_225317.png
╔ 1 duplicate of Z:\ZitRos\Gallery\MyProjectsMedia\TimingKit\2017-05-11_014114.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2017-05-11_014114.png
╔ 1 duplicate of Z:\ZitRos\Gallery\MyProjectsMedia\TimingKit\2017-05-11_015200-linked-2017-05-11_014114.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2017-05-11_015200.png
╔ 1 duplicate of Z:\ZitRos\Gallery\Screenshots\112646cc-75f9-11e5-95cc-3db82abf1706.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2015-10-19_003342.png
╔ 1 duplicate of Z:\ZitRos\Gallery\Screenshots\2014-08-25_133932.png:
╚══ Z:\ZitRos\Gallery\Screenshots\2014-08-25_134000.png
```

License
-------

[MIT](license) © [Nikita Savchenko](https://nikita.tk)