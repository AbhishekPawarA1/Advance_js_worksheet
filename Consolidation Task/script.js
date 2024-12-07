let url =
  "https://apipractice-85bc9-default-rtdb.asia-southeast1.firebasedatabase.app/.json";


fetch(url)
  .then((res) => res.json())
  .then((data) => processData(data))
  .catch((error) => console.log("Error in fetching data:", error));

function processData(data) {
  console.log("Raw Data:", data);

  const roleFrequency = data.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});
  console.log("Role Frequency Map:", roleFrequency);

  const searchTerm = "Admin"; 
  const filteredUsers = data.filter(
    (user) =>
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("Filtered Users:", filteredUsers);

  const sortPreference = "age"; 
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortPreference === "age") return a.age - b.age;
    if (sortPreference === "name") return a.name.localeCompare(b.name);
  });
  console.log("Sorted Users:", sortedUsers);

  const roleToFilter = "Editor"; 
  const chainingResult = data
    .filter((user) => user.role === roleToFilter)
    .map((user) => user.name)
    .sort()
    .reduce(
      (acc, name) => {
        acc.sortedNames.push(name);
        acc.frequency[name] = (acc.frequency[name] || 0) + 1;
        return acc;
      },
      { sortedNames: [], frequency: {} }
    );
  console.log("Method Chaining Result:", chainingResult);
  const UserManager = {
    users: data,
    calculateAverageAge() {
      return (
        this.users.reduce((acc, user) => acc + user.age, 0) / this.users.length
      );
    },
  };
  const averageAge = UserManager.calculateAverageAge();
  console.log("Average Age:", averageAge);
}
