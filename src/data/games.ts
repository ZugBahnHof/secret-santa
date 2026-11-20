import {ǃ, ಠ_ಠ} from "./crypto.obfuscated";
import {isValidPassword, getRecipient} from "./dk_house_game.ts";

export type Game = {
    slug: string;
    checkPassword: (password: string) => boolean;
    getRecipient: (password: string) => string;
}

export const games: Game[] = [
    {
        slug: "coole-tuler-2024",
        checkPassword: ǃ,
        getRecipient: ಠ_ಠ,
    },
    {
        slug: "dk-house-2026",
        checkPassword: isValidPassword,
        getRecipient,
    }
]