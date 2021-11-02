// (function () {
//     String.prototype.ensureStart = function (str) {
//         if (!this.startsWith(str)) {
//             return `${str}${this}`;
//         }
//         return this.toString();
//     };

//     String.prototype.ensureEnd = function (str) {
//         if (!this.endsWith(str)) {
//             return `${this}${str}`;
//         }
//         return this.toString();
//     };

//     String.prototype.isEmpty = function () {
//         return this.toString() === '';
//     };

//     String.prototype.truncate = function (n) {
//         if (this.length <= n) {
//             return this.toString();
//         }
        
//         if (this.includes(' ')) {
//             let splittedStr = this.split(' ');
//             while (splittedStr.join(' ').length + 3 > n) {
//                 splittedStr.pop();
//             }

//             let newString = `${splittedStr.join(' ')}...`;
//             return newString;
//         }
        
//         if (n > 3) {
//             let string = `${this.slice(0, n - 3)}...`;
//             return string;
//         }

//         return `.`.repeat(n);
//     };

//     String.format = function (string, ...params) {
//         let replaceRegex = /{(\d+)}/g;
//         let replaceString = string.replace(replaceRegex, (match, group1) => {
//             let index = Number(group1);
//             if (params[index] !== undefined) {
//                 return params[index];
//             }

//             return match;
//         });

//         return replaceString;
//     }
// }
// )();


(function() {
    String.prototype.ensureStart = function(str) {
        let toStr = this.toString();
        if (toStr.startsWith(str)) {
            return toStr;
        } else {
            return str+toStr;
        }
    }
    String.prototype.ensureEnd = function (str) {
        let toStr = this.toString();
        if (toStr.endsWith(str)) {
            return toStr;
        } else {
            return toStr+str;
        }
    }
 
    String.prototype.isEmpty = function () {
        return this.length == 0;
    }
 
    String.prototype.truncate = function (n) {
        const toStr = this.toString();
        if (this.length <= n) {
            return this.toString();
        }
        if (this.length < 4) {
            let str = toStr.substring(0,this.length-n);
            str = str + ".".repeat(n);
            return str;
        } else {
            const splitted = toStr.split(" ");
            if (splitted.length == 1) {
                return toStr.substring(0, n-3) + "...";
            } else {
                let result = "";
                for (let i = 0; i < splitted.length; i++) {
                    if (result.length + splitted[i].length <= n-3) {
                        result += " " + splitted[i];
                    } else {
                        return result.trim() + "...";
                    }
                }
                return result + "...";
            }
        }
    }
 
    String.format = function(str,...params) { //params = [5,7,12];
        // let result = str.substring(0, str.indexOf(`{${0}}`));
        let result = str;
        //"Ivan{1} Ivanov"
 
        for (let i = 0; i < params.length; i++) {
            result = result.replace(`{${i}}`, params[i]);
        }
        return result;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
'dog');
console.log(str);

