import {ǃ, ಠ_ಠ} from "../data/crypto.obfuscated";

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

]