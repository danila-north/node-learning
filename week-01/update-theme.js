const user = {
  name: "Данила",
  settings: { theme: "dark", lang: "ru" },
};

function updateTheme(user, newTheme) {
    const deepCopy = structuredClone(user);
    deepCopy.settings.theme = newTheme;
    return deepCopy;
}

const updated = updateTheme(user, "light");
console.log(updated.settings.theme); // light
console.log(user.settings.theme);    // dark