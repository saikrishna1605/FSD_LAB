function createProfile({ name, email }) {
    return { name, email };
}
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield'
};
const profile = createProfile(user);
console.log(profile);