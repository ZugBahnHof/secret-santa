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

const giftAssignments = [11, 9, 4, 8, 10, 12, 14, 13, 7, 1, 2, 3, 6, 5, 0];

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