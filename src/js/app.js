export default function selectionPanel(obj) {
  const { special } = obj;
  const arr = [];
  for (const {
    id, name: specialName, icon, description = 'Описание недоступно',
  } of special) {
    arr.push({
      id,
      name: specialName,
      icon,
      description,
    });
  }
  return arr;
}
