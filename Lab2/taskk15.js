function createProfile({ name, age, interests }) {
    const [primaryInterest, secondaryInterest] = interests;
    return {
      name,
      age,
      primaryInterest,
      secondaryInterest,
    };
  }
  const input = {
    name: 'John',
    age: 25,
    interests: ['Reading', 'Traveling', 'Cooking'],
  };
  const profile = createProfile(input);
  console.log(profile);