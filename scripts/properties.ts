/**
 * scripts/properties から manifest.jsonを自動生成する
 * propertiesは、アドオン間通信においても、識別などに利用する
 */

import type { KairoAddonProperties } from "@kairo-ts/router";

export type SemVer = {
    major: number;
    minor: number;
    patch: number;
    prerelease?: string | undefined; // "preview.3" / "rc.1"
    build?: string | undefined; // "abc123" (commit)
};

/**
 * 文末に # が記述されている箇所を適宜修正して使用します。
 * Modify and use where # is written at the end of the sentence as appropriate
 */

export const properties: KairoAddonProperties = {
    id: "werewolf-additionalroles-1", // a-z & 0-9 - _
    metadata: {
        /** 製作者の名前 */
        authors: ["shizuku86"],
    },
    header: {
        name: "Werewolf Additional Roles I",
        description: "The first expansion pack introducing new roles to the Werewolf game.",
        version: {
            major: 1,
            minor: 0,
            patch: 0,
            // prerelease: "preview.1",
            // build: "abc123",
        },
        min_engine_version: [1, 21, 100],
        uuid: "91f2e238-35ca-4d35-a594-685aa2f24f8e",
    },
    resourcepack: {
        name: "Use BP Name",
        description: "Use BP Description",
        uuid: "6d77d14e-49ee-4e8c-b7ed-ad5acf1d445a",
        module_uuid: "a7854fd8-5549-451e-8db2-820d0a8096b9",
    },
    modules: [
        {
            type: "script",
            language: "javascript",
            entry: "scripts/index.js",
            version: "header.version",
            uuid: "8146f24e-2906-449c-8d1b-63996a7e32fb",
        },
    ],
    dependencies: [
        {
            module_name: "@minecraft/server",
            version: "2.4.0",
        },
        {
            module_name: "@minecraft/server-ui",
            version: "2.0.0",
        },
    ],
    /** 前提アドオン */
    requiredAddons: {
        "werewolf-gamemanager": "1.0.0-dev.1",
    },
    tags: ["stable"],
};

/**
 * "official" を非公式に付与することは許可されていません。
 * 公認のアドオンには "approved" を付与します。
 * It is not allowed to assign "official" unofficially.
 * For approved addons, assign "approved".
 *
 */
export const supportedTags: string[] = ["official", "approved", "stable", "experimental"];
