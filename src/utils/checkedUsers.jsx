export const checkedUsers = (name, checked, currentTable, users) => {
  if (name === 'allSelect') {
    let tempUsers = currentTable.map((user) => {
      return { ...user, isChecked: checked };
    });
    let newUsers = users.map(
      (user) => tempUsers.find((tempUser) => tempUser.id === user.id) || user
    );
    return newUsers;
  } else {
    let tempUsers = currentTable.map((user) => {
      return user.name === name ? { ...user, isChecked: checked } : user;
    });
    let newUsers = users.map(
      (user) => tempUsers.find((tempUser) => tempUser.id === user.id) || user
    );
    return newUsers;
  }
};
