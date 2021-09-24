# js2vcard

A small utility to generate a vcard v3 (vcf, contact card) compatible string, for exporting contacts to address books.

*This tool only supports a few basic vcard properties at the moment. I may expand its capabilities in the future time allowing.*

### Usage
```js
const js2vcard = require('js2vcard');

const vCardString = () => js2vcard({
  fullName: "Clinton, William",
  firstName: "Bill",
  lastName: "Clinton",
  title: "President 42",
  workEmail: "bill@whitehouse.gov",
  personalEmail: "billclinton@gmail.com",
  photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/440px-Bill_Clinton.jpg",
  workPhone: 5551234567,
  workPhoneExt: 42,
  workPhoneCountryCode: 1,
  workAddr1: '123 asdf dfd',
  workAddr2: 'suite 35',
  workAddrState: 'dc',
  workAddrCity: 'washington',
  workAddrZip: '15931',
  homeAddr1: 'fsdfsd sd',
  homeAddr2: 'suite 4',
  homeAddrState: 'va',
  homeAddrCity: 'arlington',
  homeAddrZip: '22201',
})


// vCardString value, to be saved to a .vcard file
`
BEGIN:VCARD
VERSION:3.0
N:Clinton;William;;
FN:Bill
LN:Clinton
EMAIL;type=INTERNET;type=WORK:bill@whitehouse.gov
EMAIL;type=INTERNET;type=HOME:billclinton@gmail.com
PHOTO:https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/440px-Bill_Clinton.jpg 
TEL;type=WORK;type=VOICE;type=pref:+15551234567
ADR;type=WORK:;;123 asdf dfd, suite 35;washington;dc;;15931;;
ADR;type=HOME:;;fsdfsd sd, suite 4;arlington;va;;22201;; 
REV:20210924T173458 
END: VCARD
`
```

Because the RFC implementation of vCard seems very inconsistent, I have based the formatting around Apple's implementation in the MacOS contacts app (which should translate well to iOS as well).



### Supported properties:

| property | data type | example |
| - | - | - |
| fullName | string | "Clinton, William" |
| firstName | string | "Bill" |
| lastName | string | "Clinton" |
| workEmail | string | "bill@whitehouse.gov" |
| personalEmail | string | "bill@whitehouse.gov" |
| photo | string(URL) | "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/440px-Bill_Clinton.jpg" |
| workPhone | number | 5553331923 |
| workPhoneCountryCode | number | 1 |
| homePhone | number | 5553331924 |
| homePhoneCountryCode | number | 1 |
| cellPhone | number | 5553331925 |
| cellPhoneCountryCode | number | 2 |
| workAddr1 | string | "1600 Pennsylvania Avenue NW" |
| workAddr2 | string | "Suite 42" |
| workAddrCity | string | "Washington " |
| workAddrState | string | "DC" |
| workAddrZip | string | "20500-123" |
| homeAddr1 | string | "1600 Pennsylvania Avenue NW" |
| homeAddr2 | string | "Suite 42" |
| homeAddrCity | string | "Washington " |
| homeAddrState | string | "DC" |
| homeAddrZip | string | "20500-123" |


