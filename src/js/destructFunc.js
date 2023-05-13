export default function destruct({ special }) {
  return special.map(({
    name, id, icon, description = 'Описание недоступно',
  }) => (
    {
      name,
      id,
      icon,
      description,
    }
  ));
}
