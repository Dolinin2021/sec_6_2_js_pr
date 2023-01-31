export default function selectionPanel({
  special: [
    {
      id: specialFirstId,
      name: speciaFirstlName,
      icon: speciaFirstlIcon,
      description: specialFirstDescription = 'Описание недоступно',
    },
    {
      id: specialSecondId,
      name: speciaSecondlName,
      icon: speciaSecondlIcon,
      description: specialSecondDescription = 'Описание недоступно',
    }],
}) {
  const arr = [];
  arr.push({
    id: specialFirstId,
    name: speciaFirstlName,
    icon: speciaFirstlIcon,
    description: specialFirstDescription,
  },
  {
    id: specialSecondId,
    name: speciaSecondlName,
    icon: speciaSecondlIcon,
    description: specialSecondDescription,
  });
  return arr;
}
