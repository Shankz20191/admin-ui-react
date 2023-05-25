export const searchQuery = (text, users) => {
  const filteredUsers = users.filter((user) => {
    return Object.values(user)
      .join(' ')
      .toLowerCase()
      .includes(text.toLowerCase());
  });
  return filteredUsers;
};
