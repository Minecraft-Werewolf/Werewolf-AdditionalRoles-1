import { werewolf } from "@mc-werewolf/module";

const PREFIX = "werewolf-additionalroles-1";

werewolf.defineRoles([
    {
        id: "nekomata",
        name: `${PREFIX}.role.name.nekomata`,
        description: `${PREFIX}.role.description.nekomata`,
        faction: "village",
        index: 100,
    },
    {
        id: "greedy-wolf",
        name: `${PREFIX}.role.name.greedy-wolf`,
        description: `${PREFIX}.role.description.greedy-wolf`,
        faction: "werewolf",
        divinationResult: "werewolf",
        index: 102,
    },
    {
        id: "lone-wolf",
        name: `${PREFIX}.role.name.lonewolf`,
        description: `${PREFIX}.role.description.lonewolf`,
        faction: "werewolf",
        divinationResult: "werewolf",
        index: 103,
    },
    {
        id: "cultist",
        name: `${PREFIX}.role.name.cultist`,
        description: `${PREFIX}.role.description.cultist`,
        faction: "werewolf",
        divinationResult: "village",
        index: 104,
    },
    {
        id: "wolf-bound",
        name: `${PREFIX}.role.name.wolf-bound`,
        description: `${PREFIX}.role.description.wolf-bound`,
        faction: "village",
        divinationResult: "werewolf",
        index: 105,
    },
]);
