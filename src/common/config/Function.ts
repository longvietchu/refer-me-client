import moment from 'moment';
// import _ from 'lodash';

export const validatePhone = (str: string) => {
    let re = /^[0-9+]{9,11}$/;
    return re.test(str);
};

// convert number 5000000=> 5.000.000
export const numberWithCommas = (x: any, c = '.') =>
    Math.round(x)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, c ? c : '.');

export const Gender = {
    male: 0,
    female: 1
};

export const toPriceVnd = (str: string) => {
    if (str) {
        let stringPrice = str.toString().split('.');
        let headStringPrice = `${stringPrice[0].replace(
            /(\d)(?=(\d{3})+(?!\d))/g,
            '$1.'
        )}`;
        return stringPrice.length === 1
            ? headStringPrice
            : headStringPrice.concat(`,${stringPrice[1]}`);
    } else {
        return '';
    }
};

// cắt chuỗi dạng something...
export const ellipsis = (str = '', max = 30) =>
    str.length > max ? `${str.substring(0, max)}...` : str;

// tính chiều rộng của item dưới dạng flatlist

// chuyển string thành dạng viết hoa
export const toUpperCase = (str: string) => (str ? str.toUpperCase() : '');

export const sortType = {
    sortDefault: 1,
    latestNews: 2,
    priceUp: 3,
    priceDown: 4
};

// delete item from array
// export const removeItemFromArr2 = (items: any, index: any) => {
//     let fill = items.filter((e, i) => i !== index);
//     return fill;
// };

export const removeItemFromArr = (items: any, index: any) => {
    items.splice(index, 1);
    return items;
};

// sum field of array object
export const totalByValue = (data: any, field: any) =>
    data.length === 0
        ? 0
        : data
              .map((item: any) => item[field])
              .reduce((prev: any, next: any) => prev + next);

// export const cutStringBetweenCharacters = (str, char1, char2, addFirst) => {
//     let re = `\\${char1}([^${char2}]+)\\${char2}`;
//     let reg = new RegExp(re);
//     let s = reg.exec(str) ? reg.exec(str)[1] : '';
//     return addFirst ? char1 + s : s;
// };
// export const mark = (str, char1, char2, tag, endTag) => {
//     let re = `\\${char1}(.*?)\\${char2}`;
//     let reg = new RegExp(re, 'gi');
//     return str.replace(reg, `<${tag}>$1</${endTag || tag}>12`);
// };

// export const cutStringBetweenCharacters2 = (str, char1, char2, addFirst) => {
//     let s = str.split(char1).pop().split(char2)[0];
//     return addFirst ? char1 + s : s;
// };

// export const replaceStrByIndex = (str, index, newStr) =>
//     str.substr(0, index) + newStr + str.substr(index + 1);

// global.langCode = 'vi';

// export const getLangCode = () => global.langCode;
// export const setLangCode = (langCode) => {
//     global.langCode = langCode;
// };

export const formatDateTime = (time: any) =>
    moment(time, 'DD/MM/YYYY').locale('vi').format('dddd (DD/MM/YYYY)');

export const formatDateTimeDDMM = (time: any) =>
    moment(time, 'DD/MM/YYYY').locale('vi').format('DD/MM/YYYY');

export const formatDateTimeDDMMTommorrow = (time: any) =>
    moment(time, 'DD/MM/YYYY').add(1, 'days').locale('vi').format('DD/MM/YYYY');

export const getTime = (time: any) => {
    let str = moment(time).locale('vi').format('DD/MM/YYYY HH:mm');
    return str.substring(11);
};

export const getTimeHHMM = (time: any) => {
    let str = moment(time).locale('vi').format('DD/MM/YYYY HH:mm');
    return str.substring(11, 16);
};

export const getTimeHH = (time: any) => {
    let str = moment(time).locale('vi').format('HH:mm');
    return str;
};

export const formatYear = (time: any) => {
    let str = moment(time).locale('vi').format('YYYY');
    return str;
};

export const formatMMMYYYY = (time: any) => {
    let str = moment(time).locale('vi').format('MMM YYYY');
    return str;
};

export const getDateOfMonth = (time: any) => {
    let str = moment(time).locale('vi').format('DD/MM');
    return str;
};

export const getDate = (time: any) => {
    let str = moment(time).locale('vi').format('DD/MM/YYYY HH:mm');
    return str.substring(0, 11);
};

export const getDateVisitor = (time: any) => {
    let str = moment(time).locale('vi').format('YYYY-MM-DD HH:mm');
    return str.substring(0, 11);
};

export const formatDatetime = (date: any, time: any) => {
    const strDate = moment(date).locale('vi').format('YYYY-MM-DD HH:mm');
    const strTime = moment(time).locale('vi').format('YYYY-MM-DD HH:mm:ss');
    return strDate.substring(0, 11) + strTime.substring(11);
};

export const formatTimeDDSS = (time: any) => {
    const strDate = moment(time).locale('vi').format('YYYY-MM-DD HH:mm:ss');
    return strDate;
};

export const getDateTime = (time: any) => {
    let str = moment(time).locale('vi').format('DD/MM/YYYY HH:mm');
    return str;
};

// export const VideoMimeType = {
//     flv: 'video/x-flv',
//     mp4: 'video/mp4',
//     m3u8: 'application/x-mpegURL',
//     ts: 'video/MP2T',
//     '3gp': 'video/3gpp',
//     mov: 'video/quicktime',
//     avi: 'video/x-msvideo',
//     wmv: 'video/x-ms-wmv'
// };

// export const StringFromLastCharacter = (str, char) =>
//     str.substring(str.lastIndexOf(char) + 1);

// export const toArrayBySeparators = (str, separators) => {
//     /**
//      * example: txt = "aaaa55bbb33cccc" => ["aaaa", "55", "bbb", "33", "cccc"]
//      * toArrayBySeparators(txt, [55,33])
//      */
//     let reg = new RegExp(`(${separators.join('|')})`);
//     return str
//         .split(reg)
//         .filter((x) => x.length > 0)
//         .map((x) => x);
// };

// export const getRange = (startDate, endDate, type) => {
//     let fromDate = moment(startDate);
//     let toDate = moment(endDate);
//     let range = [];
//     let range2 = [];
//     // for (let i = 0; i < diff; i++) {
//     //   console.log('diff: ', diff);
//     //   range.push(moment(startDate).add(i, type))
//     // }
//     while (toDate > fromDate || fromDate.format('M') === toDate.format('M')) {
//         range.push(fromDate);
//         range2.push(fromDate.format('DD/MM'));
//         fromDate.add(1, type);
//     }
//     return range2;
// };

// export const getFirstAndLastWords = (text) => {
//     let t = text.split(' ');
//     return `${t[0]} ${t[t.length - 1]}`;
// };

// export const shortFullname = (text) => {
//     let arr = text.split(' ');
//     let name = '';
//     arr.forEach((e, i) => {
//         if (i === 0) {
//             name += `${e} `;
//         } else if (i === arr.length - 1) {
//             name += arr.length === 2 ? e : ` ${e}`;
//         } else {
//             name += `${e.charAt(0)}`;
//         }
//     });
//     return name;
// };
// export const getTimeDDMM = (time: any) => {
//     let t1 = new Date(
//         moment(time, 'DD/MM/YYYY').format('MM/DD/YYYY')
//     ).getTime();
//     return t1;
// };
// export const sortDataByTime = (data) => {
//     data.sort((a, b) => {
//         let t1 = moment(a.time, 'DD-MM-YYYY').format('MM/YYYY');
//         let t2 = moment(b.time, 'DD-MM-YYYY').format('MM/YYYY');
//         if (t1 > t2) return -1;
//         else {
//             if (t1 < t2) return 1;
//             else return 0;
//         }
//     });
//     return data;
// };

// export const checkDifferMonth = (t1, t2) => t1 !== t2;
// export const mapTimeVNToWorld = (data) => {
//     if (!data) return data;
//     // data 07/05/2019
//     let str = data && data.split('/');
//     if (str.length < 2) return data;
//     return `${str[1]}/${str[0]}/${str[2]}`;
// };
// export const checkFormatWhiteSpace = (str) => {
//     if (!str.replace(/\s/g, '').length) return true;
//     return false;
// };

// // check 1 mảng dạng [a,b,c] có phần tử nào null,undefined,empty ko.
// // nếu có trả về index phần từ đầu tiên ko thì return true
// export const checkFormatArray = (array) => {
//     let i = -1;
//     if (!_.isEmpty(array)) {
//         for (let j = 0; j < array.length; j++) {
//             if (
//                 _.isUndefined(array[j]) ||
//                 _.isNull(array[j]) ||
//                 array[j] === ''
//             ) {
//                 i = j;
//                 break;
//             }
//         }
//     }
//     if (i === -1) {
//         return true;
//     } else {
//         return i;
//     }
// };

// export const checkFormatArrayWhiteSpace = (array) => {
//     let i = -1;
//     if (!_.isEmpty(array)) {
//         for (let j = 0; j < array.length; j++) {
//             if (checkFormatWhiteSpace(array[j])) {
//                 i = j;
//                 break;
//             }
//         }
//     }
//     if (i === -1) {
//         return true;
//     } else {
//         return i;
//     }
// };

// // check 1 phần từ có null, undefined hay empty ko
// export const checkFormatItem = (item) => {
//     let i = -1;
//     if (
//         _.isUndefined(item) ||
//         _.isNull(item) ||
//         item === '' ||
//         item === 'NaN' ||
//         item === 0
//     ) {
//         i = 0;
//     }
//     if (i === -1) {
//         return true;
//     } else {
//         return i;
//     }
// };

// export const convertTypeFile = (name) => {
//     if (name) {
//         const fileNameTmp = name.toLowerCase();
//         if (fileNameTmp.endsWith('.doc') || fileNameTmp.endsWith('.dox')) {
//             return 0;
//         }
//         if (fileNameTmp.endsWith('.xls') || fileNameTmp.endsWith('.xlsx')) {
//             return 1;
//         }
//         if (fileNameTmp.endsWith('.pdf')) {
//             return 2;
//         }
//         if (
//             fileNameTmp.endsWith('.heic') ||
//             fileNameTmp.endsWith('.jpeg') ||
//             fileNameTmp.endsWith('.jpg') ||
//             fileNameTmp.endsWith('.png') ||
//             fileNameTmp.endsWith('.bmp')
//         ) {
//             return 3;
//         }
//     }
//     return 0;
// };

// export const getStartDateOfQuater = (quarter) => {
//     return moment().quarter(quarter).startOf('quarter').format('YYYY-MM-DD');
// };
// export const getEndDateOfQuater = (quarter) => {
//     return moment().quarter(quarter).endOf('quarter').format('YYYY-MM-DD');
// };

// export const changePositionElement = (element, array) => {
//     let restArray = array.filter((e) => e != element);
//     restArray.splice(0, 0, element);
//     return restArray;
// };
// export const getMimeType = (fileExt) => {
//     switch (fileExt) {
//         case 'doc':
//             return 'application/msword';
//         case 'docx':
//             return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
//         case 'ppt':
//             return 'application/vnd.ms-powerpoint';
//         case 'pptx':
//             return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
//         case 'xls':
//             return 'application/vnd.ms-excel';
//         case 'xlsx':
//             return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
//         case 'pdf':
//             return 'application/pdf';
//         case 'png':
//             return 'image/png';
//         case 'bmp':
//             return 'application/x-MS-bmp';
//         case 'gif':
//             return 'image/gif';
//         case 'jpg':
//             return 'image/jpeg';
//         case 'jpeg':
//             return 'image/jpeg';
//         case 'avi':
//             return 'video/x-msvideo';
//         case 'aac':
//             return 'audio/x-aac';
//         case 'mp3':
//             return 'audio/mpeg';
//         case 'mp4':
//             return 'video/mp4';
//         case 'apk':
//             return 'application/vnd.Android.package-archive';
//         case 'txt':
//         case 'log':
//         case 'h':
//         case 'cpp':
//         case 'js':
//         case 'html':
//             return 'text/plain';
//         default:
//             return '*/*';
//     }
// };
