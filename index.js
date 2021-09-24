const formatREVDate = (date) => {
  const pad = (number) => {
    if (number < 10) {
      return '0' + number;
    }
    return '' + number;
  }

  return date.getUTCFullYear() + '' +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' + pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds());
}

const js2vcard = (args = {
  fullName: "",
  firstName: "",
  lastName: "",
  title: "",
  workEmail: "",
  personalEmail: "",
  org: "",
  photo: "",
  workPhone: 0,
  workPhoneCountryCode: 0,
  homePhone: 0,
  homePhoneCountryCode: 0,
  cellPhone: 0,
  cellPhoneCountryCode: 0,
  workAddr1: "",
  workAddr2: "",
  workAddrCity: "",
  workAddrState: "",
  workAddrZip: "",
  homeAddr1: "",
  homeAddr2: "",
  homeAddrState: "",
  homeAddrCity: "",
  homeAddrZip: "",
}) => {
  const propArray = Object.keys(args)
    .map(prop => {
      switch (prop) {
        case "fullName":
          return `N:${args[prop].replace(/,/g, ';').replace(/ /g, '')};;`
        case ("firstName"):
          return `FN:${args[prop]}`
        case "lastName":
          return `LN:${args[prop]}`
        case "workEmail":
          return `EMAIL;type=INTERNET;type=WORK:${args[prop]}`
        case "personalEmail":
          return `EMAIL;type=INTERNET;type=HOME:${args[prop]}`
        case "workAddr1":
          return `ADR;type=WORK:;;${args[prop]}${args['workAddr2'] ? ", " + args['workAddr2'] + ";" : ''}${args['workAddrCity'] ? args['workAddrCity'] + ';' : ';'}${args['workAddrState'] ? args['workAddrState'] + ';' : ''};${args['workAddrZip'] ? args['workAddrZip'] + ';' : ''};`
        case "homeAddr1":
          return `ADR;type=HOME:;;${args[prop]}${args['homeAddr2'] ? ", " + args['homeAddr2'] + ";" : ''}${args['homeAddrCity'] ? args['homeAddrCity'] + ';' : ';'}${args['homeAddrState'] ? args['homeAddrState'] + ';' : ''};${args['homeAddrZip'] ? args['homeAddrZip'] + ';' : ''};`
        case "workPhone":
          return `TEL;type=WORK;type=VOICE;type=pref:${args['workPhoneCountryCode'] ? `+${args['workPhoneCountryCode']}` : ''
            }${args[prop]}`
        case "homePhone":
          return `TEL;type=HOME;type=VOICE;type=pref:${args['homePhoneCountryCode'] ? `+${args['homePhoneCountryCode']}` : ''
            }${args[prop]}`
        case "cellPhone":
          return `TEL;type=CELL;type=VOICE;type=pref:${args['cellPhoneCountryCode'] ? `+${args['cellPhoneCountryCode']}` : ''
            }${args[prop]}`
        case "photo":
          // return `PHOTO;MEDIATYPE#image/${args[prop].substring(args[prop].lastIndexOf(".") + 1)}:${args[prop]} `
          return `PHOTO:${args[prop]} `
        default: return '';
      }
    })
    .filter(nullCheck => nullCheck);
  const timestamp = new Date();
  return (
    `BEGIN:VCARD\nVERSION:3.0\n${propArray.join("\n")} \nREV:${formatREVDate(timestamp)} \nEND: VCARD`
  );
}

module.exports = js2vcard;