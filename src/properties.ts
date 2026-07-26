import type { AddonProperties } from "@kairo-js/properties";

export const properties: AddonProperties = {
    id: "werewolf-additionalroles-1", //# // a-z & 0-9 - _
    metadata: {
        authors: ["shizuku86"],
    },
    header: {
        name: "Werewolf Additional Roles I",
        description: "The first expansion pack introducing new roles to the Werewolf game.",
        version: {
            major: 0,
            minor: 1,
            patch: 3,
        },
        min_engine_version: { major: 1, minor: 21, patch: 132 },
    },
    minecraftDependencies: [
        {
            module_name: "@minecraft/server",
            version: "2.8.0",
        },
        {
            module_name: "@minecraft/server-ui",
            version: "2.0.0",
        },
    ],
    /** 蜑肴署繧｢繝峨が繝ｳ */
    dependencies: {
        /**
         * id: version (string) // "kairo": "1.0.0"
         */
        kairo: "^1.0.0-beta.0",
        "kairo-database": "^1.0.0-beta.0",
        "werewolf-gamemanager": "^0.1.0",
    },
    tags: ["official", "stable"],
};
