
# ****windowsapps****

A javascript library for managing installed applications on windows


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)


## **Installation**

***To install the windowsappsjs, use npm.***

```{.sourceCode .bash}
npm install windowsapps
```

or

```{.sourceCode .bash}
npm i windowsapps
```
## **Documentation**

As [windowsapps module in python](https://pypi.org/project/windowsapps/) this module also does the same operations such
as getting the list of applicaions installed ,searching for an installed application or opening an applicaion.

#### ****Importing the module:****
```{.sourceCode .bash}
// Import the required functions from the package
const {get_apps,find_app,open_app} = require("windowsapps")
```

****Below is the info and usage of each functions:****
### get_apps():

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;This function is used to get the list of all applications
installed.\
It returns the ***Name*** and ***AppID*** of each application installed.

#### Usage:
```{.sourceCode .bash}
/* get the list of applications installed using get_apps function */
console.log(get_apps()) /* get the list of applications installed using get_apps function */
```

### find_app(appname):

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;This function is used to find/search for application in the list of installed applications. It returns the ***Name*** and ***AppID***
of the application searched/found or returns ***Application not found*** if the application is not installed or found.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `appname`      | `string` | **Required**. Name of the application to be searched |

#### Usage:
```{.sourceCode .bash}
/*Find or search an application using find_app function*/
console.log(find_app('notepad')) /*prints the Name and AppID of the application searched*/
```

### open_app(appname):

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;This function is used to open/start an installed application. It returns ***Application not found*** if the application is not installed or found.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `appname`      | `string` | **Required**. Name of the application to be searched |

#### Usage:
```{.sourceCode .bash}
/*Open or start an application using open_app function*/
console.log(open_app("notepad")) /*prints "Application opened" if success or prints "Application not found" if failed to start application */
```

## ****Platform****

**Windows only**
## ****License****

[MIT](https://choosealicense.com/licenses/mit/)


## ****Support****

For support, you can [buy me a cofee ☕](https://www.buymeacoffee.com/programandlinux)

or

You can even pay a fraction of BTC to my BTC address: **bc1qwxpusvdd3w9vglmdwn945uz2m87czrh3na52mq**
## ****Authors****

- [@programming.and.linux](https://github.com/programming-and-linux/)
- [program14102003@gmail.com](mailto:program14102003@gmail.com)


## ****🔗 Links****
[![YouTube Channel Views](https://img.shields.io/youtube/channel/views/UCXcA-zOS4fOa0pMnYLzPACw?color=white&label=Programming-and-linux&logoColor=red&style=social)](https://www.youtube.com/channel/UCXcA-zOS4fOa0pMnYLzPACw)

