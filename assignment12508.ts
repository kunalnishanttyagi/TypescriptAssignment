/*

// Description
const data = {
  user: {
    id: 123,
    name: "John Doe",
    addresses: [
      {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: 12345,
      },
      {
        street: "456 Elm St",
        city: "Oz",
        postalCode: 67890,
      },
    ],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
};

*/

// // lets make the function
function flattenObject(
  obj: Record<string, any>,
  parentKey: string = "",
  result: Record<string, any> = {}
): Record<string, any> {
  for (const key in obj) {

    const value = obj[key];
    const newKey = parentKey!==""?`${parentKey}.${key}`:key;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      // nested object
      flattenObject(value, newKey, result);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        // if not primitive and nested send again
        if (item && typeof item === "object") {
          flattenObject(item, `${newKey}.${index}`, result);
        } else {
          // it is normal like strng or number or any other primitive
          result[`${newKey}.${index}`] = item;
        }
      });
    } else {
      // primitive value
      result[newKey] = value;
    }
  }
  return result;
}
const data = {
  user: {
    id: 123,
    name: "John Doe",
    addresses: [
      {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: 12345,
      },
      {
        street: "456 Elm St",
        city: "Oz",
        postalCode: 67890,
      },
    ],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
  user1: {
    id: 123,
    name: "John Doe",
    addresses: [
      {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: 12345,
      },
      {
        street: "456 Elm St",
        city: "Oz",
        postalCode: 67890,
      },
    ],
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
};

console.log(flattenObject(data));