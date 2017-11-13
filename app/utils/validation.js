export const required = value => (value ? undefined : 'Required');

export const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'The email is not correct'
    : undefined;
};

const minLength = min => (value) => {
  return value && value.length < min ? `Must be ${min} characters or more` : undefined;
};

export const minLength6 = minLength(6);

export const isFile = (value) => {
  if (!value) {
    return undefined;
  }
  return (new RegExp('(' + ['.pdf', '.doc', 'docx'].join('|').replace(/\./g, '\\.') + ')$')).test(value.name) ? undefined : 'Wrong file format';
};
