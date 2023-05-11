export default function destruct(obj) {
  if (Array.isArray(obj) || !Object.keys(obj).length) {
    throw new Error('Invalid object');
  }
  const res = [];
  const specialField = obj.special;
  // eslint-disable-next-line array-callback-return
  specialField.map((el) => {
    const {
      name, id, icon, description = 'Описание недоступно',
    } = el;
    // eslint-disable-next-line no-shadow
    const obj = {};
    obj.name = name;
    obj.id = id;
    obj.icon = icon;
    obj.description = description;
    res.push(obj);
  });
  return res;
}
