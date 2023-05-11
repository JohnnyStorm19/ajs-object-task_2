import destruct from '../destructFunc';

test('Функция работает правильно', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
      {
        id: 10,
        name: 'Ульта',
        icon: 'http://...',
        description: 'Самый ужасающий удар во вселенной',
      },
    ],
  };
  const func = destruct(character);
  const res = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 10,
      name: 'Ульта',
      icon: 'http://...',
      description: 'Самый ужасающий удар во вселенной',
    },
  ];
  expect(func).toEqual(res);
});
test('В функцию передан невалидный объект', () => {
  const error = 'Invalid object';
  expect(() => {
    destruct(['hello world']);
  }).toThrow(error);
});
