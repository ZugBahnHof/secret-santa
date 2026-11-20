const names = [
    "Julian 👑",
    "Léo 🏋️",
    "Zack 🎧",
    "Jakob 🚗",
    "Antoine 🗼",
    "Gabriel 📢",
    "Vicky 🦜",
    "Agathe 🍵",
    "Sophie 🔫",
    "Hanré 📷",
    "Misaki 🥢",
    "Majo 🏃‍♀️",
    "Lucy 🍞",
    "Finlay 🍻",
    "Véro 🏊",
];

const codes = [
    "🎄 🗻 🍡 ❄️",
    "🎅 🗾 🍣 🎁",
    "⛩️ 🎄 🦌 🌸",
    "🍵 ☃️ 🗻 🎁",
    "🦊 🔔 🎄 🍡",
    "🗼 🎅 🍰 ❄️",
    "🏯 🎄 🍶 ⛄",
    "🐈 🎁 🍜 🎅",
    "🗻 🧤 🎄 🍵",
    "🍓 🍰 🎄 🎌",
    "⛩️ 🛷 ❄️ 🦌",
    "🎍 🎅 🍱 ✨",
    "🐻 🎄 🍡 🔔",
    "🗾 ⛄ 🍶 🎁",
    "🧧 🎄 🐉 ❄️",
];

const giftAssignments = [3, 11, 6, 4, 10, 9, 2, 5, 0, 14, 1, 12, 8, 7, 13];

export function isValidPassword(password: string): boolean {
    return codes.includes(password);
}

export function getRecipient(password: string): string {
    const index = codes.indexOf(password);
    if (index === -1) {
        throw new Error("Invalid password");
    }
    const recipientIndex = giftAssignments[index];
    return names[recipientIndex];
}